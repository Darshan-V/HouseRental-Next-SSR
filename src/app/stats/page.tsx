import React from "react";
import Navbar from "../components/Navbar";

const tenantsData = [
  { name: "John Doe", rentStatus: "Not Paid", paymentDate: "2022-01-01" },
  { name: "Jane Smith", rentStatus: "Paid", paymentDate: "2022-01-02" },
  // Add more mock data here
  { name: "Alice Johnson", rentStatus: "Paid", paymentDate: "2022-01-03" },
  { name: "Bob Williams", rentStatus: "Not Paid", paymentDate: "2022-01-04" },
  { name: "Emily Davis", rentStatus: "Paid", paymentDate: "2022-01-05" },
  { name: "Michael Brown", rentStatus: "Not Paid", paymentDate: "2022-01-06" },
  { name: "Olivia Miller", rentStatus: "Paid", paymentDate: "2022-01-07" },
  { name: "William Wilson", rentStatus: "Not Paid", paymentDate: "2022-01-08" },
  { name: "Sophia Taylor", rentStatus: "Paid", paymentDate: "2022-01-09" },
  { name: "James Anderson", rentStatus: "Not Paid", paymentDate: "2022-01-10" },
  { name: "Ava Thomas", rentStatus: "Paid", paymentDate: "2022-01-11" },
  {
    name: "Benjamin Jackson",
    rentStatus: "Not Paid",
    paymentDate: "2022-01-12",
  },
  { name: "Mia White", rentStatus: "Paid", paymentDate: "2022-01-13" },
  { name: "Jacob Harris", rentStatus: "Not Paid", paymentDate: "2022-01-14" },
  { name: "Charlotte Martin", rentStatus: "Paid", paymentDate: "2022-01-15" },
  {
    name: "Daniel Thompson",
    rentStatus: "Not Paid",
    paymentDate: "2022-01-16",
  },
  { name: "Amelia Garcia", rentStatus: "Paid", paymentDate: "2022-01-17" },
  {
    name: "Joseph Martinez",
    rentStatus: "Not Paid",
    paymentDate: "2022-01-18",
  },
  { name: "Grace Robinson", rentStatus: "Paid", paymentDate: "2022-01-19" },
  { name: "Samuel Clark", rentStatus: "Not Paid", paymentDate: "2022-01-20" },
  {
    name: "Elizabeth Rodriguez",
    rentStatus: "Paid",
    paymentDate: "2022-01-21",
  },
  { name: "David Lewis", rentStatus: "Not Paid", paymentDate: "2022-01-22" },
];

const StatsPage: React.FC = () => {
  const sortedTenantsData = [
    ...tenantsData.filter((tenant) => tenant.rentStatus === "Not Paid"),
    ...tenantsData.filter((tenant) => tenant.rentStatus === "Paid"),
  ];

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
      <h1 className="text-2xl font-bold mb-4">Rent Status</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Tenant Name</th>
            <th className="px-4 py-2">Rent Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedTenantsData.map((tenant, index) => (
            <tr
              key={index}
              className={tenant.rentStatus === "Not Paid" ? "bg-red-400" : ""}
            >
              <td className="border px-4 py-2">{tenant.name}</td>
              <td className="border px-4 py-2">{tenant.rentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatsPage;
