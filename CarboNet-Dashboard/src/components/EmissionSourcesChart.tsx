import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Transport', value: 400 },
  { name: 'Electricity', value: 300 },
  { name: 'Food', value: 300 },
  { name: 'Waste', value: 200 },
];

const COLORS = ['#6B8E23', '#556B2F', '#2E8B57', '#3CB371'];

export default function EmissionSourcesChart() {
  return (
    <div className="bg-moss rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Emission Sources</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
