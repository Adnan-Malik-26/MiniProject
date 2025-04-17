export default function TotalEmissionsCard() {
  return (
    <div className="bg-moss rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-2">Total Emissions (This Month)</h2>
      <p className="text-3xl font-semibold">123 kg CO₂</p>
      <button className="mt-4 bg-sage text-forest px-4 py-2 rounded-xl font-semibold">
        Offset Emissions
      </button>
    </div>
  );
}
