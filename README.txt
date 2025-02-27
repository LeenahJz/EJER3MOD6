[EJERCICIO PRACTICO 2, MODULO 6]

Este ejercicio se llevó a cabo haciendo uso de localStorage y posteriormente se implementó una base de datos con IndexedDB para agendar citas médicas, eliminarlas, y agregar doctores o eliminarlos.

[GITHUB: ]

Primero instalar:

npm install
npm install react-router-dom
npm run build
npx serve dist

Estructura

EJ2MD6
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
│   ├── HOC
│   │   └── withLogger.jsx
│   ├── App.css
│   ├── context
│   │   └── AuthContext.jsx
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

El código cumple con los requisitos solicitados siguientes:

1. Implementación de Almacenamiento Web
- Configura un sistema de almacenamiento para la PWA del hospital usando
LocalStorage o SessionStorage:
- Almacena datos de usuario o información importante para que persista incluso
después de recargar la página.
- Asegúrate de que el almacenamiento se realice de manera eficiente y que los
datos almacenados puedan ser recuperados correctamente.

2. Implementación de IndexedDB 
- Implementa una base de datos con IndexedDB o una biblioteca como PouchDB para
manejar datos más complejos o a mayor escala:
- Almacena en IndexedDB datos relevantes como información de citas, doctores
o pacientes del hospital.
- Asegúrate de que los datos sean almacenados y recuperados correctamente de
IndexedDB.

3. Despliegue y Configuración del Service Worker Personalizado
- Personaliza y despliega un Service Worker que gestione los archivos de caché y
soporte el almacenamiento offline:
- Asegúrate de que el Service Worker funcione adecuadamente para manejar la
caché de los archivos y el almacenamiento en LocalStorage o IndexedDB.
- Verifica que la PWA esté desplegada correctamente y sea accesible offline.

4. Pruebas de Rendimiento con Lighthouse
- Solo se probó online con rendimiento de 99, accesibilidad de 68, buenas prácticas de 100 y SEO 82.
Y un mensaje por el uso de IndexedDB: 
There were issues affecting this run of Lighthouse:
There may be stored data affecting loading performance in this location: IndexedDB. Audit this page in an incognito window to prevent those resources from affecting your scores.

-Créditos-
Imágenes de Google
https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg

https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=360

https://img.freepik.com/foto-gratis/atractivo-profesional-medico-uniforme-pie-brazos-cruzados-contra-fondo-aislado_662251-416.jpg

https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg

https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg

https://t3.ftcdn.net/jpg/01/30/45/54/360_F_130455409_fTuinPO1LXECv5hlk9VBREnL6yowYUo3.jpg


