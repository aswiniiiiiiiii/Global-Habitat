import React, { useState } from "react";
import '../styles/testmonial.css'

// testmonial datas
const testimonials = [
  {
    text: `"Their construction quality was very good, prime location and easily connected to markets, clinics and schools. The cost is also reasonable compare with others, strongly i would recommend this builder to all my friends.""`,
    author: "Mr. Raja Gopalan",
  },
  {
    text: `"I bought a flat in this apartments and I am happy with the service of the builders. They completed the construction of our flat on time and did a great work. Now, I am living here with all the facilities provided on time.""`,
    author: "Mr. Ajay Talreja",
  },
  {
    text: `"One of the Best builders that we saw in Combatore, we have done plenty of research and finally find this property and booked a flat. The Transition period was very smooth with this builder, everyone was very cooperative and helped us."`,
    author: "Mr. Babu Swaminathan",
  },
];


const Testimonial= () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center text-center p-6 max-w-4xl mx-auto">
      <h2  className="test-heading  mb-6">Testimonials</h2>

      <div className="relative bg-white p-8 rounded-lg shadow-md max-w-3xl">
        <p className="test-para mb-4 p-5 text-gray-700">
          {testimonials[currentIndex].text}
        </p>
        <p className="text-sm text-gray-500">{testimonials[currentIndex].author}</p>

        {/* Left arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
        >
          <i className="fas fa-chevron-left text-xl"></i>
        </button>

        {/* Right arrow */}
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
        >
          <i className="fas fa-chevron-right text-xl"></i>
        </button>
      </div>

      {/* Dots */}
      <div className=" flex mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-sky-300" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
