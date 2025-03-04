import React from "react";
import PropTypes from "prop-types";
import withLogger from "../HOC/withLogger";

const ServiceList = ({ services }) => {

    return (
        <React.Fragment>
            <div className="bg-blue-950 text-white py-12 px-6">
                <h2 className="text-4xl font-bold text-center text-blue-300 mb-10">Our Services</h2>
                <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 p-4 py-2 mb-4">
                    <ul className="grid md:grid-cols-2 mb-4 gap-6 list-disc list-inside">
                        {services.map((service) => (
                            <li
                                key={service.id} 
                                role="listitem"
                                className="grid md:grid-cols-1 bg-white text-blue-900 font-bold p-6 mb-2 rounded-lg shadow-lg hover:scale-105 transition duration-300"
                            >
                                {service.name}
                                {service.prev}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};

ServiceList.propTypes = {
    services: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        prev: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default withLogger(ServiceList);
