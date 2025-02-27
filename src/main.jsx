import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./Context.jsx";
import { AuthProvider } from "./context/AuthContext"; // Importa el AuthProvider
import './index.css';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider> {/* Envuelve la aplicación con AuthProvider */}
      <AppProvider>
        <App />
      </AppProvider>
    </AuthProvider>
  </React.StrictMode>
);

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('✅ Service Worker registrado con éxito. Scope:', registration.scope);

        // Verifica si el Service Worker está activo
        if (registration.active) {
          console.log('🚀 Service Worker está activo y listo para usar.');
        } else {
          console.log('⏳ Service Worker está en proceso de activación...');
        }

        // Escucha cambios en el estado del Service Worker
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          console.log('🔄 Nuevo Service Worker encontrado:', newWorker);

          newWorker.addEventListener('statechange', () => {
            switch (newWorker.state) {
              case 'installed':
                console.log('📦 Nuevo Service Worker instalado.');
                break;
              case 'activated':
                console.log('🎉 Nuevo Service Worker activado.');
                break;
              case 'redundant':
                console.log('❌ Service Worker redundante (reemplazado).');
                break;
              default:
                console.log(`ℹ️ Estado del Service Worker: ${newWorker.state}`);
            }
          });
        });
      })
      .catch((error) => {
        console.error('❌ Error al registrar el Service Worker:', error);
      });
  });
}