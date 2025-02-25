[EJERCICIO PRACTICO 1, MODULO 6]

Este ejercicio se llevó a cabo haciendo uso de Manifest.json, se creó un ServiceWorker.js y la implementación de un cache first.

[GITHUB: ]

Estructura

ejercicioPractico1
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
│   │   └── ServiceList.jsx
│   ├── HOC
│   │   └── withLogger.jsx
│   ├── App.css
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

Es código cumple con los requisitos solicitados siguientes:

1. Creación del Manifiesto
- Se crea un archivo de manifiesto para la aplicación web del hospital que incluya los
siguientes elementos:
- Nombre de la aplicación.
- Iconos en varias resoluciones para diferentes dispositivos.
- Color de fondo y color del tema.
- Modo de pantalla (fullscreen o standalone).

2. Registro de un Service Worker Básico 
- Registra un Service Worker para la aplicación del hospital, asegurando que:
- Esté registrado y activado correctamente.
- Se realice precaching de los archivos principales (HTML, CSS, JavaScript).
- La aplicación pueda funcionar en modo offline gracias al Service Worker.

3. Implementación de Estrategias de Almacenamiento en Caché 
- Implementa al menos una estrategia de almacenamiento en caché adecuada para la
aplicación:
- Cache-first: Sirve primero desde la caché y, si no está disponible, recurre a la
red.

4. Pruebas de Funcionamiento Offline y Validación con Lighthouse
- Se probó la aplicación offline y se mostraba el Homepage con las características principales.



-Créditos-
Imágenes de Google
https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg

https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=360

https://img.freepik.com/foto-gratis/atractivo-profesional-medico-uniforme-pie-brazos-cruzados-contra-fondo-aislado_662251-416.jpg

https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg

https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg

https://t3.ftcdn.net/jpg/01/30/45/54/360_F_130455409_fTuinPO1LXECv5hlk9VBREnL6yowYUo3.jpg


