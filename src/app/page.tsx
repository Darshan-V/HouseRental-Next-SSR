"use client";
import Navbar from "./components/Navbar";
import ActionCard from "@/app/components/ActionCard";
import {
  BsPeopleFill,
  BsFillPieChartFill,
  BsSendExclamationFill,
} from "react-icons/bs";

export default function Home() {
  const mockData = [
    {
      title: "Tenants",
      description: "Description 1",
      icon: <BsPeopleFill color="black" size="28" />,
    },
    {
      title: "Statistics",
      description: "Description 2",
      icon: <BsFillPieChartFill color="black" size="28" />,
    },
    {
      title: "Advance Returns",
      description: "Description 3",
      icon: <BsSendExclamationFill color="black" size="28" />,
    },
  ];

  return (
    <div className="flex flex-col ">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar content */}
        <div
          className="hamburger"
          onClick={() => console.log("Sidebar Open/Close")}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-grow">
        {/* Navbar */}
        <div className="navbar">
          <Navbar
            links={[
              { href: "stats", label: "Dues and Pays" },
              { href: "money", label: "Money" },
              { href: "tickets", label: "Tickets" },
            ]}
          />
        </div>

        {/* Action Cards */}
        <div className=" px-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {mockData.map((data, index) => (
            <ActionCard
              key={index}
              title={data.title}
              description={data.description}
              icon={data.icon}
              onClick={() => console.log(data.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
