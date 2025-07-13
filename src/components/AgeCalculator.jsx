import { useState } from "react";

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();
    let ageVal = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      ageVal--;
    }
    setAge(ageVal);
  };

  return (
    <div className="max-w-md mx-auto text-center mt-8">
      <h1 className="text-2xl font-semibold mb-4">Age Calculator</h1>
      <input
        type="date"
        className="w-full p-2 border rounded-md"
        onChange={(e) => setDob(e.target.value)}
      />
      <button
        onClick={calculateAge}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Calculate Age
      </button>
      {age !== null && (
        <p className="mt-4 text-lg">You are {age} years old.</p>
      )}
    </div>
  );
}
