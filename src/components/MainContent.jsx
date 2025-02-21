export default function MainContent() {
    const articles = [
      {
        title: "Teknologi AI Makin Canggih, Apa Dampaknya?",
        image: "src/assets/AI.jpg",
        category: "Teknologi",
        date: "Feb 20, 2025",
      },
      {
        title: "Tren Desain UI/UX di Tahun 2025",
        image: "src/assets/UIUX.jpg",
        category: "Desain",
        date: "Feb 18, 2025",
      },
      {
        title: "Startup Baru Ini Mengubah Dunia Finansial",
        image: "src/assets/startUp.jpg",
        category: "Bisnis",
        date: "Feb 15, 2025",
      },
      {
        title: "5 Kebiasaan Sehat untuk Produktivitas Maksimal",
        image: "src/assets/Habbits.jpg",
        category: "Kesehatan",
        date: "Feb 10, 2025",
      },
    ];
  
    return (
      <main className=" bg-white dark:bg-gray-800 py-6 px-10 md:pr-1">
        {/* 🔥 Hero Section */}
        {/* <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Selamat Datang di Y-Update</h1>
          <p className="mt-2 text-lg text-gray-600">
            Dapatkan berita terbaru & tren terkini setiap hari!
          </p>
          
        </section> */}
  
        {/* 🔥 Artikel Terbaru */}
        <section id="articles">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Artikel Terbaru</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {articles.map((article, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="text-sm text-blue-600 font-medium">{article.category}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-1">{article.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{article.date}</p>
                  <a href="#" className="text-blue-500 hover:underline text-sm mt-2 inline-block">
                    Baca Selengkapnya →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }
  