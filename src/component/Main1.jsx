import React from "react";
import book from "../assets/book.png";
import three from "../assets/three.png";
import rev from "../assets/book-rev.png";
import payment from "../assets/payments.png";

const Main1 = () => {
  return (
    <div className="w-full mt-12 px-4 md:px-0">
      <div className="flex flex-col md:flex-row w-full h-auto mb-20 md:mb-20">
        
        {/* Left Side */}
        <div className="w-full md:w-[50%] pt-5 flex flex-col items-center md:items-end">
          <img className="w-[70%] md:w-[54%] md:pr-16" src={book} alt="" />
          <h1 className="font-serif text-2xl md:text-2xl font-semibold mt-4 md:pr-28">
            About The Book
          </h1>
          <img className="w-[80%] md:w-[60%] mt-7" src={rev} alt="" />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[50%] flex flex-col items-center
         md:items-start ">
          <h1 className="font-serif text-center text-2xl md:text-3xl leading-tight">
            Still Attractive Emotionally
            <br />
            Unavailable Men
          </h1>

          <p className="text-sm md:text-[12px] md:pl-24 mt-2">
            4.8/5 (606 Reviews) | <b>17.2K Sold</b>
          </p>

          <hr className="h-[1px] mt-5 w-[80%] md:w-[60%] bg-black" />

          <img className="w-[40%] md:w-[40%] md:ml-16 md:pt-6 mt-6" src={three} alt="" />

          <div className="p-2 flex gap-2 md:ml-28 mt-4">
            <span className="text-xl md:text-2xl">$19.90</span>
            <span className="text-xl md:text-2xl text-gray-500 line-through">$58.00</span>
          </div>

          <p className="text-sm md:text-[12px] text-center md:text-left md:pl-5 pt-4 px-2">
            It’s not your fault — but it is your pattern. And it can be healed
          </p>

          <button className="p-3 text-sm md:text-base text-white bg-black rounded-xl mt-6 md:ml-20 md:mt-10">
            Yes, I Want the Healing Guide
          </button>

          <img src={payment} className="w-[60%] md:w-[45%]  md:ml-12" alt="" />

          <p className="text-sm text-center md:text-left mt-4 md:ml-12">
            This bestselling guide has helped thousands of women<br /> finally 
            understand their relationship patterns — and take back their emotional power.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Main1;
