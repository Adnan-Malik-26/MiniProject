import TotalEmissionsCard from "../components/TotalEmissionsCard";
import CarbonCreditsCard from "../components/CarbonCreditsCard";
import EmissionSourcesChart from "../components/EmissionSourcesChart";
import EmissionsOverTimeGraph from "../components/EmissionsOverTimeGraph";
import TokenBalanceCard from "../components/TokenBalanceCard";
import RewardsCard from "../components/RewardsCard";
import RecentActivity from "../components/RecentActivity";

const Dashboard = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <TotalEmissionsCard />
      <CarbonCreditsCard />
      <TokenBalanceCard />
      <RewardsCard />

      <div className="col-span-1 md:col-span-2">
        <EmissionSourcesChart />
      </div>

      <div className="col-span-1 md:col-span-2">
        <EmissionsOverTimeGraph />
      </div>

      <div className="col-span-1 md:col-span-3">
        <RecentActivity />
      </div>
    </div>
  );
};

export default Dashboard;
