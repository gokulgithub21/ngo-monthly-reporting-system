# NGO Monthly Reporting System

A full-stack web application that allows NGOs to submit monthly impact reports (individually or in bulk) and enables admins to view aggregated dashboards.

The system is designed to handle **asynchronous bulk uploads**, **partial failures**, and **idempotent data submission**.

---

## 🚀 Features

### NGO Side
- Submit a single monthly report
- Upload CSV files containing multiple reports
- Receive a Job ID for bulk uploads
- Track CSV processing status

### Admin Side
- View monthly aggregated dashboard
- Key metrics:
  - Total NGOs reporting
  - Total people helped
  - Total events conducted
  - Total funds utilized

---

## 🏗️ Architecture Overview

```
Frontend (React + Bootstrap)
        |
        | REST APIs
        |
Backend (Node.js + Express)
        |
        | SQLite Database
        |
Background Worker (CSV Processing)
```

### Key Design Decisions
- Asynchronous CSV processing to avoid blocking requests
- Database-level idempotency using unique constraints
- Partial failure handling during bulk uploads
- Clean separation of routes, controllers, and workers

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Bootstrap 5
- Axios

### Backend
- Node.js
- Express.js
- Multer (file uploads)
- csv-parser
- SQLite3

---

## 📂 Project Structure

```
ngo-reporting-system
│
├── backend
│   ├── server.js
│   ├── package.json
│   └── src
│       ├── app.js
│       ├── db
│       │   └── database.js
│       ├── routes
│       ├── controllers
│       └── workers
│
└── frontend
    ├── src
    │   ├── pages
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/gokulgithub21/ngo-monthly-reporting-system
cd ngo-reporting-system
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
node server.js
```

Backend runs at:
```
http://localhost:5000
```

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:
```
http://localhost:5173
```

---

## 📡 API Endpoints

### Submit Single Report
**POST** `/report`

```json
{
  "ngo_id": "NGO100",
  "month": "2025-01",
  "people_helped": 120,
  "events_conducted": 5,
  "funds_utilized": 50000
}
```

---

### Bulk CSV Upload
**POST** `/reports/upload`

- Form-data key: `file`
- Returns: `job_id`

---

### Check Job Status
**GET** `/job-status/{job_id}`

```json
{
  "status": "COMPLETED",
  "total_rows": 4,
  "processed_rows": 4,
  "failed_rows": 1
}
```

---

### Admin Dashboard
**GET** `/dashboard?month=YYYY-MM`

```json
{
  "ngos": 3,
  "people": 350,
  "events": 12,
  "funds": 150000
}
```

---

## 📄 Sample CSV Format

```csv
ngo_id,month,people_helped,events_conducted,funds_utilized
NGO100,2025-01,120,5,50000
NGO101,2025-01,80,3,30000
NGO102,2025-01,150,6,70000
```

---

📜 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute this project for learning and demonstration purposes.
