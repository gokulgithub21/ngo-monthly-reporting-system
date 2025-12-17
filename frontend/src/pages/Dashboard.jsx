import { useState } from "react";
import axios from "axios";

function Dashboard() {
  const [month, setMonth] = useState("");
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await axios.get(
      `https://ngo-monthly-reporting-system.onrender.com/dashboard?month=${month}`
    );
    setData(res.data);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title mb-3">Admin Dashboard</h4>

        <div className="d-flex gap-2 mb-3">
          <input
            className="form-control"
            placeholder="YYYY-MM"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
          <button className="btn btn-dark" onClick={fetchData}>
            Get Data
          </button>
        </div>

        {data && (
          <div className="row text-center">
            <div className="col-md-3">
              <div className="alert alert-primary">
                NGOs<br /><strong>{data.ngos}</strong>
              </div>
            </div>
            <div className="col-md-3">
              <div className="alert alert-success">
                People<br /><strong>{data.people}</strong>
              </div>
            </div>
            <div className="col-md-3">
              <div className="alert alert-warning">
                Events<br /><strong>{data.events}</strong>
              </div>
            </div>
            <div className="col-md-3">
              <div className="alert alert-info">
                Funds<br /><strong>{data.funds}</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
