import React from 'react';
import vide from '../assets/vide.mp4';

const Main2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center min-h-screen px-6 py-8 mb-36 gap-10">
      
      {/* Left Side - Video & Text */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:ml-35">
        <div className="w-full max-w-[350px] flex flex-col items-center text-gray-700">
          <video controls className="w-full rounded-md shadow-md" src={vide}></video>

          <h2 className="pt-6 text-lg md:text-xl font-bold text-black text-center md:text-left">
            🧠 It’s like your heart keeps knocking on the <br className="hidden md:block" />
            same locked door, hoping this time someone <br className="hidden md:block" />
            will open it…
          </h2>

          <h2 className="pt-4 text-base md:text-xl text-black text-center md:text-left">
            What if it’s about understanding why you keep choosing the same one?
          </h2>
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <p className="mb-4 text-sm md:text-md italic text-gray-700 text-center md:text-left">
          You’re smart. You’re self-aware.
          <br />
          You’ve done the therapy, watched the TikToks, maybe even journaled it out.
        </p>

        <h2 className="mb-6 text-lg md:text-2xl font-bold text-red-700 text-center md:text-left">
          So why does it still feel like you’re stuck in the same relationship pattern — over and over again?
        </h2>

        <ul className="space-y-3 text-base md:text-xl italic text-gray-800 list-disc pl-4">
          <li>❤️ You attract men who pull away the moment things get real</li>
          <li>❤️ You second-guess yourself constantly</li>
          <li>❤️ You try to “be chill” — but feel like you’re walking on eggshells</li>
          <li>❤️ You feel invisible, anxious, and like you’re always the one trying harder</li>
        </ul>
      </div>
    </div>
  );
};

export default Main2;
