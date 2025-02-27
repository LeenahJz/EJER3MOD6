import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { STORES, getData, addData, deleteData } from "../db/db";

const AdminDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [showAddDoctorModal, setShowAddDoctorModal] = useState(false);
  const [showDeleteAppointmentModal, setShowDeleteAppointmentModal] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  //Obtener citas y médicos al cargar el componente
  useEffect(() => {
    getData(STORES.CITAS).then((data) => setAppointments(data));
    getData(STORES.DOCTORES).then((data) => setDoctors(data));
  }, []);

  //Eliminar una cita
  const handleDeleteCita = (id) => {
    deleteData(STORES.CITAS, id)
      .then(() => {
        getData(STORES.CITAS).then((data) => setAppointments(data)); // Actualizar la lista de citas
      })
      .catch((error) => console.error(error));
  };

  //Agregar un médico
  const handleAddDoctor = (doctor) => {
    addData(STORES.DOCTORES, doctor)
      .then(() => {
        getData(STORES.DOCTORES).then((data) => setDoctors(data)); // Actualizar la lista de médicos
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-screen h-screen justify-center bg-blue-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Dashboard del Admin</h1>
      <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">Bienvenido, {user?.email}</h2>

      {/* Gestionar Citas */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Gestionar Citas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-blue-900">{appointment.patient}</h3>
              <p className="text-blue-700">Doctor: {appointment.doctor}</p>
              <p className="text-blue-700">Fecha: {appointment.date}</p>
              <p className="text-blue-700">Hora: {appointment.time}</p>
              <button
                onClick={() => handleDeleteCita(appointment.id)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
              >
                Eliminar Cita
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Gestionar Médicos */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Gestionar Médicos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-blue-900">{doctor.name}</h3>
              <p className="text-blue-700">Especialidad: {doctor.specialty}</p>
              <button className="mt-4 bg-blue-300 text-blue-900 py-2 px-4 rounded-lg hover:bg-blue-400">
                Editar
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowAddDoctorModal(true)}
          className="mt-4 bg-blue-300 text-blue-900 py-2 px-4 rounded-lg hover:bg-blue-400"
        >
          Agregar Médico
        </button>
      </div>

      {/* Modales */}
      {showAddDoctorModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Agregar Médico</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.name.value;
                const specialty = e.target.specialty.value;
                handleAddDoctor({ name, specialty });
                setShowAddDoctorModal(false);
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Nombre del médico"
                className="w-full px-4 py-2 border rounded-lg mb-4"
                required
              />
              <input
                type="text"
                name="specialty"
                placeholder="Especialidad"
                className="w-full px-4 py-2 border rounded-lg mb-4"
                required
              />
              <button
                type="button"
                onClick={() => setShowAddDoctorModal(false)}
                className="bg-blue-300 text-blue-900 py-2 px-4 rounded-lg hover:bg-blue-400"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 ml-4"
              >
                Guardar
              </button>
            </form>
          </div>
        </div>
      )}

      {showDeleteAppointmentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-4">¿Eliminar cita?</h3>
            <p className="text-blue-700 mb-4">¿Estás seguro de que deseas eliminar esta cita?</p>
            <button
              onClick={() => setShowDeleteAppointmentModal(false)}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Eliminar
            </button>
            <button
              onClick={() => setShowDeleteAppointmentModal(false)}
              className="bg-blue-300 text-blue-900 py-2 px-4 rounded-lg hover:bg-blue-400 ml-4"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Botón de Cerrar Sesión */}
      <button
        onClick={logout}
        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default AdminDashboard;