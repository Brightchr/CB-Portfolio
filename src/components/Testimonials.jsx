import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Updated import for Swiper v8+
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    { text: "Chris is amazing!", author: "Jane Doe" },
    { text: "Highly professional work.", author: "John Smith" },
    { text: "I loved working with Chris.", author: "Sarah Lee" },
  ];

  return (
    <div className="mt-12">
      <h3 className="text-xl font-bold mb-8 text-center text-white">
        Testimonials
      </h3>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="p-6 bg-gray-800 rounded-lg">
            <p className="text-lg italic text-gray-300">{testimonial.text}</p>
            <footer className="mt-4 text-blue-400">
              - {testimonial.author}
            </footer>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
