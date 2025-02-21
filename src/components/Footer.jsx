import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* 1️⃣ Kolom: Logo & Deskripsi */}
          <div>
            <h2 className="text-2xl font-bold text-white">TechUpdate</h2>
            <p className="mt-2 text-sm">
              Tetap up-to-date dengan berita terbaru dan tren terkini.
            </p>
          </div>

          {/* 2️⃣ Kolom: Navigasi */}
          <div>
            <h3 className="text-lg font-semibold text-white">Navigasi</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">Category</a></li>
              <li><a href="#" className="hover:text-blue-400">Artikel</a></li>
              <li><a href="#" className="hover:text-blue-400">Tutorial</a></li>
            </ul>
          </div>

          {/* 3️⃣ Kolom: Bantuan */}
          <div>
            <h3 className="text-lg font-semibold text-white">Bantuan</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-blue-400">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          {/* 4️⃣ Kolom: Sosial Media */}
          <div>
            <h3 className="text-lg font-semibold text-white">Ikuti Kami</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-blue-400"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-400"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-400"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        {/* Garis Pembatas */}
        <hr className="border-gray-700 my-6" />

        {/* Copyright */}
        <div className="text-center text-sm">
          © {new Date().getFullYear()} TechUpdate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
