import React from "react";
import Navbar from "../components/Navbar";

const TicketsPage: React.FC = () => {
  // Dummy data for complaints
  const complaints = [
    {
      id: 1,
      title: "Water leakage in the bathroom",
      description: "There is a constant water leakage in the bathroom.",
      status: "Open",
    },
    {
      id: 2,
      title: "Broken window in the living room",
      description:
        "The window in the living room is broken and needs to be fixed.",
      status: "In Progress",
    },
    {
      id: 3,
      title: "No electricity in the kitchen",
      description: "There is no electricity in the kitchen.",
      status: "Resolved",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-red-500";
      case "Resolved":
        return "bg-green-500";
      case "In Progress":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="flex flex-col ">
      <div className="navbar">
        <Navbar
          links={[
            { href: "stats", label: "Stats" },
            { href: "money", label: "Money" },
            { href: "tickets", label: "Tickets" },
          ]}
        />
      </div>
      <h1 className="text-2xl font-bold mb-4">Tickets Page</h1>
      <div className="grid grid-cols-1 gap-4">
        {complaints.map((complaint) => (
          <div key={complaint.id} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">{complaint.title}</h2>
            <p className="text-gray-600 mb-2">{complaint.description}</p>
            <span
              className={`text-sm font-semibold bg-gray-200 px-2 py-1 rounded ${getStatusColor(
                complaint.status
              )}`}
            >
              {complaint.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
