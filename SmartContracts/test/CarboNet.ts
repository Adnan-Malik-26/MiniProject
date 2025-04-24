import { expect } from "chai";
import { ethers } from "hardhat";

describe("CarboNet", function () {
  async function deployFixture() {
    const [owner, user, oracle] = await hre.ethers.getSigners();

    const CarboNet = await hre.ethers.getContractFactory("CarboNet");
    const carboNet = await CarboNet.deploy(owner.address);
    await carboNet.waitForDeployment();

    const cbntAddress = await carboNet.cbntToken();
    const Token = await hre.ethers.getContractFactory("CarboNetToken");
    const cbnt = Token.attach(cbntAddress);

    return { owner, user, oracle, carboNet, cbnt };
  }

  it("should set owner correctly", async () => {
    const { carboNet, owner } = await deployFixture();
    expect(await carboNet.owner()).to.equal(owner.address);
  });

  it("should allow owner to set an oracle", async () => {
    const { carboNet, oracle } = await deployFixture();
    await carboNet.updateOracle(oracle.address, true);
    expect(await carboNet.authorizedOracles(oracle.address)).to.be.true;
  });

  it("should allow oracle to report emissions", async () => {
    const { carboNet, oracle, user } = await deployFixture();
    await carboNet.updateOracle(oracle.address, true);
    await carboNet.connect(oracle).reportEmission(user.address, 100);
    const userData = await carboNet.users(user.address);
    expect(userData.totalEmissions).to.equal(100);
  });

  it("should allow user to buy carbon credits", async () => {
    const { carboNet, user } = await deployFixture();
    const creditAmount = 50;
    const payment = hre.ethers.parseEther("0.005"); // 50 * 0.0001

    await carboNet.connect(user).buyCredits(creditAmount, { value: payment });
    const userData = await carboNet.users(user.address);
    expect(userData.carbonCredits).to.equal(creditAmount);
  });

  it("should not allow unauthorized oracle to report emissions", async () => {
    const { carboNet, user } = await deployFixture();
    await expect(
      carboNet.connect(user).reportEmission(user.address, 100)
    ).to.be.revertedWith("Not an authorized oracle");
  });

  it("should not allow reward if emissions exceed credits", async () => {
    const { carboNet, cbnt, user, oracle } = await deployFixture();

    await carboNet.updateOracle(oracle.address, true);
    await carboNet.connect(oracle).reportEmission(user.address, 100);

    await carboNet.connect(user).buyCredits(50, {
      value: hre.ethers.parseEther("0.005"),
    });

    await expect(carboNet.connect(user).claimReward()).to.be.revertedWith(
      "No reward: emissions not fully offset"
    );
  });
});

