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
      <ToastContainer position="top-center" autoClose={2000} />

      {/* ✅ AdSense Banner Placeholder - Top */}
      <div className="my-6 mx-auto text-center max-w-4xl">
        <div className="bg-gray-100 p-4 rounded-md text-gray-600 text-sm">
          {/* AdSense code can go here */}
          {/* Example:
          <ins className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-XXXX"
              data-ad-slot="XXXX"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
          */}
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

      {/* ✅ AdSense Footer Placeholder */}
      <footer className="text-center text-sm text-gray-500 mt-10 mb-6">
        <div className="bg-gray-100 p-4 rounded-md text-gray-600 text-sm mb-2">
          {/* Another ad can go here */}
        </div>
        <p>© 2025 QuickTools4U. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default App;
