import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // You can install: npm i lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "QR Generator" },
    { to: "/age", label: "Age Calculator" },
    { to: "/bmi", label: "BMI Calculator" },
    { to: "/password", label: "Password Generator" },
    { to: "/quotes", label: "Fun Quotes" },
  ];

  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">QuickTools4U</div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex gap-6 text-sm md:text-base">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `hover:underline ${isActive ? "text-yellow-300 font-semibold" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-1 ${isActive ? "text-yellow-300 font-semibold" : "text-white"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
