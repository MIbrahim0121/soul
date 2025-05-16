import { Link } from "react-router-dom";

// const handleClick = () => {
//         // window.open("https://www.digistore24.com/product/572074/200149?cid=d8j5dm1fjbsv27g9jh8v9jfa&utm_term=d8j5dm1fjbsv27g9jh8v9jfa", "_blank");
//         window.open("https://www.amazing-souls.com/legal-condition", "_self");
//     };
// const handleClick2 = () => {
//   // window.open("https://www.digistore24.com/product/572074/200149?cid=d8j5dm1fjbsv27g9jh8v9jfa&utm_term=d8j5dm1fjbsv27g9jh8v9jfa", "_blank");
//   window.open("https://www.amazing-souls.com/terms", "_self");
// };
// const handleClick3 = () => {
//   // window.open("https://www.digistore24.com/product/572074/200149?cid=d8j5dm1fjbsv27g9jh8v9jfa&utm_term=d8j5dm1fjbsv27g9jh8v9jfa", "_blank");
//   window.open("https://www.amazing-souls.com/privacy", "_self");
// };
export default function Footer() {
  return (
    <footer className=" bg-white w-[100vw]  py-7  ">
      <div className="text-center font-medium text-black text-base space-x-2">
        <a className="hover:underline">Contact</a>
        <span>|</span>
        <Link  to="/legal"  className="hover:underline">Legal</Link>
        <span>|</span>
        <Link to="/Terms" className="hover:underline">Terms & Conditions</Link>
        <span>|</span>
        <Link to="/policy" className="hover:underline">Privacy Policy</Link>
      </div>
    </footer>
  );
}
