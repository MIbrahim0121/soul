import React from "react";

const TestimonialCard = () => (
  <div className=" border-2 border-dashed border-black rounded-xl p-6 text-[#2e2e2e] max-w-md w-full shadow-md">
    <p className="text-[15px] italic mb-4 leading-relaxed">
      “I didn’t realize I was still trying to earn the love I didn’t get as a child. This guide helped me stop blaming myself. I'm finally in a calm, honest relationship. First time in my life.”
    </p>
    <p className="mb-6 text-sm font-semibold text-right">— MAYA R.</p>

    <ul className="space-y-2 text-[14px]">
      <li className="flex items-start gap-2">
        <span className="text-lg text-red-500">❤</span>
        <span>“Made me cry in the best way — this changed everything.” — Maria L.</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-lg text-red-500">❤</span>
        <span>“The prompts alone were worth it.” — Samantha P.</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="text-lg text-red-500">❤</span>
        <span>I'm not chasing anymore — it feels good to be chosen. — Nicole T.</span>
      </li>
    </ul>
  </div>
);

export default function TestimonialsGrid() {
  return (
    <div className="px-4 py-10 ">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 justify-items-center">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <div className="mt-8 text-sm text-center text-gray-700">
        ★★★★★ 4.8/5 FROM 600+ WOMEN <br />
        <span className="font-semibold underline">17,000+ COPIES SOLD</span> | 60-DAY GUARANTEE
      </div>

      
      <div className="bg-gradient-to-b from-[#fdf4e3] to-[#f9f1fb] p-6 rounded-t-2xl shadow-md max-w-3xl mx-auto text-[#2e2e2e] space-y-6 mt-7 ">
  {/* Title Section */}
  <div className="text-center">
    <h2 className="text-lg font-semibold sm:text-xl">
      Created by Ashley & Mathew, founders of The Yoga Couple
    </h2>
    <p className="mt-1 font-medium text-md sm:text-lg">
      Trauma-informed relationship coaches and bestselling authors.
    </p>
    <p className="mt-2 text-base font-semibold text-red-600 sm:text-lg">
      Their work has helped over 20,000 women:
    </p>
  </div>

  {/* Benefits List */}
  <ul className="space-y-3 text-sm sm:text-[15px]">
    <li className="flex items-start gap-2">
      <span className="text-lg text-red-500">❤</span>
      <span>Heal anxious and avoidant attachment wounds</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-lg text-red-500">❤</span>
      <span>Understand their emotional patterns</span>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-lg text-red-500">❤</span>
      <span>Attract safe, secure relationships — without changing who they are</span>
    </li>
  </ul>
</div>


<div className="bg-gradient-to-b from-[#f9f1fb] to-[#fdf4e3] p-6 rounded-b-2xl shadow-md max-w-3xl mx-auto text-center text-[#2e2e2e] space-y-6">
  <h2 className="text-xl font-semibold text-black sm:text-2xl">
    It’s Time to Choose a Different Story
  </h2>

  <p className="text-sm sm:text-base leading-relaxed tracking-wide uppercase font-medium text-[#3a3a3a]">
    You’ve done the overthinking. The people-pleasing. The overgiving. <br />
    Now it’s time to do something different — not by dating harder, but by healing deeper.
  </p>

  <button className="px-6 py-2 text-sm font-semibold text-white transition duration-300 bg-red-600 rounded-full hover:bg-red-700 sm:text-base">
    YES, I’M READY TO BREAK THE CYCLE
  </button>

  <p className="text-xs text-gray-600">
    Instant delivery. Risk-free. Secure checkout via Digistore24.
  </p>

  <footer className="pt-2 text-xs text-gray-400">
    © Untitled. All rights reserved.
  </footer>
</div>


    </div>
  );
}
