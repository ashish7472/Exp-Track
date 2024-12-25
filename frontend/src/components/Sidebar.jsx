import React from "react";
import { motion } from "framer-motion";

const Sidebar = ({ onMenuClick }) => {
  return (
    <div className="flex h-screen bg-sBar shadow-sm">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 10 }}
        className="w-80 bg-sBar text-black flex flex-col shadow-lg"
      >
        {/* Dashboard Title */}
        <div className="p-4 text-center text-4xl font-semibold border-b border-gray-300">
          Dashboard
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow">
          <ul className="space-y-4 mt-6">
            {[
                { label: "Analytics", icon: "fa-chart-pie", key: "analytics" },
            //   { label: "Dashboard", icon: "fa-chart-line", key: "dashboard" },
              { label: "Set Budget", icon: "fa-wallet", key: "setBudget" },
              { label: "Notifications", icon: "fa-bell", key: "notifications" },
              { label: "Download Reports", icon: "fa-download", key: "downloadReports" },
              { label: "History", icon: "fa-history", key: "history" },
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-5 hover:bg-gray-200 cursor-pointer flex items-center text-lg rounded-lg mx-4"
                onClick={() => onMenuClick(item.key)} // Notify parent on click
              >
                <i
                  className={`fas ${item.icon} text-2xl mr-4`}
                  style={{ color: "black" }}
                ></i>
                {item.label}
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* User Profile and Logout */}
        <div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-5 hover:bg-blue-200 cursor-pointer flex items-center text-lg rounded-lg mx-4 my-6"
          >
            <i
              className="fas fa-user-circle text-2xl mr-4"
              style={{ color: "black" }}
            ></i>
            User Profile
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-5 hover:bg-red-700 bg-red-500 cursor-pointer flex items-center text-lg rounded-lg mx-4 text-white"
          >
            <i className="fas fa-sign-out-alt text-2xl mr-4"></i>
            Log Out
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
