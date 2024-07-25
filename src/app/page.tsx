import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  const tenants = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "9876543210",
    },
    // Add more mock data here
  ];

  return (
    <div className="flex flex-col ">
      {/* Sidebar */}
      <div className="sidebar">{/* Sidebar content */}</div>

      {/* Main Content */}
      <div className="flex-grow">
        {/* Navbar */}
        <div className="navbar">
          <Navbar
            links={[
              { href: "stats", label: "Stats" },
              { href: "money", label: "Money" },
              { href: "tickets", label: "Tickets" },
            ]}
          />
        </div>

        {/* Tenant Info Table */}
        <div className="overflow-x-auto">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
              </tr>
            </thead>
            <tbody>
              {tenants.map((tenant) => (
                <tr key={tenant.id}>
                  <td className="border px-4 py-2">{tenant.id}</td>
                  <td className="border px-4 py-2">{tenant.name}</td>
                  <td className="border px-4 py-2">{tenant.email}</td>
                  <td className="border px-4 py-2">{tenant.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
