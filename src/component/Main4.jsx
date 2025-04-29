import profile from '../assets/profile.jpg';
import profile2 from '../assets/image.png';
import profile3 from '../assets/image2.png';
import profile4 from '../assets/image3.png';
import profile5 from '../assets/image4.png';


const handleClick = () => {
  window.open("https://www.digistore24.com/product/572074/200149?cid=d8j5dm1fjbsv27g9jh8v9jfa&utm_term=d8j5dm1fjbsv27g9jh8v9jfa", "_blank");
};

export default function Testimonials() {
  return (
  <div>

    <div className="px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-3 justify-items-center">
      {/* Testimonial 1 */}
      <div className="border-2 border-dashed border-black rounded-xl p-4 text-[#2e2e2e] max-w-md w-full shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={profile}
            alt="Maya R."
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <h2 className="text-sm font-semibold">Maya R.</h2>
            <div className="flex">
              <Star filled />
              <Star filled />
              <Star filled />
              <Star filled />
              <Star />
            </div>
          </div>
        </div>

        <h1 className="text-[14px] italic mb-3 leading-relaxed font-bold">
          AMAZING Customer Service and Product
        </h1>

        <p className="text-[13px]">
          I bought this for my boyfriend and me, and we have absolutely LOVED them so far!!! Thank you so much!!!
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="border-2 border-dashed border-black rounded-xl p-4 text-[#2e2e2e] max-w-md w-full shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={profile2}
            alt="Maya R."
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <h2 className="text-sm font-semibold">Maya R.</h2>
            <div className="flex">
              <Star filled />
              <Star filled />
              <Star filled />
              <Star filled />
              <Star />
            </div>
          </div>
        </div>

        <h1 className="text-[14px] italic mb-3 leading-relaxed font-bold">
        Love these Books!        </h1>

        <p className="text-[13px]">
        These would be very helpful for anyone on a self-healing journey.        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="border-2 border-dashed border-black rounded-xl p-4 text-[#2e2e2e] max-w-md w-full shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={profile3}
            alt="Maya R."
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <h2 className="text-sm font-semibold">Maya R.</h2>
            <div className="flex">
              <Star filled />
              <Star filled />
              <Star filled />
              <Star filled />
              <Star />
            </div>
          </div>
        </div>

        <h1 className="text-[14px] italic mb-3 leading-relaxed font-bold">
        Couldn't be happier        </h1>

        <p className="text-[13px]">
        Having a handbook to explain things and give me exercises and a place to write has been amazing. The quality of this book is better than any help book I've bought. The time it arrived was amazing — in less than a week I received this treasure to dive into, without the long wait time. I'm suggesting this for gifts for the upcoming holiday season to buy.        </p>
      </div>

      {/* Testimonial 4 */}
      <div className="border-2 border-dashed border-black rounded-xl p-4 text-[#2e2e2e] max-w-md w-full shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={profile4}
            alt="Maya R."
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <h2 className="text-sm font-semibold">Maya R.</h2>
            <div className="flex">
              <Star filled />
              <Star filled />
              <Star filled />
              <Star filled />
              <Star />
            </div>
          </div>
        </div>

        <h1 className="text-[14px] italic mb-3 leading-relaxed font-bold">
        This is precisely what I needed to heal!        </h1>

        <p className="text-[13px]">
        This book is incredible! It breaks down your traumas and makes you face it head on! This book is allowing me to heal and grow. It’s truly worth the hype!        </p>
      </div>

      {/* Testimonial 5 (centered) */}
      <div className="border-2 md:hidden md:m-auto border-dashed border-black rounded-xl p-4 text-[#2e2e2e] max-w-md w-full shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={profile5}
            alt="Maya R."
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <h2 className="text-sm font-semibold">Maya R.</h2>
            <div className="flex">
              <Star filled />
              <Star filled />
              <Star filled />
              <Star filled />
              <Star />
            </div>
          </div>
        </div>

        <h1 className="text-[14px] italic mb-3 leading-relaxed font-bold">
        Best purchase so far!        </h1>

        <p className="text-[13px]">
        I love this book! I never thought I needed to heal my inner child until now! Recommend to everyone!        </p>
      </div>
    </div>
      <div className="border-2 md:block hidden md:m-auto border-dashed border-black rounded-xl p-4 text-[#2e2e2e] max-w-md w-full shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={profile5}
            alt="Maya R."
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <h2 className="text-sm font-semibold">Maya R.</h2>
            <div className="flex">
              <Star filled />
              <Star filled />
              <Star filled />
              <Star filled />
              <Star />
            </div>
          </div>
        </div>

        <h1 className="text-[14px] italic mb-3 leading-relaxed font-bold">
        Best purchase so far!        </h1>

        <p className="text-[13px]">
        I love this book! I never thought I needed to heal my inner child until now! Recommend to everyone!        </p>
      </div>
      <div className='flex justify-center'>
      <button onClick={handleClick} className="p-5    md:p-3 text-lg md:text-base text-white bg-black rounded-xl mt-6 md:ml-20 md:mt-10">
              Yes, I Want the Healing Guide
            </button>
            </div>
      <div className="mt-8 text-sm text-center ml-20 text-gray-700">
        ★★★★★ 4.8/5 FROM 600+ WOMEN <br />
        <span className="font-semibold underline">17,000+ COPIES SOLD</span> | 60-DAY GUARANTEE
      </div>

<div className="mt-10 mb-8 bg-gradient-to-b from-[#f9f1fb] to-[#fdf4e3] p-6 rounded-b-2xl shadow-lg max-w-3xl mx-auto text-center text-[#2e2e2e] space-y-6">
  {/* Top Context */}
  <div className="space-y-2">
    <p className="text-lg font-medium  text-gray-800">
      Created by <strong>Ashley & Mathew</strong>, founders of <strong>The Yoga Couple</strong>
    </p>
    <p className="text-md text-gray-600">
      Trauma-informed relationship coaches and bestselling authors.
    </p>
    <p className="text-md font-semibold text-red-600">
      Their work has helped over 20,000 women:
    </p>
    <ul className="text-sm text-left text-gray-700 space-y-1">
      <li> Heal anxious and avoidant attachment wounds</li>
      <li> Understand their emotional patterns</li>
      <li> Attract safe, secure relationships — without changing who they are</li>
    </ul>
  </div>

  {/* Main Heading */}
  <h2 className="text-lg font-semibold text-black sm:text-2xl">
    It’s Time to Choose a Different Story
  </h2>

  {/* Subtext */}
  <p className="text-sm sm:text-base leading-relaxed tracking-wide uppercase font-medium text-[#3a3a3a]">
    You’ve done the overthinking. The people-pleasing. The overgiving. <br />
    Now it’s time to do something different — not by dating harder, but by healing deeper.
  </p>

  {/* CTA Button */}
  <button onClick={handleClick} className="px-6 py-2 text-sm font-semibold text-white transition duration-300 bg-black rounded-full hover:bg-red-700 sm:text-base">
    YES, I’M READY TO BREAK THE CYCLE
  </button>

  {/* Disclaimer */}
  <p className="text-xs text-gray-600">
    Instant delivery. Risk-free. Secure checkout via Digistore24.
  </p>

  {/* Footer */}
  <footer className="pt-2 text-xs text-gray-400">
    © Untitled. All rights reserved.
  </footer>
</div>

 </div>
  );
}

// Helper component for stars
function Star({ filled }) {
  return (
    <svg
      className={`w-3 h-3 ${filled ? "text-green-500" : "text-gray-300"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.188c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.538 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.783.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.171 9.4c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 00.95-.69L9.049 2.927z" />
    </svg>
  );
}


