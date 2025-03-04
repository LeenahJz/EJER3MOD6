import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../Context";
import withLogger from "../HOC/withLogger";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const DoctorCard = ({ doctors }) => {
  const { user } = useContext(AppContext);
/*   const focusRef = useRef();

  const handleFocus = () => {
    focusRef.current.scrollIntoView({ behavior: "smooth" });
  }; */

  return (
    <React.Fragment>
      <div className=" m-auto px-6 py-12 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-500 py-2">Our Specialists</h2>
        {/* <div className="text-center my-4">
          <button
            onClick={handleFocus}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Focus on Top Doctor
          </button> 
        </div> */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {doctors.map((doctor) => (
            <div key={doctor.id}
              className="flex flex-col items-center bg-blue-100 text-blue-500 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300">
              <img src={doctor.image} alt={`foto de ${doctor.name}, especialista en ${doctor.specialty}`} className="object-cover w-64 h-64 rounded-full mb-4" />
              <h3 className="text-3xl font-bold text-blue-500 mt-4">{doctor.name}</h3>
              <p className="text-xl text-blue-400 mt-2">Specialty: {doctor.specialty}</p>
              <p className="text-xl text-blue-400">Experience: {doctor.experience}</p>
              <div className='flex justify-between p-6 gap-8 sm:w-[300px-pt-4 px-2 text-2xl'>
                <MdOutlineEmail aria-label="Enviar correo electrónico" />
                <FaXTwitter aria-label="Seguir en Twitter"/>
                <FaInstagram aria-label="Seguir en Instagram"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

DoctorCard.propTypes = {
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      specialty: PropTypes.string.isRequired,
      experience: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default withLogger(DoctorCard);
