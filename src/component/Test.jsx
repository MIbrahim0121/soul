// src/pages/LandingPage.jsx
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import book from "../assets/bo.jpeg"


export default function LandingPage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
        <section className="relative px-4 py-16 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={book}
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60" 
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4 leading-snug">
            Still Attracting the Wrong Kind of Love?
          </h1>
          <p className="text-lg md:text-xl text-gray-900 mb-4">
            Discover the hidden patterns quietly shaping your relationships — and how to break free to attract love that feels safe, steady, and real.
          </p>
          <p className="italic text-base mb-6 text-gray-700">
            A beautifully guided, 100+ page journey to emotional clarity and healing.
          </p>
          <div className="flex justify-center mb-2">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full shadow-md transition-all">
              Yes, I'm Ready to Break the Cycle!
            </button>
          </div>
          <p className="text-sm text-gray-700">
            Instant Download. Secure Checkout. Risk-Free for 60 Days.
          </p>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="px-4 py-16 bg-white text-center">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">🌱 It’s Not About Finding the Right Person. It’s About Becoming Open to Real Love.</h2>
        <p className="max-w-xl mx-auto mb-6">
          With over 17,000 women already on this journey, you’ll discover how to:
        </p>
        <ul className="text-left max-w-xl mx-auto space-y-3">
          <li><FaCheck className="inline text-pink-600 mr-2" />Release emotional patterns quietly sabotaging your happiness.</li>
          <li><FaCheck className="inline text-pink-600 mr-2" />Invite love that feels emotionally safe, not chaotic.</li>
          <li><FaCheck className="inline text-pink-600 mr-2" />Feel calm, confident, and secure — no matter what life throws your way.</li>
        </ul>
        <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600">
          👉 Get Instant Access for Just $19.90! (Normally $58.00)
        </button>
      </section>

      {/* Offer Stack */}
      <section className="px-4 py-16 bg-pink-50">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-8">📚 Here’s Exactly What You’ll Get Inside:</h2>
        <ul className="max-w-2xl mx-auto space-y-4 text-left">
          <li><FaCheck className="inline text-pink-600 mr-2" />Personal Commitment Contract – Set the tone for healthier, more authentic connections.</li>
          <li><FaCheck className="inline text-pink-600 mr-2" />Proven Inner Work Exercises – Rewire your belief system for healthier love.</li>
          <li><FaCheck className="inline text-pink-600 mr-2" />30+ Deep Reflection Prompts – Understand why love has felt hard — and how to make it easier.</li>
          <li><FaCheck className="inline text-pink-600 mr-2" />7-Minute Guided Healing Practice – Feel emotional relief today in just 7 minutes.</li>
          <li><FaCheck className="inline text-pink-600 mr-2" />Bonus: Access to the Emotional Healing Portal – Meditations, breathwork, emotional tools.</li>
        </ul>
      </section>

      {/* Guarantee */}
      <section className="px-4 py-16 text-center bg-white">
        <h2 className="text-xl md:text-3xl font-bold mb-4">🛡️ Try It Risk-Free — 60-Day Money-Back Guarantee</h2>
        <p className="max-w-xl mx-auto mb-6">
          If this guide doesn’t bring you new clarity or help you feel more emotionally at peace, simply reach out for a full refund. No questions asked.
        </p>
        <button className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700">
          👉 I’m Ready to Start My Healing Journey Now!
        </button>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-20 bg-pink-100 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-10">💬 What Women Are Saying:</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { name: 'Maria L.', text: '“This book made me cry in the best way. I finally understood why I kept choosing unavailable partners. It changed everything.”' },
            { name: 'Maya R.', text: '“For the first time in my life, love feels calm and honest. I never thought this was possible for me.”' },
            { name: 'Emma R.', text: '“I felt like this guide knew exactly what I was struggling with. I’ve never felt more hopeful.”' },
            { name: 'Sophia W.', text: '“Simple, beautiful, and exactly what I needed to break free.”' },
            { name: 'Olivia T.', text: '“A weight lifted off my heart after reading this. I’m sharing this with every woman I know!”' },
            { name: 'Chloe A.', text: '“I finally feel worthy of love that feels safe. This guide completely changed my perspective.”' },
            { name: 'Isabella M.', text: '“This felt like having a personal mentor guiding me through healing. Life-changing.”' },
          ].map(({ name, text }, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <p className="italic mb-2">{text}</p>
              <p className="font-semibold">— {name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16 text-center bg-white">
        <h2 className="text-xl md:text-3xl font-bold mb-4">🎯 Special Offer — Just $19.90 (Normally $58.00)</h2>
        <p className="mb-2">✨ High Demand Following Our New Release. Secure Your Copy Before It’s Gone!</p>
        <button className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 mb-2">
          👉 Yes, I’m Ready to Break the Cycle for Good!
        </button>
        <p className="text-sm">Instant Download. Secure Checkout. Risk-Free for 60 Days.</p>
        <p className="text-base italic mt-4">P.S. Sometimes, the smallest step becomes the biggest breakthrough. Take that step today.</p>
      </section>
    </div>
  );
}