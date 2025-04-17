const activities = [
  "Offset 5kg CO₂",
  "Purchased 20 credits",
  "Claimed 100 rewards",
  "Reduced emissions by 10%",
];

export default function RecentActivity() {
  return (
    <div className="bg-moss rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
      <ul className="space-y-2 text-lightText">
        {activities.map((activity, index) => (
          <li key={index} className="bg-forest rounded-xl p-3 shadow">
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
}
