
import { useEffect, useState } from "react";

export default function TestDataViewer() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const rowsPerPage = 20;

  useEffect(() => {
    fetch("/data/actory_test_data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load test data:", err));
  }, []);

  const pagedData = data.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Test Results (Page {page + 1})</h2>
      <table className="min-w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Status</th>
            <th className="border px-2 py-1">Environment</th>
            <th className="border px-2 py-1">Duration (s)</th>
            <th className="border px-2 py-1">Flakiness</th>
          </tr>
        </thead>
        <tbody>
          {pagedData.map((test) => (
            <tr key={test.id}>
              <td className="border px-2 py-1">{test.name}</td>
              <td className="border px-2 py-1">{test.status}</td>
              <td className="border px-2 py-1">{test.environment}</td>
              <td className="border px-2 py-1">{test.duration}</td>
              <td className="border px-2 py-1">{test.flakiness}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between">
        <button onClick={() => setPage(Math.max(page - 1, 0))} disabled={page === 0} className="px-3 py-1 border rounded">Previous</button>
        <button onClick={() => setPage(page + 1)} className="px-3 py-1 border rounded">Next</button>
      </div>
    </div>
  );
}
