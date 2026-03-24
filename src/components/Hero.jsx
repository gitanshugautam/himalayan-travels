import { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp,  FaFacebook } from "react-icons/fa";

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
    <div className="w-full text-black">

      {/* 🔥 Carousel */}
      <div className="w-full flex justify-center mt-4">
        <div className="relative w-[98%] sm:w-[95%] md:w-[90%] lg:w-[85%] h-[300px] sm:h-[360px] md:h-[420px] lg:h-[520px] rounded-xl overflow-hidden shadow-lg">
          
          {/* background */}
          <img
            src={images[index]}
            alt="bg"
            className="absolute inset-0 w-full h-full object-cover scale-110 brightness-110 contrast-110"
          />

          {/* main image */}
          <img
            src={images[index]}
            alt="Himachal"
            className="relative w-full h-full object-cover brightness-110 contrast-110"
          />

          {/* text center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-lg sm:text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
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
          <div key={i} className="relative rounded-lg overflow-hidden group cursor-pointer">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-28 sm:h-36 md:h-44 object-cover brightness-110 contrast-110 transition duration-500 group-hover:scale-110 group-hover:brightness-125"
            />

            <div className="absolute inset-0 flex items-end justify-center pb-2">
              <p className="text-xs sm:text-sm md:text-lg font-semibold text-white drop-shadow-md transition group-hover:scale-110">
                {item.name}
              </p>
            </div>
          </div>
        ))}

      </div>

      {/* 🔥 Social */}
      <div className="flex items-center justify-center gap-8 pt-6">

  <FaInstagram className="text-3xl sm:text-4xl md:text-5xl cursor-pointer hover:scale-110 transition" />

  <FaFacebook className="text-3xl sm:text-4xl md:text-5xl cursor-pointer hover:scale-110 transition" />

  <FaWhatsapp className="text-3xl sm:text-4xl md:text-5xl hover:scale-110 transition" />

</div>

      {/* 🔥 End Text */}
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