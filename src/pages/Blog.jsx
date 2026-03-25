export default function Blog() {
  const blogs = [
    {
      title: "Top 5 Places to Visit in Himachal",
      img: "/images/Himachal1.jpg",
      desc: "Explore the most beautiful destinations in Himachal Pradesh for your next trip.",
    },
    {
      title: "Complete Guide for Ladakh Trip",
      img: "/images/ladakh.jpg",
      desc: "Everything you need to know before planning your Ladakh adventure.",
    },
    {
      title: "Char Dham Yatra Travel Tips",
      img: "/images/4_dham.jpg",
      desc: "Important tips and guidance for a smooth Char Dham Yatra experience.",
    },
  ];

  return (
    <div className="w-full flex justify-center px-4 py-10 pt-24">
      <div className="w-full max-w-7xl">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
          Travel Blog
        </h1>

        {/* Blogs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {blogs.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group cursor-pointer"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 sm:h-56 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-black">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-sm mt-2">
                  {item.desc}
                </p>

                <button className="mt-3 text-blue-600 font-semibold hover:underline">
                  Read More →
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}