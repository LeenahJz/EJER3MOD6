import React, { useState } from "react";

const GeolocationAccess = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setError(null);
        },
        (error) => {
          setError("Error al obtener la ubicación: " + error.message);
        }
      );
    } else {
      setError("Geolocalización no es soportada por este navegador.");
    }
  };

  return (
    <div className="p-4 w-screen h-auto bg-blue-100">
      <h2 className="text-2xl text-blue-900 font-bold mb-4">Geolocalización</h2>
      <button
        onClick={getLocation}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4"
      >
        Obtener Ubicación
      </button>
      {location && (
        <div>
          <h3 className="text-xl text-blue-900 font-bold mb-2">Ubicación Actual:</h3>
          <p className="text-l text-blue-900 mb-2">Latitud: {location.latitude}</p>
          <p className="text-l text-blue-900 mb-2">Longitud: {location.longitude}</p>
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default GeolocationAccess;