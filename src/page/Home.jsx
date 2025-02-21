import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSection";
import LatestNews from "../components/LatestNews";
import MainContent from "../components/MainContent";
import Sidebar from "../components/SideSection";
import { useTheme } from "../components/Hook/useTheme";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={`relative mx-auto ${theme === "dark" ? "dark" : ""}`}>
      <Navbar />
      <HeroSlider />
      <div className="w-screen flex flex-col md:flex-row gap-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <MainContent />
        <Sidebar />
      </div>
      <LatestNews />
      <Footer />
    </div>
  );
};

export default Home;
