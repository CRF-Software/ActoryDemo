
export default function Insights() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">AI Insights</h2>
      <ul className="list-disc list-inside text-sm text-gray-700">
        <li>Most flaky test: "Checkout Flow"</li>
        <li>Top failure environment: "staging"</li>
        <li>Suggested Fix: Improve API error handling in login</li>
        <li>Auto-logged bugs: 14</li>
      </ul>
    </div>
  );
}
