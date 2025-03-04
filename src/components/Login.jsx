import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import  {useNavigate} from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient"); // "doctor" o "patient"
  const [error, setError] = useState("");

  const users = [
    { email: "patient@example.com", password: "patient123", role: "patient" },
    { email: "doctor@example.com", password: "doctor123", role: "doctor" },
    { email: "admin@example.com", password: "admin123", role: "admin" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    //buscar el usuario en la lista de usuarios de ejemplo
    const user = users.find(
      (u) => u.email === email && u.password === password && u.role === role
    );

    if (user) {
      //Si el usuario es válido, guardar en el contexto y redirigir
      login(user);
      setError(""); // Limpiar el mensaje de error

      // edirigir según el rol
      if (user.role === "patient") {
        navigate("/patient"); //Redirigir al dashboard del paciente
      } else if (user.role === "doctor") {
        navigate("/doctor"); //Redirigir al dashboard del doctor
      } else if (user.role === "admin") {
        navigate("/admin"); //Redirigir al dashboard del admin (si lo tienes)
      }
    } else {
      //Si el usuario no es válido, mostrar un mensaje de error
      setError("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Log In</h2>
        <div className="mb-4">
          <label className="block font-bold text-blue-900">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-blue-100 text-blue-900 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold text-blue-900">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-blue-100 text-blue-900 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold text-blue-900">Rol</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full bg-blue-100 text-blue-900 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-200 text-blue-950 py-2 px-4 rounded-lg hover:text-white hover:bg-blue-900"
        >
          Log In
        </button>
      </form>
      {/* <div className="flex justify-center w-screen h-screen bg-blue-100">
        <h2 className="text-xl font-semibold text-blue-900 ">Cuentas para entrar:</h2>
        <div className="flex text-center mb-4">
          <p className="block font-bold text-blue-900">patient@example.com psw: patient123 rol: patient</p>
          <p className="block font-bold text-blue-900">doctor@example.com psw: doctor123 rol: doctor</p>
          <p className="block font-bold text-blue-900">admin@example.com psw: admin123 rol: admin</p>
        </div>
      </div> */}
      {/* Sección para mostrar las cuentas existentes */}
      <div className="ml-8 bg-blue-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Cuentas para Pruebas (Disculpad la tardanza de esta sección)</h2>
        <div className="space-y-4">
          {users.map((user, index) => (
            <div key={index} className="text-blue-900">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Contraseña:</strong> {user.password}</p>
              <p><strong>Rol:</strong> {user.role}</p>
              <hr className="my-2 border-blue-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Login;