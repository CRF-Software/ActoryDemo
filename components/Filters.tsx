
import { useState } from "react";

export default function Filters() {
  const [status, setStatus] = useState("");
  const [environment, setEnvironment] = useState("");

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Filters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select className="border p-2" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All Statuses</option>
          <option value="passed">Passed</option>
          <option value="failed">Failed</option>
        </select>
        <select className="border p-2" value={environment} onChange={(e) => setEnvironment(e.target.value)}>
          <option value="">All Environments</option>
          <option value="development">Development</option>
          <option value="staging">Staging</option>
          <option value="production">Production</option>
        </select>
      </div>
    </div>
  );
}
