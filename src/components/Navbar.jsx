import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { BsHospitalFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate(); //Crea una función navigate para redireccionar

  const handleNav = () => {
    setNav(!nav);
    document.body.style.overflow = nav ? "scroll" : "hidden";
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setNav(false);
    document.body.style.overflow = "scroll";
  };
  
  const handleLogin = () => {
    navigate("/login"); // Redirige a la página de login
  };


  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <img className='w-24 h-24' alt="icon" src='https://cdn-icons-png.flaticon.com/512/2798/2798878.png'></img>
      <h1 className="text-white font-bold text-2xl z-20"></h1>
      <button
        onClick={handleLogin}
        className="absolute z-20 right-20 text-white font-bold text-xl p-4 bg-blue-900 rounded-lg hover:bg-blue-700"
      >
        Login
      </button>
      <TiThMenu onClick={handleNav} className="z-20 text-blue-200 cursor-pointer" size={20} />
      <div
        role="navigation"
        aria-label="Menú principal"
        className={nav ? "ease-in duration-300 fixed text-blue-400 left-0 top-0 w-full h-screen bg-blue-950/80 px-4 py-7 flex-col z-10" : "absolute top-0 h-screen left-[-100%] ease-in duration-300 z-10"}
      >
        <ul role="menu" className="flex flex-col fixed w-full h-full items-center justify-center">
          <li role="menuitem" className="p-9"><button onClick={() => scrollToSection("home")} className="text-blue-300 font-bold text-4xl p-8 bg-blue-950/10">Home</button></li>
          <li role="menuitem" className="p-9"><button onClick={() => scrollToSection("doctors")} className="text-blue-300 font-bold text-4xl p-8 bg-blue-950/10">Doctors</button></li>
          <li role="menuitem" className="p-9"><button onClick={() => scrollToSection("services")} className="text-blue-300 font-bold text-4xl p-8 bg-blue-950/10">Services</button></li>
          <li role="menuitem" className="p-9"><button onClick={() => scrollToSection("schedule")} className="text-blue-300 font-bold text-4xl p-8 bg-blue-950/10">Make an Appointment</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
