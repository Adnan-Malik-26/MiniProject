// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CarboNetToken is ERC20, Ownable {
    constructor(address initialOwner) ERC20("CarboNet Token", "CBNT") Ownable(initialOwner) {}

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}

contract CarboNet is Ownable {
    CarboNetToken public cbntToken;

    struct User {
        uint256 totalEmissions;
        uint256 carbonCredits;
        uint256 rewardsClaimed;
    }

    mapping(address => User) public users;

    event EmissionReported(address indexed user, uint256 amount);
    event CreditBought(address indexed user, uint256 amount);
    event CreditSold(address indexed user, uint256 amount);
    event RewardClaimed(address indexed user, uint256 amount);

    constructor(address initialOwner) Ownable(initialOwner) {
        cbntToken = new CarboNetToken(initialOwner);
    }

    function reportEmission(address user, uint256 amountKg) external {
        users[user].totalEmissions += amountKg;
        emit EmissionReported(user, amountKg);
    }

    function buyCredits(uint256 amountKg) external payable {
        require(msg.value >= amountKg * 1e14, "Insufficient payment");
        users[msg.sender].carbonCredits += amountKg;
        emit CreditBought(msg.sender, amountKg);
    }

    function sellCredits(uint256 amountKg) external {
        require(users[msg.sender].carbonCredits >= amountKg, "Not enough credits");
        users[msg.sender].carbonCredits -= amountKg;
        payable(msg.sender).transfer(amountKg * 1e14);
        emit CreditSold(msg.sender, amountKg);
    }

    function claimReward() external {
        User storage user = users[msg.sender];
        require(user.carbonCredits > user.totalEmissions, "No reward: emissions not fully offset");

        uint256 rewardAmount = (user.carbonCredits - user.totalEmissions) * 10 * 1e18;
        cbntToken.mint(msg.sender, rewardAmount);
        user.rewardsClaimed += rewardAmount;

        emit RewardClaimed(msg.sender, rewardAmount);
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function getNetEmissions(address user) external view returns (int256) {
        return int256(users[user].totalEmissions) - int256(users[user].carbonCredits);
    }
}
