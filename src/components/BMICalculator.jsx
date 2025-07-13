import { useState } from "react";
import { toast } from "react-toastify";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (!height || !weight) return toast.error("Please enter both height and weight.");
    const h = height / 100;
    const result = (weight / (h * h)).toFixed(2);
    setBmi(result);
    toast.success("BMI calculated!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl text-center">
      <h1 className="text-3xl font-bold mb-2">BMI Calculator</h1>
      <p className="text-gray-500 mb-4">Check your Body Mass Index using your height and weight.</p>
      <input
        type="number"
        placeholder="Height (cm)"
        className="w-full p-2 border rounded-md mb-2"
        onChange={(e) => setHeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Weight (kg)"
        className="w-full p-2 border rounded-md"
        onChange={(e) => setWeight(e.target.value)}
      />
      <button onClick={calculateBMI} className="bg-blue-600 text-white mt-4 px-4 py-2 rounded hover:bg-blue-700 transition">
        Calculate BMI
      </button>
      {bmi && <p className="mt-4 text-lg font-medium">Your BMI is {bmi}</p>}
    </div>
  );
}
