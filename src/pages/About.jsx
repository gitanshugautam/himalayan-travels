export default function About() {
  return (
    <div className="w-full flex justify-center px-4 py-10 pt-24">
      <div className="w-full max-w-6xl">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
          About Us
        </h1>

        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-gray-600 text-sm sm:text-base">
            At Himalayan Tour & Travels, we believe that every journey should be
            unforgettable. From the serene mountains of Himachal to the spiritual
            Char Dham Yatra, we provide well-planned and comfortable travel
            experiences for everyone.
          </p>
        </div>

        {/* Image + Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Image */}
          <img
            src="/images/Himachal1.jpg"
            alt="about"
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-xl shadow-lg"
          />

          {/* Text */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Why Choose Us?
            </h2>

            <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
              <li>✔ Affordable and transparent pricing</li>
              <li>✔ Trusted and experienced drivers</li>
              <li>✔ Customized travel plans</li>
              <li>✔ 24/7 customer support</li>
              <li>✔ Comfortable and safe journeys</li>
            </ul>
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">

          <div>
            <h3 className="text-2xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-600 text-sm">Trips Completed</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-600">300+</h3>
            <p className="text-gray-600 text-sm">Happy Clients</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-600">10+</h3>
            <p className="text-gray-600 text-sm">Destinations</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-600 text-sm">Support</p>
          </div>

        </div>

      </div>
    </div>
  );
}