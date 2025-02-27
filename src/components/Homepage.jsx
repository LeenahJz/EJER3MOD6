import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { STORES, addData } from "../db/db";

const Homepage = () => {
  const navigate = useNavigate();
  const [appointmentData, setAppointmentData] = useState({
    doctor: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(STORES.CITAS, appointmentData)
      .then(() => {
        alert("Cita programada correctamente");
        setAppointmentData({ doctor: "", date: "", time: "" }); // Limpiar el formulario
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-full h-screen relative">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="/images/doctor-portada.jpg"
        alt="Doctor Portada"
      />
      <div className="bg-blue-950/40 absolute top-0 left-0 w-full h-screen" />

      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md-left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p className="font-bold font-sans text-4xl">Welcome to Blue Hospital</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">Your Healthcare</h1>
          <h1 className="font-bold text-5xl text-blue-300 md:text-7xl drop-shadow-2xl">Destination</h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Make your appointment in the next button.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="text-white font-bold text-xl p-4 bg-blue-300 rounded-lg hover:bg-blue-400"
          >
            Schedule an appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;