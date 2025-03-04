# [EJERCICIO PRACTICO 2, MODULO 6]

Este ejercicio se llevó a cabo haciendo uso de una API externa y el acceso a periféricos que se enseñaba en la clase de miércoles 26 de febrero.

## [GITHUB: https://github.com/LeenahJz/EJER3MOD6]

requerimientos

npm install
npm install react-router-dom
npm run build
npx serve dist

## Estructura

```js
EJ3MD6
├── dist
│   └── assets
│   └── service-worker.js
│   └── manifest.json
├── node_Modules
├── public
│   ├── images
│   │   └── doctor-portada.jpg
│   ├── vite.svg
│   ├── service-worker.js
│   ├── icon-192x192.png
│   ├── icon-512x512.png
│   ├── index.html
│   └── manifest.json
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── AppointmentForm.jsx
│   │   ├── DoctorCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Homepage.jsx
│   │   ├── Navbar.jsx
│   │   ├── DoctorDashboard.jsx
│   │   ├── PatientDashboard.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── Login.jsx
│   │   └── ServiceList.jsx
│   ├── features
│   │   ├── GeolocationAccess.jsx
│   │   ├── MedicationInfo.jsx
│   │   └── CameraAccess.jsx
│   ├── App.css
│   ├── context
│   │   └── AuthContext.jsx
│   ├── HOC
│   │   └── withLogger.jsx
│   ├── db
│   │   └── db.js
│   ├── App.jsx
│   ├── Context.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

El código cumple con los requisitos solicitados siguientes:

1. Creación del Manifiesto y Configuración Inicial

- Crear el archivo de manifiesto de la aplicación que permita su instalación en dispositivos móviles:
- Incluir el nombre, iconos adaptativos en varias resoluciones, tema de color y modo pantalla (fullscreen/standalone).
- Asegurar que la aplicación sea reconocida como PWA y se pueda instalar.

2. Integración de Service Worker para Gestión Avanzada de Caché

- Configurar un Service Worker avanzado:
- Precaching para los recursos principales de la PWA (HTML, CSS, JS).
- Implementar al menos tres estrategias de almacenamiento en caché (por ejemplo, CacheFirst para archivos estáticos, NetworkFirst para datos dinámicos, Stale-While-Revalidate para contenido mixto).
- Implementar la gestión del ciclo de vida del Service Worker, garantizando la
actualización de la caché cuando se publiquen nuevas versiones de la PWA.

3. Acceso a Periféricos del Sistema Operativo 

- Implementar el acceso a al menos uno de los siguientes periféricos del dispositivo:
- Cámara: Permitir la captura de imágenes o escaneo de documentos médicos dentro del sistema del hospital.
- Geolocalización: Integrar una funcionalidad que permita obtener la ubicación
del usuario para realizar un seguimiento de su localización o acceder a servicios
cercanos.

4. Consumo de API Externa para Datos Médicos

- Integra una API externa que provea información relevante al hospital (por ejemplo, basede datos de doctores o medicamentos).
- Usa Axios o Fetch API para consumir la API.
- Mostrar los datos obtenidos de la API en la PWA utilizando componentes de React.
- Implementar manejo de errores y alertas si la API no responde o se produce un
fallo en la conexión.

5. Pruebas de Rendimiento y Optimización con Lighthouse

- Ejecutando Lighthouse online se obtuvieron los siguientes resultados.

![Image](https://github.com/user-attachments/assets/4db0eef1-4882-4792-ab5c-eb0c2f890549)

-Créditos-
Imágenes de Google
https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg

https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=360

https://img.freepik.com/foto-gratis/atractivo-profesional-medico-uniforme-pie-brazos-cruzados-contra-fondo-aislado_662251-416.jpg

https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg

https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg

https://t3.ftcdn.net/jpg/01/30/45/54/360_F_130455409_fTuinPO1LXECv5hlk9VBREnL6yowYUo3.jpg


