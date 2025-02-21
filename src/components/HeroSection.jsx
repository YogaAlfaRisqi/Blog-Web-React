import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {
  const slides = [
    {
      title: "Teknologi AI Makin Canggih, Apa Dampaknya?",
      description: "Jelajahi bagaimana AI membentuk masa depan kita.",
      image: "src/assets/AI.jpg",
    },
    {
      title: "Tren Desain UI/UX di Tahun 2025",
      description: "Temukan inspirasi desain terbaru yang menarik.",
      image: "src/assets/UIUX.jpg",
    },
    {
      title: "Dunia Finansial Berubah! Apa yang Terjadi?",
      description: "Startup baru ini mengguncang industri keuangan.",
      image: "src/assets/finance.jpg",
    },
  ];

  return (
    <div className="relative w-full py-0">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="w-full h-[400px] md:h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6">
              <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
              <p className="mt-2 text-sm md:text-lg">{slide.description}</p>
              <a
                href="#articles"
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Baca Selengkapnya
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
