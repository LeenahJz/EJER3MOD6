import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./Context.jsx";
import './index.css';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch((error) => {
        console.log('ServiceWorker registration failed: ', error);
        
      });registration.addEventListener('updatefound', () => {
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

  });
}