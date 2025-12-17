import SubmitReport from "./pages/SubmitReport";
import BulkUpload from "./pages/BulkUpload";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">
        NGO Monthly Reporting System
      </h1>

      <SubmitReport />
      <BulkUpload />
      <Dashboard />
    </div>
  );
}

export default App;
