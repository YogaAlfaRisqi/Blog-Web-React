import { useParams, useNavigate } from "react-router-dom";
import articles from "../components/data/articles";
import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react"; // Icon untuk tombol kembali

const BacaArtikel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <p className="text-center mt-10 text-red-500 text-xl font-semibold">Artikel tidak ditemukan!</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col pt-8">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white p-6 border-r hidden md:block shadow-lg">
          <h2 className="text-lg font-semibold mb-3 border-b pb-2">Daftar Artikel</h2>
          <ul className="space-y-3 max-h-[75vh] overflow-y-auto">
            {articles.map((a) => (
              <li key={a.id}>
                <button
                  onClick={() => navigate(`/artikel/${a.id}`)}
                  className={`w-full text-left py-2 px-4 rounded-lg hover:bg-blue-100 transition ${
                    a.id === parseInt(id) ? "bg-blue-500 text-white font-semibold" : "text-gray-700"
                  }`}
                >
                  {a.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Konten Artikel */}
        <main className="flex-1 p-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center gap-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
          >
            <ArrowLeft size={18} /> Kembali
          </button>

          <h1 className="text-4xl font-bold text-blue-600 leading-tight">{article.title}</h1>
          <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded-lg mt-6 shadow-md" />

          <p className="mt-6 text-lg leading-relaxed text-gray-700">{article.content}</p>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BacaArtikel;
