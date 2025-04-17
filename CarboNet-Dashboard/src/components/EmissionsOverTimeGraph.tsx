import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', emissions: 50 },
  { name: 'Week 2', emissions: 40 },
  { name: 'Week 3', emissions: 35 },
  { name: 'Week 4', emissions: 60 },
];

export default function EmissionsOverTimeGraph() {
  return (
    <div className="bg-moss rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Emissions Over Time</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="emissions" stroke="#90EE90" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

