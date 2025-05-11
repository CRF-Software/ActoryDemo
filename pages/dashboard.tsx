
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import Charts from "../components/Charts";
import AIAgentInsights from "../components/AIAgentInsights";
import TestDataViewer from "../components/TestDataViewer";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-6 space-y-8">
        <Filters />
        <Charts />
        <AIAgentInsights />
        <TestDataViewer />
      </main>
    </div>
  );
}
