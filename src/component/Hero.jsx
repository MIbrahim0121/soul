// ProductPage.jsx
import React from "react";
import book from "../assets/bo.jpeg"
import three from "../assets/three.png"
import payment from "../assets/payment.png"
import Progress from "../component/Progress"



export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white  overflow-hidden">
        {/* Left Side - Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={book} // Replace with your image path
            alt="The Inner Work of Relationships Guide"
            className="border-2 border-black md:ml-36 md:w-[30vw] md:h-[93vh] w-[65vw] m-auto  object-cover"
          />
        </div>

        {/* Right Side - Details */}
        <div className="md:w-1/2 w-full p-6 space-y-4">
          <h1 className="md:text-[44px] text-[38px] leading-[45px] md:text-left text-center font-[700] font-cormorant text-gray-900">
            THE INNER WORK <br /> RELATIONSHIPS <br /> GUIDE
          </h1>
          <p className="text-gray-800 md:text-left text-sm text-center ">4.8/5 (606 Reviews) | <strong>17.2K Sold</strong></p>
          <hr />

         
         <img className="m-auto md:m-0" src={three} alt="" />

          <div className="  text-center">
            <span className="text-[35px] font-sans font-[400] text-black">$19.90</span>
            <span className="text-[35px] font-sans line-through text-gray-400 ml-3">$58.00</span>
          </div>
          <p className="text-sm font-[700] font-worksans md:text-[19px] text-[17px] text-center md:text-left ">Discount 60% - Only Today</p>
         
          <Progress/>
          

          <button className="bg-black text-white w-[100%] py-3 rounded-lg text-lg font-bold hover:bg-gray-800 transition">
            GET IT NOW!
          </button>

          
            <img  src={payment} alt="Visa" className="md:w-[70%] w-[100%] m-auto " />
           

          <div className="pt-6">
            <h2 className="text-lg font-bold text-gray-900">This Book Includes:</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 pt-2">
              <li>100+ thoughtfully curated pages</li>
              <li>Designed to help you examine and grow</li>
              <li>Tools for authentic love & connection</li>
              {/* Add more items as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
