import { useState, useRef, useEffect } from "react";
import { useTheme } from "../components/Hook/useTheme";
import { ChevronDown, Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // 👈 Tambahkan ref untuk klik luar

  const themes = [
    { name: "Light", value: "light", icon: <Sun size={16} className="mr-2" /> },
    { name: "Dark", value: "dark", icon: <Moon size={16} className="mr-2" /> },
    { name: "System", value: "system", icon: <Monitor size={16} className="mr-2" /> },
  ];

  // 🛠️ Deteksi klik di luar dropdown dan tutup otomatis
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* 🟢 Tombol toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {themes.find((t) => t.value === theme)?.icon}
        {themes.find((t) => t.value === theme)?.name}
        <ChevronDown size={16} className="ml-2 transition-transform" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
      </button>

      {/* 🟢 Dropdown List */}
      {isOpen && (
        <div className="absolute mt-2 w-36 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-md transition-all duration-150 ease-in-out">
          {themes.map((t) => (
            <button
              key={t.value}
              className={`flex items-center w-full px-4 py-2 text-left text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all ${
                theme === t.value ? "font-semibold" : ""
              }`}
              onClick={() => {
                setTheme(t.value);
                setIsOpen(false);
              }}
            >
              {t.icon} {t.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
