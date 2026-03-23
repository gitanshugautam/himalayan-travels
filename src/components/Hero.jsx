import { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const images = [
    "/images/Himachal1.jpg",
    "/images/Himachal2.jpg",
    "/images/Himachal3.jpg",
    "/images/Himachal4.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white text-black">

      {/* 🔥 SMALLER Carousel */}
   <div className="w-full flex justify-center mt-4">
  <div className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-[220px] sm:h-[280px] md:h-[340px] lg:h-[420px] rounded-xl overflow-hidden shadow-lg">
    
   <div className="relative w-full h-full">

  {/* background blur */}
  <img
    src={images[index]}
    alt="bg"
    className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
  />

  {/* main image */}
  <img
    src={images[index]}
    alt="Himachal"
    className="relative w-full h-full object-contain"
  />

</div>
    <div className="absolute inset-0 flex items-end justify-center pb-6">
     <h1 className="text-base sm:text-xl md:text-3xl font-bold text-center text-white bg-black/40 px-3 py-1 rounded">
        Himachal Pradesh
      </h1>
    </div>

  </div>
</div>

      {/* 🔥 Destinations */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">

        {[
          { name: "Jammu", img: "/images/j.jpg" },
          { name: "Ladakh", img: "/images/ladakh.jpg" },
          { name: "Uttarakhand", img: "/images/UTTARAKHAND.jpg" },
          { name: "Rajasthan", img: "/images/rajasthan.jpg" },
        ].map((item, i) => (
          <div key={i} className="relative rounded-lg overflow-hidden">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-28 sm:h-36 md:h-44 object-cover"
            />

            <div className="absolute inset-0 flex items-end justify-center pb-2">
              <p className="text-xs sm:text-sm md:text-lg font-semibold text-white bg-black/40 px-2 py-1 rounded">
                {item.name}
              </p>
            </div>
          </div>
        ))}

      </div>

      {/* 🔥 Social */}
    <div className="flex items-center justify-center gap-6 pt-6">

  {/* Instagram */}
  <FaInstagram className="text-2xl sm:text-3xl cursor-pointer hover:scale-110 transition" />

  {/* WhatsApp */}
  <a
    href="https://wa.me/918627861923"
    target="_blank"
    className="flex flex-col items-center text-center"
  >
    <FaWhatsapp className="text-2xl sm:text-3xl hover:scale-110 transition" />
   
  </a>

</div>
<div className="w-full text-center mt-8 pb-6 px-4">
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
    Let’s Make Your Journey Unforgettable ✈️
  </h2>

  <p className="text-sm sm:text-base text-gray-600 mt-2">
    Travel with comfort, explore with freedom, and create memories for life.
  </p>
</div>

    </div>
  );
}