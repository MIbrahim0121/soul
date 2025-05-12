// ProductPage.jsx
import React from "react";
import book from "../assets/bo.jpeg"
import three from "../assets/three.png"
import payment from "../assets/payment.png"
import Progress from "../component/Progress"
import { FaCheck } from "react-icons/fa6";
import rev from "../assets/book-rev.png"
import vid from "../assets/vide.mp4"
import Testimonial from "../component/Testimonial";
import Testimonial2 from "../component/Testimonial2";
import Testimonial3 from "../component/Testimonial3";
import Testimonial4 from "../component/Test5";
import Testimonial5 from "../component/Test6";
import Footer from '../component/Footer'
import img1 from "../assets/page1.png"
import img2 from "../assets/page2.png"
import { useState } from "react";
import thumbnail from "../assets/thumbnail.png"


export default function ProductPage() {
  //  useEffect(() => {
  //   // Clear cookies
  //   document.cookie.split(";").forEach((cookie) => {
  //     document.cookie = cookie
  //       .replace(/^ +/, "")
  //       .replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
  //   });

  //   // Clear cache (Service Worker cache)
  //   if ("caches" in window) {
  //     caches.keys().then((names) => {
  //       names.forEach((name) => caches.delete(name));
  //     });
  //   }
  // }, []);
  const images = [book, img1, img2]; // All three images
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };
  const handleClick = () => {
    // window.open("https://www.digistore24.com/product/572074/200149?cid=d8j5dm1fjbsv27g9jh8v9jfa&utm_term=d8j5dm1fjbsv27g9jh8v9jfa", "_blank");
    window.open("https://latiodicsubsorts.com/click", "_self");
  };
  return (
    <>
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white  overflow-hidden">
        {/* Left Side - Image */}
        <div className="md:w-1/2 w-full">
        <div className="relative w-[65vw] md:w-[26vw] h-[45vh] md:h-[80vh] mx-auto border-1 shadow-lg overflow-hidden md:border-2 border-black">
  <img
    src={images[currentImage]}
    alt="The Inner Work of Relationships Guide"
    className="w-full md:h-full  object-cover transition duration-500"
  />

  {/* Prev Button */}
  <button
    onClick={prevSlide}
    className="absolute top-1/2 left-3 md:left-1 transform -translate-y-1/2 bg-black/80 hover:bg-black text-white text-2xl rounded-full p-1 shadow-xl hover:scale-110 transition duration-300"
  >
    ‹
  </button>

  {/* Next Button */}
  <button
    onClick={nextSlide}
    className="absolute top-1/2 right-3 md:right-1 transform -translate-y-1/2 bg-black/80 hover:bg-black text-white text-2xl rounded-full p-1  shadow-xl hover:scale-110 transition duration-300"
  >
    ›
  </button>
</div>
<div className="md:w-1/2 w-full p-6 block md:hidden space-y-3 md:space-y-6">
          <h1 className="md:text-[44px] text-[27px] md:leading-[45px] leading-[35px] md:text-left text-center font-light font-serif text-gray-900">
            THE INNER WORK <br /> RELATIONSHIPS <br className="hidden md:block" /> GUIDE
          </h1>
          <p className="text-gray-800 md:text-left text-sm text-center ">4.8/5 (606 Reviews) | <strong>17.2K Sold</strong></p>
          <hr />


          <img className="m-auto  md:m-0" src={three} alt="" />

          <div className="  md:ml-20 md:mt-0   ml-16">
            <span className="text-[30px]  md:text-[35px] font-sans font-[400] text-black">$19.90</span>
            <span className="text-[30px]  md:text-[35px] font-sans line-through text-gray-400 ml-3">$58.00</span>
          </div>
          <p className="font-[700] font-worksans md:text-[19px] text-[17px] text-center md:text-left ">Discount 60% - Only Today</p>

          <Progress />


          <button onClick={handleClick} className="bg-black text-white w-[100%] py-5 rounded-full md:rounded-none  text-lg font-bold hover:bg-gray-800 transition">
            GET IT NOW!
          </button>


          <img src={payment} alt="Visa" className="md:w-[70%] w-[100%] m-auto " />


          <div className="pt-6">
            <h2 className="text-[21px] font-bold font-worksans text-gray-900">This Book Includes:</h2>
            <ul className="list-disc font-worksans md:w-[70%] list-inside text-[20px] leading-[34px] text-gray-700 pt-2">
              <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />
                100+ thoughtfully curated pages designed to help you examine and transform how you approach relationships.</li>
              <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />Engaging exercises that encourage you to question and evaluate long-held beliefs and emotional patterns in your relationships.</li>
              <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />Tools to identify limiting beliefs about love, connection, and intimacy, transforming them into empowering and healthy perspectives.</li>
              <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />
                Guidance on cultivating self-awareness and understanding the connection between your emotional patterns and your relationship dynamics.</li>
              <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />

                Journal sections for reflecting on relationship challenges, emotional triggers, and the insights gained along your journey toward healing.</li>
              <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />

                Inspiring quotes and affirmations will motivate you to embrace vulnerability and authentic communication in your relationships.</li>
              <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />
                Techniques for emotional awareness and mindfulness to help you navigate conflicts and create healthier, more fulfilling connections.</li>
              <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />
              A beautifully organized layout for easy navigation and interactive engagement makes your relationship transformation journey seamless.</li>
              <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />
              Opportunities for personal growth as you uncover deeper self-awareness and unlock new perspectives in how you relate to others.</li>
              <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />
              A valuable guide to achieve emotional freedom, cultivate deeper intimacy, and foster authentic, empowered relationships.</li>
              {/* Add more items as needed */}
            </ul>
          </div>
        </div>


          
          <div className="text-center" ><h1 className="font-cormorant mt-5 text-[36px] font-bold" >ABOUT THE BOOK</h1>
          <img className="md:w-[75%] w-[100%] m-auto" src={rev} alt="" />
          <video controls poster={thumbnail}   className="w-[75%] md:w-[55%] m-auto h-auto " src={vid}></video>
          <p className="font-worksans italic md:text-[20px] text-[18px] leading-[40px]  mb-9 font-semibold md:font-bold w-[100%] md:w-[90%] text-left p-4 " >
          Introducing The Inner Work Relationships Guide– your essential guide to uncovering and healing the hidden emotional wounds that affect your relationships.
          </p>
          <p className="font-worksans text-[20px] text-left leading-10 font-[350] mb-9  md:mb-10 w-[100%] md:w-[90%]" >This book focuses on using intimate relationships as a powerful tool for personal growth, healing childhood traumas, and overcoming emotional patterns that may sabotage your connections. It delves into how early-life unresolved wounds shape current relationship dynamics and offers strategies for recognizing and addressing these deep-seated issues.</p>
          <p className="font-worksans text-[20px] text-left leading-10 font-[350]  mb-9  md:mb-10w-[100%] md:w-[90%]" >Through thoughtfully designed exercises, you’ll learn to identify emotional triggers, practice vulnerability, and develop stronger communication skills. The book emphasizes the importance of healing together, fostering emotional intimacy, and building a conscious, spiritual connection with your partner.</p>
          <p className="font-worksans text-[20px] text-left leading-10 font-[350]  mb-9  md:mb-10 w-[100%] md:w-[90%]" >With compassionate, clear guidance, The Inner Work Relationships Guide embarks you on a transformative journey, providing tools to create more fulfilling, authentic, and resilient relationships by healing both individually and as a couple</p>
          
          </div>
          <Testimonial/>
          <div className="p-6 max-w-2xl mx-auto">
      <h2 className="md:text-4xl text-3xl md:pl-2 font-bold text-gray-900 mb-6">What's inside?</h2>
      <ul className="space-y-6 text-[19px] md:pl-10 w-[90%]">
        <li className="flex items-start">
          <span className="text-purple-500 mr-3 mt-1">✔</span>
          <div>
            <p className="font-bold text-lg text-gray-900">
              Personal Commitment Contract:
              <span className="font-normal text-gray-700">
                {" "}Solidify your intention to embrace self-awareness and begin the journey toward healthier, more authentic relationships.
              </span>
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-purple-500 mr-3 mt-1">✔</span>
          <div>
            <p className="font-bold text-gray-900">
              Transformative Exercises:
              <span className="font-normal text-gray-700">
                {" "}Engage with powerful exercises designed to help you identify and shift negative emotional patterns affecting your relationships.
              </span>
            </p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-purple-500 mr-3 mt-1">✔</span>
          <div>
            <p className="font-bold text-gray-900">
              Over 30 Deep Reflection Prompts:
              <span className="font-normal text-gray-700">
                {" "}Uncover the root of your relationship's challenges and limiting beliefs through insightful journaling prompts that foster self-discovery.
              </span>
            </p>
          </div>
          </li>
          <li className="flex items-start">
          <span className="text-purple-500 mr-3 mt-1">✔</span>
          <div>
            <p className="font-bold text-gray-900">
            Guided Pages for Emotional Clarity: 
              <span className="font-normal text-gray-700">
                {" "}These pages will guide you through addressing unresolved emotions and communication patterns, helping you reframe your perspective and create stronger connections.
              </span>
            </p>
            </div>

        </li>
          <li className="flex items-start">
          <span className="text-purple-500 mr-3 mt-1">✔</span>
          <div>
            <p className="font-bold text-gray-900">
            Space for Free Expression:
              <span className="font-normal text-gray-700">
                {" "} Use the provided space to jot down breakthroughs, emotional insights, or reflections as you navigate your journey toward more profound, more fulfilling relationships.
              </span>
            </p>
            </div>
         

        </li>
          <li className="flex items-start ">
          <div>
            <p className="font-bold text-gray-900">
            Please Note:
              <span className="font-normal text-gray-700">
                {" "} This book is a self-reflection tool, not a therapy substitute. If facing emotional or psychological challenges, please consult a licensed therapist or mental health professional. Prioritize your well-being.
              </span>
            </p>
            </div>
         

        </li>
      </ul>
    </div>

    <div className="mt-10 md:ml-10 mb-8 bg-gradient-to-b p from-[#FFF4E9] to-[#FAF0FE] p-9 font-light rounded-b-2xl shadow-lg max-w-3xl mx-auto text-center text-[#2e2e2e] space-y-6">
  {/* Top Context */}
  <div className="space-y-2">
  <h1 className="text-[36px] font-bold font-worksans " >Why choose this Book?</h1>
  </div>

 

  {/* Subtext */}
  <p className="mb-10 md:text-[18px] text-left sm:text-base tracking-wider   font-[450] text-[#3a3a3a]">
  The Inner Work Relationships Guide is your essential companion on the path to deeper connection, emotional healing, and personal growth in relationships.
  </p>
  <p className="mb-10 md:text-[18px] text-left sm:text-base tracking-wider   font-[450] text-[#3a3a3a]">
  This book offers a well-structured and insightful guide to help you explore and heal the often-hidden emotional patterns that shape your relationships. Integrating these insights will pave the way to more authentic, fulfilling, and empowered connections with others.
  </p>
  <p className="mb-10 md:text-[18px] text-left sm:text-base tracking-wider  font-[450] text-[#3a3a3a]">
  By choosing The Inner Work Relationships Guide, you’re making a robust investment in both yourself and your relationships—equipping yourself with the tools and guidance to navigate your emotional world with clarity and intention.
  </p>
  <p className="mb-10 md:text-[18px] text-left sm:text-base tracking-wider   font-[450] text-[#3a3a3a]">
  It provides a clear roadmap for understanding the deeper layers of your relationship dynamics and unlocking your capacity for love, empathy, and vulnerability.
  </p>
  <p className="mb-10 md:text-[18px] text-left sm:text-base tracking-wider   font-[450] text-[#3a3a3a]">
  So, why should you get this book? This book is an invaluable resource for anyone ready to embark on a transformative journey toward healthier, more authentic relationships. Discover the key to emotional freedom and deeper intimacy and take the first step toward building your desired relationships.
  </p>

</div>
  <button onClick={handleClick} className="md:ml-10 bg-black text-white w-[100%] py-4 rounded-lg text-lg font-bold hover:bg-gray-800 transition">
            GET IT NOW!
          </button>
          <div className="mt-10 md:ml-10 mb-8 bg-gradient-to-b p from-[#FFF4E9] to-[#FAF0FE] p-9 font-light rounded-b-2xl shadow-lg max-w-3xl mx-auto text-center text-[#2e2e2e] space-y-6">
            <h2 className="font-worksans font-bold text-[20px]" >Purchasing this book involves no risk for you.</h2>
            <p className="font-worksans text-[19px] font-normal text-left" >If it does not meet your expectations in the first 60 days after purchase, we will refund the full price to your card with no questions asked.</p>
            <p className="font-worksans text-[19px] font-normal text-left" >Just send us an email.</p>
</div>
<h1 className="md:ml-10 mb-4 w-[90%] font-worksans font-bold text-[35px] ">What our customers say about it</h1>

<Testimonial2/>
<Testimonial3/>
<Testimonial4/>
<Testimonial5/>
<div className="flex ">
<button onClick={handleClick} className="md:ml-10 bg-black m-auto text-white w-[85%] md:mb-20 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 transition">
            GET IT NOW!
          </button>
          </div>


        </div>

        {/* Right Side - Details */}
        <div className="md:w-1/2 w-full hidden md:block p-6 space-y-4">
          <h1 className="md:text-[44px] text-[38px] leading-[45px] md:text-left text-center font-[700] font-cormorant text-gray-900">
            THE INNER WORK <br /> RELATIONSHIPS <br /> GUIDE
          </h1>
          <p className="text-gray-800 md:text-left text-sm text-center ">4.8/5 (606 Reviews) | <strong>17.2K Sold</strong></p>
          <hr />


          <img className="m-auto md:m-0" src={three} alt="" />

          <div className="  md:ml-20">
            <span className="text-[35px] font-sans font-[400] text-black">$19.90</span>
            <span className="text-[35px] font-sans line-through text-gray-400 ml-3">$58.00</span>
          </div>
          <p className="text-sm font-[700] font-worksans md:text-[19px] text-[17px] text-center md:text-left ">Discount 60% - Only Today</p>

          <Progress />


          <button onClick={handleClick} className="bg-black m-auto text-white w-[100%] py-3 rounded-lg text-lg font-bold hover:bg-gray-800 transition">
            GET IT NOW!
          </button>


          <img src={payment} alt="Visa" className="md:w-[70%] w-[100%] m-auto " />


          <div className="pt-6">
            <h2 className="text-[21px] font-bold font-worksans text-gray-900">This Book Includes:</h2>
            <ul className="list-disc font-worksans md:w-[70%] list-inside text-[20px] leading-[34px] text-gray-700 pt-2">
              <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />
                100+ thoughtfully curated pages designed to help you examine and transform how you approach relationships.</li>
              <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />Engaging exercises that encourage you to question and evaluate long-held beliefs and emotional patterns in your relationships.</li>
              <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />Tools to identify limiting beliefs about love, connection, and intimacy, transforming them into empowering and healthy perspectives.</li>
              <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />
                Guidance on cultivating self-awareness and understanding the connection between your emotional patterns and your relationship dynamics.</li>
              <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />

                Journal sections for reflecting on relationship challenges, emotional triggers, and the insights gained along your journey toward healing.</li>
              <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />

                Inspiring quotes and affirmations will motivate you to embrace vulnerability and authentic communication in your relationships.</li>
              <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />
                Techniques for emotional awareness and mindfulness to help you navigate conflicts and create healthier, more fulfilling connections.</li>
              <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />
              A beautifully organized layout for easy navigation and interactive engagement makes your relationship transformation journey seamless.</li>
              <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />
              Opportunities for personal growth as you uncover deeper self-awareness and unlock new perspectives in how you relate to others.</li>
              <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />
              A valuable guide to achieve emotional freedom, cultivate deeper intimacy, and foster authentic, empowered relationships.</li>
              {/* Add more items as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
