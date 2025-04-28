// import React from "react";
// import book from "../assets/book.png";
// import three from "../assets/three.png";
// import rev from "../assets/book-rev.png";
// import payment from "../assets/payments.png";
// import vide from '../assets/vide.mp4';


// const Main1 = () => {
//   return (
//     <div>
//     <div className="w-full md:mt-14 px-4 md:px-0">
//       <div className="flex flex-col md:flex-row w-full h-auto ">
        
//         {/* Left Side */}
        
//         <div className="w-full md:w-[50%] pt-5 flex flex-col items-center md:items-end">
//           <img className="w-[70%] md:w-[54%] md:pr-16" src={book} alt="" />
//           <h1 className="font-serif text-4xl md:text-3xl font-semibold mt-4 md:pr-28">
//             About The Book
//           </h1>
//           <img className="w-[100%] md:w-[60%] mt-7" src={rev} alt="" />
//         </div>

//         {/* Right Side */}
//         <div className="w-full md:w-[50%] flex flex-col items-center
//          md:items-start ">
//           <h1 className="font-serif text-center text-3xl md:text-3xl leading-tight">
//             Still Attractive Emotionally
//             <br />
//             Unavailable Men
//           </h1>

//           <p className="text-lg md:text-[12px] md:pl-24 mt-2">
//             4.8/5 (606 Reviews) | <b>17.2K Sold</b>
//           </p>

//           <hr className="h-[1px] mt-5 w-[80%] md:w-[60%] bg-black" />

//           <img className="w-[85%] md:w-[45%] md:ml-16 md:pt-6 mt-6" src={three} alt="" />

//           <div className="p-2 flex gap-2 md:ml-28 mt-4 ">
//             <span className="text-3xl md:text-3xl">$19.90</span>
//             <span className="text-3xl md:text-3xl text-gray-500 line-through">$58.00</span>
//           </div>

//           <p className="text-lg md:text-[13px] text-center md:text-left md:pl-5 pt-4 px-2">
//             It’s not your fault — but it is your pattern. And it can be healed
//           </p>

//           <button className="p-5 md:p-3 text-lg md:text-base text-white bg-black rounded-xl mt-6 md:ml-20 md:mt-10">
//             Yes, I Want the Healing Guide
//           </button>

//           <img src={payment} className="w-[90%] md:w-[45%]  md:ml-12  " alt="" />

//           <p className="text-lg text-center md:text-left  md:ml-12">
//             This bestselling guide has helped thousands of women<br /> finally 
//             understand their relationship patterns — and take back their emotional power.
//           </p>
//         </div>

//       </div>
//     </div>
//       <div className="flex flex-col md:flex-row justify-center min-h-screen px-6 pb-8  gap-10">
          
//           {/* Left Side - Video & Text */}
//           <div className="w-full  md:w-1/2 flex flex-col items-center md:ml-35">
//             <div className="w-full max-w-[350px] flex flex-col items-center text-gray-700">
//               <video controls className="w-full rounded-md shadow-lg" src={vide}></video>
    
              
//             </div>
//           </div>
    
//           {/* Right Side - Text Content */}
//           <div className="w-full md:w-1/2 flex flex-col justify-start mt-20 ">
//             <p className="mb-4 text-lg md:text-md italic text-gray-700 text-center md:text-left">
//               You’re smart. You’re self-aware.
//               <br />
//               You’ve done the therapy, watched the TikToks, maybe even journaled it out.
//             </p>
    
//             <h2 className="mb-6 text-lg md:text-2xl font-bold text-red-700 text-center md:text-left">
//               So why does it still feel like you’re stuck in the same relationship pattern — over and over again?
//             </h2>
    
//             <ul className="space-y-3 text-base md:text-xl italic text-gray-800 list-disc pl-4">
//               <li> You attract men who pull away the moment things get real</li>
//               <li> You second-guess yourself constantly</li>
//               <li> You try to “be chill” — but feel like you’re walking on eggshells</li>
//               <li> You feel invisible, anxious, and like you’re always the one trying harder</li>
//             </ul>
//             <h2 className="pt-6 text-lg md:text-xl font-bold text-black text-center md:text-left">
//                  It’s like your heart keeps knocking on the <br className="hidden md:block" />
//                 same locked door, hoping this time someone <br className="hidden md:block" />
//                 will open it…
//               </h2>
              
//               <h2 className="pt-4 text-base md:text-xl text-black text-center md:text-left">
//                 What if it’s about understanding why you keep choosing the same one?
//               </h2>
//           </div>
          
//         </div>
        
       
//     </div>
//   );
// };

// export default Main1;

import React, { useState } from "react";
import book from "../assets/bo.jpeg";
import img1 from "../assets/page1.png"; // 1st new image
import img2 from "../assets/page2.png"; // 2nd new image
import three from "../assets/three.png";
import rev from "../assets/book-rev.png";
import payment from "../assets/payments.png";
import vide from '../assets/vide.mp4';

const Main1 = () => {
  const images = [book, img1, img2]; // All three images
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="w-full md:mt-14 px-4 md:px-0">
        <div className="flex flex-col md:flex-row w-full h-auto ">

          {/* Left Side */}
          <div className="w-full md:w-[50%] pt-5 flex flex-col items-center md:items-end">
            {/* Slider Start */}
            <div className="relative w-[70%] md:w-[54%] md:pr-16">
              <img className="w-full border-2 border-black h-auto rounded-md" src={images[currentImage]} alt="Slider" />
              <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-1">
                ‹
              </button>
              <button onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-1">
                ›
              </button>
            </div>
            {/* Slider End */}

            <h1 className="font-serif text-4xl md:text-3xl font-semibold mt-4 md:pr-28">
              About The Book
            </h1>
            <img className="w-[100%] md:w-[60%] mt-7" src={rev} alt="" />
          </div>

          {/* Right Side */}
          <div className="w-full md:w-[50%] flex flex-col items-center md:items-start ">
            <h1 className="font-serif text-center md:text-left  text-3xl font-bold  md:text-3xl leading-tight">
              Still Attractive<br /> Emotionally
              
              Unavailable <br />Men
            </h1>

            <p className="text-lg md:text-[12px] md:pl-24 mt-2">
              4.8/5 (606 Reviews) | <b>17.2K Sold</b>
            </p>

            <hr className="h-[1px] mt-5 w-[80%] md:w-[60%] bg-black" />

            <img className="w-[85%] md:w-[45%] md:ml-16 md:pt-6 mt-6" src={three} alt="" />

            <div className="p-2 flex gap-2 md:ml-28 mt-4 ">
              <span className="text-3xl md:text-3xl">$19.90</span>
              <span className="text-3xl md:text-3xl text-gray-500 line-through">$58.00</span>
            </div>

            <p className="text-lg md:text-[13px] text-center md:text-left md:pl-5 pt-4 px-2">
              It’s not your fault — but it is your pattern. And it can be healed
            </p>

            <button className="p-5 md:p-3 text-lg md:text-base text-white bg-black rounded-xl mt-6 md:ml-20 md:mt-10">
              Yes, I Want the Healing Guide
            </button>

            <img src={payment} className="w-[90%] md:w-[45%]  md:ml-12" alt="" />

            <p className="text-lg text-center md:text-left  md:ml-12">
              This bestselling guide has helped thousands of women<br /> finally 
              understand their relationship patterns — and take back their emotional power.
            </p>
          </div>

        </div>
      </div>

      {/* Remaining part unchanged */}
      <div className="flex flex-col md:flex-row justify-center min-h-screen px-6 pb-8 gap-10">
        <div className="w-full md:w-1/2 flex flex-col items-center md:ml-35">
          <div className="w-full max-w-[350px] flex flex-col items-center text-gray-700">
          <video
        controls
        className="w-full rounded-md shadow-lg"
        src={vide} // Video source
        poster={book} // Thumbnail image before video starts
      >
        Your browser does not support the video tag.
      </video>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-start mt-20">
          <p className="mb-4 text-lg md:text-md italic text-gray-700 text-center md:text-left">
            You’re smart. You’re self-aware.
            <br />
            You’ve done the therapy, watched the TikToks, maybe even journaled it out.
          </p>

          <h2 className="mb-6 text-lg md:text-2xl font-bold text-red-700 text-center md:text-left">
            So why does it still feel like you’re stuck in the same relationship pattern — over and over again?
          </h2>

          <ul className="space-y-3 text-base md:text-xl italic text-gray-800 list-disc pl-4">
            <li> You attract men who pull away the moment things get real</li>
            <li> You second-guess yourself constantly</li>
            <li> You try to “be chill” — but feel like you’re walking on eggshells</li>
            <li> You feel invisible, anxious, and like you’re always the one trying harder</li>
          </ul>

          <h2 className="pt-6 text-lg md:text-xl font-bold text-black text-center md:text-left">
            It’s like your heart keeps knocking on the <br className="hidden md:block" />
            same locked door, hoping this time someone <br className="hidden md:block" />
            will open it…
          </h2>

          <h2 className="pt-4 text-base md:text-xl text-black text-center md:text-left">
            What if it’s about understanding why you keep choosing the same one?
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main1;
