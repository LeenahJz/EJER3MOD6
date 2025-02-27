import React, { createContext, useState, useEffect } from "react";
import { STORES, getData, addData } from "../db/db"; // Asegúrate de que getData y addData estén importados

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Verificar si hay un usuario en IndexedDB al cargar la aplicación
  useEffect(() => {
    getData(STORES.PACIENTES).then((data) => {
      if (data.length > 0) {
        setUser(data[0]); // Establecer el primer usuario como autenticado (ejemplo)
      }
    });
  }, []);

  // Función para iniciar sesión
  const login = (userData) => {
    setUser(userData);
    addData(STORES.PACIENTES, userData); // Guardar en IndexedDB
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};