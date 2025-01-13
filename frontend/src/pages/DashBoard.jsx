import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "../components/SideBar";
import SetBudget from "../components/SetBudget";
import Analytics from "../components/Analytics";
// import Notifications from "../components/Notifications"; // Uncomment when needed
// import DownloadReports from "../components/DownloadReports"; // Uncomment when needed
// import History from "../components/History"; // Uncomment when needed

const DashBoard = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Navigate when activeComponent is set
  useEffect(() => {
    if (activeComponent) {
      navigate(`/${activeComponent}`);
    }
  }, [activeComponent, navigate]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar onMenuClick={setActiveComponent} />

      {/* Main Content Area */}
      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-800">
                  Welcome to Your Dashboard
                </h1>
                <p className="text-gray-600 mt-2 text-lg">
                  Navigate through the sidebar to manage your expenses.
                </p>
              </div>
            }
          />
          <Route path="/setBudget" element={<SetBudget />} />
          <Route path="/analytics" element={<Analytics />} />
          {/* <Route path="/notifications" element={<Notifications />} />
          <Route path="/downloadReports" element={<DownloadReports />} />
          <Route path="/history" element={<History />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default DashBoard;