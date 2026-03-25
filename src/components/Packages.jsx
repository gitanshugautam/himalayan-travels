import { Link } from "react-router-dom";
export default function Packages() {
  const data = [
    {
      title: "Himachal Trip",
      price: "₹6,999",
      img: "/images/Himachal1.jpg",
    },
    {
      title: "Ladakh Tour",
      price: "₹12,999",
      img: "/images/ladakh.jpg",
    },
    {
      title: "Kashmir Trip",
      price: "₹10,999",
      img: "/images/j.jpg",
    },
    {
      title: "Char Dham Yatra",
      price: "₹13,500",
      img: "/images/4_dham.jpg",
    },
  ];

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-[98%] sm:w-[95%] md:w-[90%] lg:w-[85%]">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-black">
          Popular Packages
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {data.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition"
            >
              
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-center">

                <h3 className="text-lg font-semibold text-black">
                  {item.title}
                </h3>

                <p className="text-blue-600 font-bold mt-1">
                  {item.price}
                </p>

     <Link to="/booking">
  <button className="mt-3 bg-black text-white px-4 py-1 rounded hover:bg-gray-800 transition">
    Book Now
  </button>
</Link>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}