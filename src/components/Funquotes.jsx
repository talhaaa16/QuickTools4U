import { useState } from "react";
import { toast } from "react-toastify";

const quotes = [
  "Life is short. Smile while you still have teeth!",
  "I'm not lazy, I'm on energy-saving mode.",
  "404 Not Found: Motivation.",
  "I told my computer I needed a break, and it said 'No problem, I’ll crash for you.'",
  "Eat, sleep, code, repeat.",
];

export default function FunQuotes() {
  const [quote, setQuote] = useState(quotes[0]);

  const getNewQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
    toast.info("New quote loaded!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-xl text-center">
      <h1 className="text-3xl font-bold mb-2">Fun Quotes</h1>
      <p className="text-gray-500 mb-4">Laugh a little! Here's a random funny quote for you:</p>
      <blockquote className="italic text-lg text-gray-700 border-l-4 border-blue-500 pl-4 mb-4">“{quote}”</blockquote>
      <button onClick={getNewQuote} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Get Another Quote
      </button>
    </div>
  );
}
