import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../Context.jsx";
import ReactDOM from "react-dom";

const Modal = ({ content, onClose }) =>
    ReactDOM.createPortal(
      <div
        role="dialog"
        aria-labelledby="modal-title"
        aria-modal="true"
        className="fixed top-0 left-0 w-full h-full bg-blue-950 bg-opacity-50 flex items-center justify-center"
      >
        <div className="bg-white p-8 rounded-lg">
          <h2 id="modal-title" className="text-xl font-bold mb-4">
            Confirmación de Cita
          </h2>
          <p>{content}</p>
          <button
            onClick={onClose}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>,
      document.body
    );

const AppointmentForm = ({ doctors }) => {
    const {appointments, setAppointments} = useContext(AppContext);
    const [formData, setFormData] = useState({ patientName: "", doctorId: "", date: "", time: "", });
    const [modalContent, setModalContent] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const selectedDoctorName = doctors.find((doc) => doc.id === parseInt(formData.doctorId))?.name;
        if (!selectedDoctorName || !formData.patientName || !formData.date || !formData.time) {
            alert("Please fill out all fields.");
            return;
        }

        const newAppointment = { id: appointments.length + 1, ...formData, doctor: selectedDoctorName };
        setAppointments([...appointments, newAppointment]);
        setModalContent(`Appointment Scheduled with ${selectedDoctorName} `);
        setFormData({ patientName: "", doctorId: "", date: "", time: "" });
    };

    return (
        <React.Fragment>
            <div className="bg-blue-100 text-white py-12 px-6">
                <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">Schedule an Appointment</h2>
                <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto bg-white text-blue-950 p-8 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label className="block text-blue-900 font-bold p-2 mb-4">Full Name</label>
                        <input
                            type="text"
                            id="patientName"
                            name="patientName"
                            value={formData.patientName}
                            onChange={handleChange}
                            placeholder="Enter your Name"
                            className="w-full px-4 py-2 bg-blue-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-4 p-2 text-blue-900">Select a doctor</label>
                        <select
                            name="doctorId"
                            value={formData.doctorId}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-blue-200 text-blue-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            <option value="">Select a Doctor</option>
                            {doctors.map((doctor) => (
                                <option key={doctor.id} value={doctor.id}>
                                    {doctor.name} - {doctor.specialty}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block font-bold mb-4 p-2 text-blue-900">Date</label>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-blue-200 border text-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block font-bold mb-4 p-2 text-blue-900">Time</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-blue-200 text-blue-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-300 text-blue-900 py-2 px-4 font-bold rounded-lg hover:bg-blue-400 mb-2"
                    >
                        Submit
                    </button>
                </form>
                {modalContent && <Modal className='text-blue-950' content={modalContent} onClose={() => setModalContent(null)}/>}
                <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Scheduled Appointments</h3>
                    {appointments.length === 0 ? (
                        <p className="text-blue-950">No appointments scheduled yet.</p>
                    ) : (
                        <ul className="grid grid-cols-2 gap-6 list-disc pl-6 text-blue-900">
                            {appointments.map((appointment) => (
                                <li key={appointment.id} className="mb-2">
                                    <strong>{appointment.patientName}</strong> with <em>{appointment.doctor}</em> on{" "}
                                    {appointment.date} at {appointment.time}.
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};
AppointmentForm.propTypes = {
    doctors: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        specialty: PropTypes.string.isRequired,
      })
    ).isRequired,
};

export default AppointmentForm;
