import React from "react";
import budgetImage from "../assets/budget.jpg";

const SetBudget = () => {
  return (
    <div className="flex w-full h-screen bg-sBar shadow-xl ">
      {/* Form Section */}
      <div className="flex flex-col items-center justify-center w-full h-screen bg-sBar">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-gray-800 mb-1">
        Welcome!
      </h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-2">
        Set your monthly budget
      </h2>

      {/* Form */}
      <div className="w-full max-w-md p-6 rounded-lg space-y-4">
        {/* Monthly Budget */}
        <div className="relative">
          <input
            type="number"
            placeholder="Enter your monthly budget (₹)"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-cyan-50 text-xl"
          />
        </div>

        {/* Category */}
        <div className="relative">
          <select
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-cyan-50 text-xl"
          >
            <option value="">Select a category (Optional)</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="shopping">Shopping</option>
            <option value="utilities">Utilities</option>
            <option value="miscellaneous">Miscellaneous</option>
          </select>
        </div>

        {/* Notes */}
        <div className="relative">
          <textarea
            placeholder="Add a note about this budget (optional)"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-cyan-50 text-xl"
            rows="3"
          ></textarea>
        </div>

        {/* Save Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md font-semibold">
          Save Budget
        </button>
      </div>
    </div>

      {/* Image Section */}
      <div className="w-1/2 flex items-center justify-center p-6">
        <img
          src={budgetImage}// Replace with your image URL
          alt="Budget Illustration"
          width={600}
          className="max-w-screen-2xl max-h-xl"
        />
      </div>
    </div>
  );
};

export default SetBudget;
