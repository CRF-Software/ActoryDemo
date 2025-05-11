export default function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
