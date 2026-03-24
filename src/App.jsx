import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { FaWhatsapp } from "react-icons/fa";
function App() {
  return (
    <div className="min-h-screen">

      <Navbar />

      {/* 🔥 Background Wrapper */}
      <div className="pt-20 relative">

        {/* 📱 Mobile Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10 md:hidden"
        >
          <source src="/bgvideo.mp4" type="video/mp4" />
        </video>

        {/* 💻 Laptop Image */}
       <div className="fixed inset-0 -z-10 hidden md:block">
  <div className="w-full h-full bg-gradient-to-r from-blue-900 via-indigo-800 to-teal-600 animate-gradient"></div>
</div>

        {/* Content */}
        <div className="relative z-10">

          {/* Welcome */}
          <div className="w-full flex justify-center mt-6 px-4">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
                Welcome to
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Himalayan Tour & Travels
              </h2>
            </div>
          </div>

          <Hero />
<a
  href="https://wa.me/918627861923"
  target="_blank"
  className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full text-2xl shadow-lg hover:scale-110 transition z-50"
>
  <FaWhatsapp />
</a>

        </div>

      </div>

    </div>
  );
}

export default App;