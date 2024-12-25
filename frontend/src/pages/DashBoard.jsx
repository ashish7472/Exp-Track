import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import SetBudget from "../components/SetBudget";
import Analytics from "../components/Analytics"; // Import Analytics Component
//import Notifications from "../components/Notifications"; // Import Notifications Component
//import DownloadReports from "../components/DownloadReports"; // Import Download Reports Component
//import History from "../components/History"; // Import History Component

const DashBoard = () => {
  const [activeComponent, setActiveComponent] = useState(null); // Track active component

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar onMenuClick={setActiveComponent} />

      {/* Main Content Area */}
      <div className="flex-grow">
        {/* CONDITIONAL RENDERING */}
        {activeComponent === "setBudget" && <SetBudget />}
        {activeComponent === "analytics" && <Analytics />}
        {activeComponent === "notifications" && <Notifications />}
        {activeComponent === "downloadReports" && <DownloadReports />}
        {activeComponent === "history" && <History />}
        {!activeComponent && (
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome to Your Dashboard
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Navigate through the sidebar to manage your expenses.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoard;
