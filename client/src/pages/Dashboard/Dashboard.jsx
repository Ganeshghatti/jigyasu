import React, { useState } from "react";
import "./Dashboard.scss";
import Panel from "../../components/Panel/Panel";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function Dashboard() {
  const user = useSelector((state) => state.user);

  const [rights, setrights] = useState([
    {
      rightId: 1,
      name: "NewRequest",
      description: "Allows creating new request",
    },
    {
      rightId: 2,
      name: "ViewRequestStatus",
      description: "Allows view existing request",
    },
    {
      rightId: 3,
      name: "ViewHistory",
      description: "Allows viewing request",
    },
    {
      rightId: 4,
      name: "PendingRequests",
      description: "Approve/Disapprove Pending Requests",
    },
  ]);
  const [data, setdata] = useState({
    campus_name: "South Africa",
    role: "Campus Pastor",
    name: user.firstName,
  });

  return (
    <section
      id="dashboard"
      className="dashboard w-full border h-screen flex flex-col"
    >
      <Panel />
      <div className="flex flex-col container gap-4">
        <PageTitle title="Dashboard" />
        <div className="flex w-full flex-wrap md:flex-col">
          <div className="card md:w-full">Content Management</div>
        </div>
      </div>
    </section>
  );
}
