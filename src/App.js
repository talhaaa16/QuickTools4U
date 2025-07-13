import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import QRCodeGen from "./components/QRCodeGen";
import AgeCalculator from "./components/AgeCalculator";
import BMICalculator from "./components/BMICalculator";
import PasswordGenerator from "./components/PasswordGenerator";
import FunQuotes from "./components/Funquotes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <Router>
      <Navbar />
            <ToastContainer />

      {/* AdSense Placeholder - Top Banner */}
      <div className="my-6 mx-auto text-center max-w-4xl">
        <div className="bg-gray-200 text-center p-4 rounded-md text-sm text-gray-600">
          [ AdSense Top Banner Placeholder ]
        </div>
      </div>

      <main className="px-4">
        <Routes>
          <Route path="/" element={<QRCodeGen />} />
          <Route path="/age" element={<AgeCalculator />} />
          <Route path="/bmi" element={<BMICalculator />} />
          <Route path="/password" element={<PasswordGenerator />} />
          <Route path="/quotes" element={<FunQuotes />} />
        </Routes>
      </main>

      {/* AdSense Placeholder - Footer */}
      <footer className="text-center text-sm text-gray-500 mt-10 mb-6">
        <div className="bg-gray-200 text-center p-4 rounded-md text-sm text-gray-600 mb-2">
          [ AdSense Footer Placeholder ]
        </div>
        © 2025 QuickTools4U. All rights reserved.
      </footer>
    </Router>
  );
};

export default App;
