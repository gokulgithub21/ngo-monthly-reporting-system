import { useState } from "react";
import axios from "axios";

function BulkUpload() {
  const [file, setFile] = useState(null);
  const [jobId, setJobId] = useState("");
  const [status, setStatus] = useState(null);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(
      "https://ngo-monthly-reporting-system.onrender.com/reports/upload",
      formData
    );
    setJobId(res.data.job_id);
  };

  const checkStatus = async () => {
    const res = await axios.get(
      `https://ngo-monthly-reporting-system.onrender.com/job-status/${jobId}`
    );
    setStatus(res.data);
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h4 className="card-title mb-3">Bulk CSV Upload</h4>

        <div className="d-flex gap-2 mb-2">
          <input
            type="file"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button className="btn btn-success" onClick={uploadFile}>
            Upload
          </button>
        </div>

        {jobId && (
          <div className="mt-2">
            <p><strong>Job ID:</strong> {jobId}</p>
            <button className="btn btn-outline-primary" onClick={checkStatus}>
              Check Status
            </button>
          </div>
        )}

        {status && (
          <pre className="mt-3 bg-light p-2 rounded">
            {JSON.stringify(status, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}

export default BulkUpload;
