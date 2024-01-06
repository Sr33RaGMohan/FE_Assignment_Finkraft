import React from "react";
import { AgGridReact } from "ag-grid-react";
import { Pie } from "react-chartjs-2";

const Dashboard = ({ spaceMissionData }) => {
  // AG-Grid configuration
  const columnDefs = [
    { headerName: "Mission Name", field: "name" },
    { headerName: "Launch Company", field: "company" },
    // Add other fields as needed
  ];

  // Chart data
  const successfulMissions = spaceMissionData.filter(
    (mission) => mission.outcome === "Success"
  );
  const failedMissions = spaceMissionData.filter(
    (mission) => mission.outcome === "Failure"
  );

  const chartData = {
    labels: ["Success", "Failure"],
    datasets: [
      {
        label: "Mission Outcomes",
        data: [successfulMissions.length, failedMissions.length],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return (
    <div>
      <h2>Space Mission Dashboard</h2>
      <div
        className="ag-theme-alpine"
        style={{ height: "300px", width: "100%" }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={spaceMissionData}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
      <div style={{ width: "400px", margin: "20px auto" }}>
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
