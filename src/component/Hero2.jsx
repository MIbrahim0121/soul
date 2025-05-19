// ProductPage.jsx
// import React from "react";
import book from "../assets/bo.jpeg"
// import three from "../assets/three.png"
import payment from "../assets/payment.png"
import Progress from "../component/Progress"
import { FaCheck } from "react-icons/fa6";
import rev from "../assets/raw - Edited.jpg"
import vid from "../assets/vide.mp4"
// import Testimonial from "../component/Testimonial";
// import Testimonial2 from "../component/Testimonial2";
// import Testimonial3 from "../component/Testimonial3";
// import Testimonial4 from "../component/Test5";
// import Testimonial5 from "../component/Test6";
import Footer from '../component/Footer'
import img1 from "../assets/page1.png"
import img2 from "../assets/page2.png"
import { useState, useEffect } from "react";
// import thumbnail from "../assets/thumbnail.png"
import Testimonials from "../component/Testimonialsec";
import Thumbnail1 from "../assets/Thumbnails.png"


export default function ProductPage() {
    useEffect(() => {
        // Clear cookies
        document.cookie.split(";").forEach((cookie) => {
            document.cookie = cookie
                .replace(/^ +/, "")
                .replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
        });

        // Clear cache (Service Worker cache)
        if ("caches" in window) {
            caches.keys().then((names) => {
                names.forEach((name) => caches.delete(name));
            });
        }
    }, []);
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
            <div className="min-h-screen overflow-x-hidden mt-12 bg-white flex flex-col items-center justify-center">
                <div className=" w-full flex flex-col md:flex-row bg-white  overflow-hidden">
                    {/* Left Side - Image */}
                    <div className="md:w-1/2   w-full">
                        <div className="relative w-[60vw] md:w-[26vw] h-[45vh] md:h-[80vh] mx-auto border-1 shadow-lg overflow-hidden md:border-2 border-black">
                            <img
                                src={images[currentImage]}
                                alt="The Inner Work of Relationships Guide"
                                loading="eager"
                                className="w-full h-full  object-cover transition duration-500"
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
                        <p className="text-gray-800 md:text-center hidden md:block  text-lg font-medium md:w-[50vw]  text-center ">A beautifully guided, 100+  page <br /> journey to emotional clarity <br /> and healing.</p>

                        {/* mobile view */}
                        <div className="md:w-1/2 w-full p-6 block md:hidden space-y-3 md:space-y-6">
                            <h1 className="md:text-[44px] text-[27px] md:leading-[45px] leading-[35px] md:text-left text-center font-light font-serif text-gray-900">
                                Still Attracting the <br />Wrong Kind of <br className="hidden md:block" /> Love?
                            </h1>
                             <p className="text-gray-800 md:text-left text-lg font-medium text-center "> Discover the hidden patterns quietly shaping your relationships — and how to break free to attract love that feels safe, steady, and real.
                        </p>
                           
                            <hr />


                            

                            
                          

                            <Progress />


                            <button onClick={handleClick} className="bg-black text-white w-[100%] py-5 rounded-full md:rounded-none  text-md font-bold hover:bg-gray-800 transition">
                                        Yes, I’m Ready to Break the Cycle for Good!

                            </button>
                            <p className="text-md md:text-2xl font-semibold text-purple-700 mb-2 ">
         Special Offer — Just $19.90 <span className="line-through text-gray-500 ml-2 text-lg">(Normally $58.00)</span>
      </p>


                            <img src={payment} alt="Visa" className="md:w-[70%] w-[100%] m-auto " />


                              <div className="pt-6">
                            <h2 className="text-[21px] text-center font-bold font-worksans text-gray-900"> It’s Not About Finding the Right Person.  It’s About Becoming Open to Real Love</h2>
                            <h2 className="text-[20px] font-semibold mt-5 font-worksans text-gray-900">  With over 17,000 women already on this journey, you’ll discover how to:</h2>


                            <ul className="list-disc font-worksans md:w-[90%] list-inside text-[20px] leading-[34px] text-gray-700 pt-2">
                                <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />
                                    Release emotional patterns quietly sabotaging your happiness.</li>
                                <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" /> Invite love that feels emotionally safe, not chaotic.
                                </li>
                                <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />Feel calm, confident, and secure — no matter what life throws your way.</li>

                                {/* Add more items as needed */}
                            </ul>
                        </div>
                        </div>
                         <div className="mt-10 block md:hidden  mb-8 bg-gradient-to-b p from-[#FFF4E9] to-[#FAF0FE] p-9 font-light rounded-b-2xl shadow-lg max-w-2xl  text-center text-[#2e2e2e] space-y-5 ">
                            <h2 className="font-worksans font-bold text-[20px]" >Try It Risk-Free — 60-Day Money-Back Guarantee
                            </h2>
                            <p className="font-worksans text-[19px] font-normal text-left" >If this guide doesn’t bring you new clarity or help you feel more emotionally at peace, simply reach out for a full refund. No questions asked.
                            </p>
                            <button onClick={handleClick} className="    bg-black text-white w-[80%] py-4 rounded-lg text-md font-bold hover:bg-gray-800 transition">
                                I’m Ready to Start My Healing Journey Now!
                            </button>

                        </div>



                        <div className="md:mb-0 mb-5 text-center" >
                            <img className="md:w-[75%] w-[100%] m-auto" src={rev} alt="" />
                            <video controls poster={Thumbnail1} className="w-[75%] md:w-[55%] m-auto h-auto " src={vid}></video>


                        </div>


                        <div className="md:mt-40  bg-gradient-to-b  from-[#FFF4E9] to-[#FAF0FE] p-9 font-light rounded-b-2xl shadow-lg w-[100vw] text-center text-[#2e2e2e] space-y-6">
                            {/* Top Context */}
  <div className="md:p-6  text-left w-[100vw] mx-auto">
                <h2 className="md:text-4xl text-center  md:w-[100%] w-[90%] text-3xl md:pl-2 font-bold text-gray-900 mb-6">Here’s Exactly What You’ll Get Inside:</h2>
       <ul className="space-y-6 text-left text-[19px] md:pl-10 md:w-[90%] w-[80%]">
           <li className="flex items-start">
               <span className="text-purple-500 mr-3 mt-1">✔</span>
               <div>
                   <p className="font-bold text-lg text-gray-900">
                       Personal Commitment Contract –              <span className="font-normal text-gray-700">
                                                {" "}  Create a powerful emotional shift and set the tone for healthier, more authentic connections.
                                            </span>
                                        </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-500 mr-3 mt-1">✔</span>
                                        <div>
                                            <p className="font-bold text-gray-900">
                                                Proven Inner Work Exercises –               <span className="font-normal text-gray-700">
                                                    {" "}Break old emotional patterns and start rewiring your belief system for healthier love.

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
                                                    {" "}Uncover the root of your relationship&apos;s challenges and limiting beliefs through insightful journaling prompts that foster self-discovery.
                                                </span>
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-500 mr-3 mt-1">✔</span>
                                        <div>
                                            <p className="font-bold text-gray-900">
                                                30+ Deep Reflection Prompts –              <span className="font-normal text-gray-700">
                                                    {" "}  Finally understand why love has felt hard — and how to make it easier.
                                                </span>
                                            </p>
                                        </div>

                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-500 mr-3 mt-1">✔</span>
                                        <div>
                                            <p className="font-bold text-gray-900">
                                                7-Minute Guided Healing Practice –              <span className="font-normal text-gray-700">
                                                    {" "}  Feel emotional relief today in just 7 minutes.
                                                </span>
                                            </p>
                                        </div>


                                    </li>
                                    <li className="flex items-start ">
                                        <div>
                                            <p className="font-bold text-gray-900">
                                                Bonus: Access to the Emotional Healing Portal –               <span className="font-normal text-gray-700">
                                                    {" "} Meditations, calming breathwork, and emotional tools for real change.

                                                </span>
                                            </p>
                                        </div> </li>
                                </ul>
                            </div>
                            

                        </div>
                        <hr />
                        <Testimonials />
                       
                        <hr />
                         <section className="py-16 space-y-6 px-6 w-[100vw] text-center  bg-gradient-to-br from-[#fff9f2] to-[#fdeefe]">
      
      <p className="text-xl md:text-2xl font-semibold text-purple-700 mb-2 ">
         Special Offer — Just $19.90 <span className="line-through text-gray-500 ml-2 text-lg">(Normally $58.00)</span>
      </p>
      <p className="text-lg text-gray-800 mb-6">
         High Demand Following Our New Release. Secure Your Copy Before It’s Gone!
      </p>
      <button onClick={handleClick} className="bg-black hover:bg-purple-700 text-white font-semibold text-lg px-8 py-3 rounded-2xl shadow-lg transition duration-300">
         Yes, I’m Ready to Break the Cycle for Good!
      </button>
      <p className="text-sm text-gray-500 mt-4">
        Instant Download. Secure Checkout. Risk-Free for 60 Days.
      </p>
    </section>


                    </div>
                    {/* desktop mode */}
                    {/* Right Side - Details */}
                    <div className="md:w-1/2 w-full pr-32 hidden md:block p-6 space-y-4">
                        <h1 className="md:text-[44px] text-[38px] leading-[45px] md:text-left text-center font-[700] font-cormorant text-gray-900">
                            Still Attracting the <br /> Wrong Kind of<br />  Love?
                        </h1>
                        <p className="text-gray-800 md:text-left text-lg font-medium text-center "> Discover the hidden patterns quietly shaping your relationships — and how to break free to attract love that feels safe, steady, and real.
                        </p>
                        <hr />
                        <Progress />


                        <button onClick={handleClick} className="bg-black m-auto text-white w-[100%] py-3 rounded-lg text-lg font-bold hover:bg-gray-800 transition">
                            Yes, I’m Ready to Break the Cycle!

                        </button>
                          <p className="text-xl md:text-2xl font-semibold text-purple-700 mb-2 ">
         Special Offer — Just $19.90 <span className="line-through text-gray-500 ml-2 text-lg">(Normally $58.00)</span>
      </p>
                        <p className="text-sm  font-[400] font-worksans md:text-[19px] text-[17px] text-center md:text-center ">Instant Download. Secure Checkout. Risk-Free for 60 Days</p>

                        <img src={payment} alt="Visa" className="md:w-[70%] w-[100%] m-auto " />


                        <div className="pt-6">
                            <h2 className="text-[21px] text-center font-bold font-worksans text-gray-900"> It’s Not About Finding the Right Person.  It’s About Becoming Open to Real Love</h2>
                            <h2 className="text-[20px] font-semibold mt-5 font-worksans text-gray-900">  With over 17,000 women already on this journey, you’ll discover how to:</h2>


                            <ul className="list-disc font-worksans md:w-[90%] list-inside text-[20px] leading-[34px] text-gray-700 pt-2">
                                <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />
                                    Release emotional patterns quietly sabotaging your happiness.</li>
                                <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" /> Invite love that feels emotionally safe, not chaotic.
                                </li>
                                <li className="mt-5 list-none" ><FaCheck className="inline mr-3 text-purple-600" />Feel calm, confident, and secure — no matter what life throws your way.</li>

                                {/* Add more items as needed */}
                            </ul>
                        </div>

                        <div className="mt-10   mb-8 bg-gradient-to-b p from-[#FFF4E9] to-[#FAF0FE] p-9 font-light rounded-b-2xl shadow-lg max-w-2xl  text-center text-[#2e2e2e] space-y-5 ">
                            <h2 className="font-worksans font-bold text-[20px]" >Try It Risk-Free — 60-Day Money-Back Guarantee
                            </h2>
                            <p className="font-worksans text-[19px] font-normal text-left" >If this guide doesn’t bring you new clarity or help you feel more emotionally at peace, simply reach out for a full refund. No questions asked.
                            </p>
                            <button onClick={handleClick} className="    bg-black text-white w-[80%] py-4 rounded-lg text-md font-bold hover:bg-gray-800 transition">
                                I’m Ready to Start My Healing Journey Now!
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
