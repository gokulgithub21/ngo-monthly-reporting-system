import { useState } from "react";
import axios from "axios";

function SubmitReport() {
  const [form, setForm] = useState({
    ngo_id: "",
    month: "",
    people_helped: "",
    events_conducted: "",
    funds_utilized: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/report", form);
      alert("Report submitted successfully");
      setForm({
        ngo_id: "",
        month: "",
        people_helped: "",
        events_conducted: "",
        funds_utilized: ""
      });
    } catch (err) {
      alert("Error submitting report");
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h4 className="card-title mb-3">Submit Monthly Report</h4>

        <div className="row g-2">
          <div className="col-md-2">
            <input
              className="form-control"
              name="ngo_id"
              placeholder="NGO ID"
              value={form.ngo_id}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2">
            <input
              className="form-control"
              name="month"
              placeholder="YYYY-MM"
              value={form.month}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2">
            <input
              className="form-control"
              name="people_helped"
              placeholder="People Helped"
              value={form.people_helped}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2">
            <input
              className="form-control"
              name="events_conducted"
              placeholder="Events"
              value={form.events_conducted}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2">
            <input
              className="form-control"
              name="funds_utilized"
              placeholder="Funds"
              value={form.funds_utilized}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2">
            <button
              className="btn btn-primary w-100"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitReport;
