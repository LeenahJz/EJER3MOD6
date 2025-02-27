import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import DoctorCard from "./components/DoctorCard";
import ServiceList from "./components/ServiceList";
import AppointmentForm from "./components/AppointmentForm";
import Footer from "./components/Footer";
import Login from "./components/Login";
import DoctorDashboard from "./components/DoctorDashboard";
import PatientDashboard from "./components/PatientDashboard";
import AdminDashboard from "./components/AdminDashboard";
import { AuthContext } from "./context/AuthContext";

const doctors = [
  { id: 1, name: "Dr. Joe Doe", specialty: "Cardiologist", experience: "12 years", image: "https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg" },
  { id: 2, name: "Dr. Jane Doe", specialty: "Dermatologist", experience: "8 years", image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=360" },
  { id: 3, name: "Dr. Sammy Smith", specialty: "Oncology", experience: "8 years", image: "https://img.freepik.com/foto-gratis/atractivo-profesional-medico-uniforme-pie-brazos-cruzados-contra-fondo-aislado_662251-416.jpg" },
  { id: 4, name: "Dr. Judy Doe", specialty: "Pediatrics", experience: "10 years", image: "https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg" },
  { id: 5, name: "Dr. Michael Johnson", specialty: "Gynecology", experience: "15 years", image: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg" },
  { id: 6, name: "Dr. Any Smith", specialty: "Gastroenterology", experience: "16 years", image: "https://t3.ftcdn.net/jpg/01/30/45/54/360_F_130455409_fTuinPO1LXECv5hlk9VBREnL6yowYUo3.jpg" }
];

const services = [
  { id: 1, name: "Cardiology:", prev: "\nComprehensive heart care by our experienced cardiologists." },
  { id: 2, name: "Dermatology", prev: "\nSkin care and treatments for common skin conditions." },
  { id: 3, name: "Pediatrics:", prev: "\nExperienced pediatricians treat children with complications and their families." },
  { id: 4, name: "Oncology:", prev: "\nOur oncologists specialize in cancer care." },
  { id: 5, name: "Gynecology:", prev: "\nOur gynecologists provide comprehensive gynaecological care." },
  { id: 6, name: "Gastroenterology:", prev: "\nOur gastroenterologists specialize in gastric and duodenal diseases." }
];

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Homepage />
            <DoctorCard doctors={doctors} />
            <ServiceList services={services} />
            <AppointmentForm doctors={doctors} />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route
          path="/doctor"
          element={
            user?.role === "doctor" ? (
              <DoctorDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/patient"
          element={
            user?.role === "patient" ? (
              <PatientDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

      <Route
        path="/admin"
        element={
          user?.role === "admin"? (
            <AdminDashboard />
          ) : (
            <Navigate to="/login" />
          )
        }
      /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;