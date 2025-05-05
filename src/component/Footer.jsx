import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b w-full py-7 from-amber-50 to-purple-50 ">
      <div className="text-center font-medium text-black text-base space-x-2">
        <a href="#" className="hover:underline">Contact</a>
        <span>|</span>
        <a href="#" className="hover:underline">Legal</a>
        <span>|</span>
        <a href="#" className="hover:underline">Terms & Conditions</a>
        <span>|</span>
        <a href="#" className="hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
}
