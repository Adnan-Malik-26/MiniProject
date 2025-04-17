const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-moss p-6 text-lightText flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-8">🌱 CarboNet</h2>
        <ul className="space-y-4">
          <li className="hover:text-sage cursor-pointer">Dashboard</li>
          <li className="hover:text-sage cursor-pointer">Marketplace</li>
          <li className="hover:text-sage cursor-pointer">Rewards</li>
          <li className="hover:text-sage cursor-pointer">Profile</li>
        </ul>
      </div>
      <div className="text-sm text-sage">© 2025 CarboNet</div>
    </div>
  );
};

export default Sidebar;

