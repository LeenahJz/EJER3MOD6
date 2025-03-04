import React, { useState, useEffect } from "react";
import axios from "axios"; // Si usas Fetch, no necesitas esta línea

const MedicationInfo = () => {
  const [medications, setMedications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener datos de la API
  const fetchMedications = async () => {
    try {
      const response = await fetch("https://api.fda.gov/drug/label.json?limit=5");
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
      const data = await response.json();
      setMedications(data.results);
      setError(null);
    } catch (error) {
      setError("Error al cargar los datos de medicamentos. Inténtalo de nuevo más tarde.");
      console.error("Error fetching medications:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMedications();
  }, []);

  return (
    <div className="p-4 w-screen h-auto bg-blue-100">
      <h2 className="text-2xl text-blue-900 font-bold mb-4">Información de Medicamentos</h2>
      {loading && <p className="text-blue-900">Cargando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {medications.map((medication, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-blue-900">
                {medication.openfda?.brand_name?.[0] || "Nombre no disponible"}
              </h3>
              <p className="text-blue-700">
                <strong>Fabricante:</strong>{" "}
                {medication.openfda?.manufacturer_name?.[0] || "No disponible"}
              </p>
              <p className="text-blue-700">
                <strong>Uso:</strong>{" "}
                {medication.indications_and_usage?.[0] || "No disponible"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MedicationInfo;