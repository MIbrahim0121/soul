import React from 'react';
import pic1 from "../assets/pic1.webp"
import pic2 from "../assets/pic2.webp"
import pic3 from "../assets/pic3.webp"
import pic4 from "../assets/pic4.webp"
import pic5 from "../assets/pic5.webp"
import pic6 from "../assets/PIC6.webp"
import pic7 from "../assets/pic7.webp"

const testimonials = [
  {
    img:pic1,
    name: "Maria L.",
    text: "This book made me cry in the best way. I finally understood why I kept choosing unavailable partners. It changed everything."
  },
  {
        img:pic2,

    name: "Maya R.",
    text: "For the first time in my life, love feels calm and honest. I never thought this was possible for me."
  },
  {
    img:pic3,
    name: "Emma R.",
    text: "I felt like this guide knew exactly what I was struggling with. I’ve never felt more hopeful."
  },
  {
        img:pic4,

    name: "Sophia W.",
    text: "Simple, beautiful, and exactly what I needed to break free."
  },
  {
    img:pic5,
    name: "Olivia T.",
    text: "A weight lifted off my heart after reading this. I’m sharing this with every woman I know!"
  },
  {
        img:pic6,

    name: "Chloe A.",
    text: "I finally feel worthy of love that feels safe. This guide completely changed my perspective."
  },
  {    img:pic7,

    name: "Isabella M.",
    text: "This felt like having a personal mentor guiding me through healing. Life-changing."
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 w-[100vw] text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">What Women Are Saying</h2>

  <div className="grid gap-8 md:grid-cols-3 px-6 md:px-10 max-w-7xl mx-auto">
    {testimonials.map((t, index) => (
      <div key={index} className="relative flex justify-center">
        {/* Circle Image */}
        <img
          src={t.img} // Replace with dynamic e.g., t.image
          alt={t.name}
          className="w-20 h-20 rounded-full border-4 border-white absolute -top-1 z-10 shadow-md"
        />

        {/* Testimonial Card */}
        <div className="mt-10 bg-gradient-to-b from-[#FAF0FE] to-[#FFF4E9] transform transition-all cursor-pointer hover:scale-110 duration-500 ease-in-out shadow-lg rounded-2xl p-6 pt-12 text-left border border-purple-100 w-full">
          <p className="text-gray-700 italic mb-4">“{t.text}”</p>
          <p className="text-purple-600 font-semibold text-right">— {t.name}</p>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}
