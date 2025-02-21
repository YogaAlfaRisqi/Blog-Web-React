export default function Sidebar() {
    const popularArticles = [
      {
        title: "AI Mengubah Dunia Pendidikan",
        image: "src/assets/AI.jpg",
        link: "#",
      },
      {
        title: "Tren UI/UX yang Akan Booming di 2025",
        image: "https://source.unsplash.com/100x100/?design,ux",
        link: "#",
      },
      {
        title: "Blockchain dan Masa Depan Keuangan",
        image: "https://source.unsplash.com/100x100/?business,finance",
        link: "#",
      },
    ];
  
    const categories = ["Teknologi", "Bisnis", "Kesehatan", "Gaya Hidup", "Edukasi"];
  
    return (
      <aside className="md:w-1/3 lg:w-2/4 py-15 pr-10 pl-6">
        {/* 🔥 Artikel Populer */}
        <div className="bg-white  rounded-lg  mb-6 dark:bg-gray-800 text-gray-900 dark:text-white p-4 shadow">
          <h2 className="text-x font-semibold text-gray-800 mb-4"> Artikel Populer</h2>
          {popularArticles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              className="flex items-center gap-4 border-b last:border-none py-2 hover:bg-gray-100 rounded-md transition"
            >
              <img src={article.image} alt={article.title} className="w-16 h-16 rounded-md object-cover" />
              <span className="text-gray-700 text-sm font-medium">{article.title}</span>
            </a>
          ))}
        </div>
  
        {/* 📌 Kategori Trending */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-l font-semibold text-gray-800 mb-4"> Kategori Trending</h2>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    );
  }
  