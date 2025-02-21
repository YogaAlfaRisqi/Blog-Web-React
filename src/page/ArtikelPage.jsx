import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import articles from "../components/data/articles"; // Data dummy artikel
import { Search, Filter } from "lucide-react"; // Ikon untuk search & filter

const ArtikelPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Daftar kategori unik dari artikel
  const categories = ["Semua", ...new Set(articles.map((article) => article.category))];

  // Filter artikel berdasarkan pencarian & kategori
  const filteredArticles = articles.filter((article) =>
    (selectedCategory === "" || selectedCategory === "Semua" || article.category === selectedCategory) &&
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4 py-12">
        
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

        {/* Daftar Artikel */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition-transform transform hover:-translate-y-1"
              >
                <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded-md" />
                <h2 className="text-xl font-semibold mt-2">{article.title}</h2>
                <p className="text-gray-600 mt-1">{article.excerpt}</p>

                <button
                  onClick={() => navigate(`/artikel/${article.id}`)}
                  className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                  Baca Selengkapnya
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 mt-4">Tidak ada artikel yang ditemukan.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArtikelPage;
