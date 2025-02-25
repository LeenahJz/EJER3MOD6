import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { BsHospitalFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    document.body.style.overflow = nav ? "scroll" : "hidden";
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setNav(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <img className='w-24 h-24' src='https://cdn-icons-png.flaticon.com/512/2798/2798878.png'></img>
      <h1 className="text-white font-bold text-2xl z-20">BLUE HOSPITAL</h1>
      <TiThMenu onClick={handleNav} className="z-20 text-blue-200 cursor-pointer" size={30} />
      <div className={nav ? "ease-in duration-300 fixed text-blue-400 left-0 top-0 w-full h-screen bg-blue-950/80 px-4 py-7 flex-col z-10" : "absolute top-0 h-screen left-[-100%] ease-in duration-300 z-10"}>
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li className="p-9"><button onClick={() => scrollToSection("home")} className="text-blue-300 font-bold text-4xl p-8 bg-blue-950/10">Home</button></li>
          <li className="p-9"><button onClick={() => scrollToSection("doctors")} className="text-blue-300 font-bold text-4xl p-8 bg-blue-950/10">Doctors</button></li>
          <li className="p-9"><button onClick={() => scrollToSection("services")} className="text-blue-300 font-bold text-4xl p-8 bg-blue-950/10">Services</button></li>
          <li className="p-9"><button onClick={() => scrollToSection("schedule")} className="text-blue-300 font-bold text-4xl p-8 bg-blue-950/10">Make an Appointment</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
