
export default function AIAgentInsights() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">AI Agent QA Insights</h2>
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
        <li>Flaky test identified: "Checkout Flow" (flakiness: 0.85)</li>
        <li>Root cause: API timeout on staging environment</li>
        <li>Suggested fix: Increase timeout from 3s to 5s and retry once</li>
        <li>Auto-logged bug: #1432 linked to GitHub issue tracker</li>
        <li>Environment most prone to failures: staging</li>
        <li>AI recommends grouping flaky tests for parallel debugging</li>
      </ul>
    </div>
  );
}
