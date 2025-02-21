import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";

const tutorials = [
  { id: 1, title: "React Basics", category: "React", image: "/react.png", description: "Belajar dasar-dasar React JS dari nol." },
  { id: 2, title: "Tailwind CSS Mastery", category: "CSS", image: "/tailwind.png", description: "Panduan lengkap membuat UI modern dengan Tailwind." },
  { id: 3, title: "JavaScript ES6", category: "JavaScript", image: "/js.png", description: "Pemahaman mendalam tentang fitur ES6 di JavaScript." },
  { id: 4, title: "Laravel API", category: "Laravel", image: "/laravel.png", description: "Membuat REST API dengan Laravel untuk aplikasi web." },
];

export default function Tutorial() {
  const [searchTerm, setSearchTerm] = useState("");
  // const [category, setCategory] = useState("All");
  // const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Daftar kategori unik dari artikel
  const categories = ["Semua", ...new Set(tutorials.map((article) => article.category))];

  // Filter artikel berdasarkan pencarian & kategori
  const filteredTutorials = tutorials.filter((article) =>
    (selectedCategory === "" || selectedCategory === "Semua" || article.category === selectedCategory) &&
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`pt-10 min-h-screen transition-all`}>
      
      {/* Menu Search & Filter */}
      <div className="flex justify-end items-center mt-6 space-x-4">
          {/* Search Bar */}
          <div className="relative  w-64">
            <input
              type="text"
              placeholder="Cari artikel..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 pl-10 pr-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="py-2 px-4 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <Filter className="absolute right-3 top-3 text-gray-400" size={18} />
          </div>
        </div>

      {/* Tutorial List */}
      <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTutorials.length > 0 ? (
          filteredTutorials.map((tutorial) => (
            <motion.div
              key={tutorial.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <img src={tutorial.image} alt={tutorial.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{tutorial.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">{tutorial.description}</p>
                <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                  Baca Tutorial
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full">Tidak ada tutorial yang ditemukan.</p>
        )}
      </div>
    </div>
  );
}
