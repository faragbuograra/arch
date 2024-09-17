import { useState } from "react";
import { MdDashboard } from "react-icons/md";
export default function NavBar() {
  const [open, setOpen] = useState(true);
  return (
    <nav
      className={` ${
        open ? "w-72" : "w-20"
      } bg-white h-screen pt-8 relative duration-300`}
    >
      <div className="flex justify-between items-center  p-5">
        <div
          className={` ${
            !open ? "hidden " : " "
          } flex text-2xl font-bold text-center`}
        >
          <img
            src="./images/archive.png"
            alt="archive"
            className={` "w-full h-12 " ${!open ? "hidden " : " "}`}
          />
          <h1
            className={` ${
              !open ? "hidden " : " "
            }text-2xl  flex font-bold text-center justify-center my-auto mx-1 text-[#3100FF]
           ]  `}
          >
            Archive
          </h1>
        </div>
        <button onClick={() => setOpen(!open)} className="text-4xl mb-2">
          {open ? "☰" : "☰"}
        </button>
      </div>
      <hr className="mt-5" />
      <ul className=" p-5">
        <li className="mb-2 ">
          <a href="#" className=" font-bold flex items-center">
            <MdDashboard size={30} className="" />
            <h2
              className={` ${
                !open ? "hidden " : " "
              } text-2xl  flex font-bold text-center justify-center my-auto mx-2 
           ]  `}
            >
              Dashboard
            </h2>
          </a>
        </li>
      </ul>
    </nav>
  );
}
