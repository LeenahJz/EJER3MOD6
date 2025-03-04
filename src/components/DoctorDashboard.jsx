import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { STORES, getData, addData } from "../db/db";
import CameraAccess from "../features/CameraAccess";
import GeolocationAccess from "../features/GeolocationAccess";
import MedicationInfo from "../features/MedicationInfo";

const PatientDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);

  // Obtener citas al cargar el componente
  useEffect(() => {
    getData(STORES.CITAS).then((data) => setAppointments(data));
  }, []);

  // Agregar una cita de ejemplo
  const handleAddCita = () => {
    const nuevaCita = {
      doctor: "Dr. Joe Doe",
      date: "2023-10-25",
      time: "10:00 AM",
      patient: user?.email, // Asociar la cita al paciente actual
    };

    addData(STORES.CITAS, nuevaCita)
      .then(() => {
        getData(STORES.CITAS).then((data) => setAppointments(data)); // Actualizar la lista de citas
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="text-center w-screen h-auto bg-blue-100 p-8">
      <h1 className="text-center text-4xl font-bold text-blue-900 mb-8">Dashboard del Doctor</h1>
      <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">Bienvenido, {user?.email}</h2>

      {/* Futuras Citas */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Futuras Citas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-blue-900">{appointment.doctor}</h3>
              <p className="text-blue-700">Fecha: {appointment.date}</p>
              <p className="text-blue-700">Hora: {appointment.time}</p>
              <button className="mt-4 bg-blue-300 text-blue-900 py-2 px-4 rounded-lg hover:bg-blue-400">
                Ver Detalles
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Información de Medicamentos */}
      <MedicationInfo />

      {/* Acceso a la Cámara */}
      <CameraAccess />

      {/* Acceso a la Geolocalización */}
      <GeolocationAccess />

      {/* Otras Acciones */}
      <div className="bg-blue-100 w-screen h-auto mb-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Otras Acciones</h2>
        <div className="flex gap-4">
          <button className="bg-blue-300 text-blue-900 py-2 px-4 mb-2 rounded-lg hover:bg-blue-400">
            Ver Historial Médico
          </button>
          <button className="bg-blue-300 text-blue-900 py-2 px-4 mb-2 rounded-lg hover:bg-blue-400">
            Contactar a un Doctor
          </button>
        </div>
      </div>

      {/* Botón de Cerrar Sesión */}
      <button
        onClick={logout}
        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
      >
        Cerrar Sesión
      </button>

      {/* Botón para agregar una cita de ejemplo */}
      <button
        onClick={handleAddCita}
        className="bg-blue-300 text-blue-900 py-2 px-4 rounded-lg hover:bg-blue-400"
      >
        Agregar Cita de Ejemplo
      </button>
    </div>
  );
};

export default PatientDashboard;