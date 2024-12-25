import React from "react";
import { motion } from "framer-motion";
import { Bar, Line, Pie, Scatter, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement);

const Analytics = () => {
  // Hardcoded Data
  const budget = 5000;
  const expenses = 3200;
  const remaining = budget - expenses;

  // Donut Chart (Budget Breakdown)
  const donutData = {
    labels: ["Expenses", "Remaining"],
    datasets: [
      {
        data: [expenses, remaining],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverOffset: 4,
      },
    ],
  };

  // Pie Chart (Category Breakdown)
  const pieData = {
    labels: ["Food", "Travel", "Shopping", "Utilities", "Miscellaneous"],
    datasets: [
      {
        data: [1200, 800, 600, 400, 200],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
      },
    ],
  };

  // Line Chart (Monthly Spending Trend)
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Expenses",
        data: [2000, 2500, 3000, 3200, 3100, 2900],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  // Bar Chart (Budget vs Expenses)
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Budget",
        data: [5000, 5000, 5000, 5000, 5000, 5000],
        backgroundColor: "#36A2EB",
      },
      {
        label: "Expenses",
        data: [2000, 2500, 3000, 3200, 3100, 2900],
        backgroundColor: "#FF6384",
      },
    ],
  };

  // Scatter Plot (Day-to-Day Spending)
  const scatterData = {
    datasets: [
      {
        label: "Daily Spending",
        data: [
          { x: 1, y: 50 },
          { x: 5, y: 100 },
          { x: 10, y: 200 },
          { x: 15, y: 300 },
          { x: 20, y: 150 },
        ],
        backgroundColor: "#FF6384",
      },
    ],
  };

  // Card Animation Variants
  const cardVariants = {
    initial: { scale: 1, boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" },
    hover: { scale: 1.05, boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <div className="p-6 bg-sBar min-h-screen shadow-xl max-h-[calc(100vh-64px)] overflow-y-auto">
      {/* Top Summary Cards */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[ 
          { title: "Budget", value: `$${budget}`, color: "text-green-500" },
          { title: "Expenses", value: `$${expenses}`, color: "text-red-500" },
          { title: "Remaining", value: `$${remaining}`, color: "text-blue-500" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-slate-50 rounded-lg p-4 text-center"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            <h3 className="text-sm font-semibold">{item.title}</h3>
            <p className={`text-lg font-bold ${item.color}`}>{item.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Graph Cards */}
      <div className="grid grid-cols-3 gap-2">
        {/* Donut Chart */}
        <motion.div
          className="bg-slate-50 rounded-lg p-4"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <h3 className="text-sm font-semibold mb-2">Budget Breakdown</h3>
          <Doughnut data={donutData} />
        </motion.div>

        {/* Other Charts */}
        {[ 
          { title: "Category Breakdown", chart: <Pie data={pieData} /> },
          { title: "Monthly Spending Trend", chart: <Line data={lineData} /> },
          { title: "Budget vs Expenses", chart: <Bar data={barData} /> },
          { title: "Day-to-Day Spending", chart: <Scatter data={scatterData} /> },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-slate-50 rounded-lg p-4"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
            {item.chart}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;