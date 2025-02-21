import { useState, useEffect } from "react";

const latestNews = [
  {
    id: 1,
    title: "AI Revolution in 2025",
    description: "Explore how artificial intelligence is shaping the future of technology and innovation.",
    image: "src/assets/AI1.jpg",
    date: "Feb 20, 2025",
  },
  {
    id: 2,
    title: "React 19: What's New?",
    description: "A deep dive into the latest features and improvements in React 19.",
    image: "src/assets/AI1.jpg",
    date: "Feb 18, 2025",
  },
  {
    id: 3,
    title: "Web3 and the Future of Internet",
    description: "Discover how Web3 is decentralizing the internet and changing the digital landscape.",
    image: "src/assets/AI1.jpg",
    date: "Feb 15, 2025",
  },
  {
    id: 4,
    title: "Web3 and the Future of Internet",
    description: "Discover how Web3 is decentralizing the internet and changing the digital landscape.",
    image: "src/assets/AI1.jpg",
    date: "Feb 15, 2025",
  },
];

export default function LatestNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setNews(latestNews);
    }, 500);
  }, []);

  return (
    <section className="pt-5 pb-20 px-6 bg-gray-100 dark:bg-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest News</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {news.length > 0 ? (
            news.map((item) => (
              <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                  <a href="#" className="text-blue-500 font-medium mt-4 inline-block">Read More →</a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">Loading news...</p>
          )}
        </div>
      </div>
    </section>
  );
}
