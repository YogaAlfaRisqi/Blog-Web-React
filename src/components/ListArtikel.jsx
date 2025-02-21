import { useParams } from "react-router-dom";
import articles from "./data/articles";
// import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const ListArtikel = () => {
  const { id } = useParams();
  // const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) return <p className="text-center mt-10 text-red-500">Artikel tidak ditemukan!</p>;
  const filteredArticles = articles.filter(article =>
    (category === "All" || article.category === category) &&
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Search & Filter */}
      <div className="px-6 py-4 flex flex-col md:flex-row items-center gap-4">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-3 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Cari artikel..."
            className="w-full pl-10 pr-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="px-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white cursor-pointer"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">Semua Kategori</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="CSS">CSS</option>
          <option value="Backend">Backend</option>
        </select>
      </div>

      {/* Artikel List */}
      <motion.div 
        className="px-6 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{article.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">{article.description}</p>
                <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                  Baca Artikel
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full">Tidak ada artikel yang ditemukan.</p>
        )}
      </motion.div>

      
    </div>
  );
};

export default ListArtikel;

