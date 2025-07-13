import { useState } from "react";
import { toast } from "react-toastify";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let pass = "";
    for (let i = 0; i < 12; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
    toast.success("Password generated!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl text-center">
      <h1 className="text-3xl font-bold mb-2">Random Password Generator</h1>
      <p className="text-gray-500 mb-4">Click the button below to generate a strong, random password.</p>
      <button onClick={generatePassword} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Generate
      </button>
      {password && <p className="mt-4 text-lg font-mono break-all">{password}</p>}
    </div>
  );
}
