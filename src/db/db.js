const DB_NAME = "hospital_db";
const DB_VERSION = 1;
const STORES = {
  CITAS: "citas",
  DOCTORES: "doctores",
  PACIENTES: "pacientes",
};

const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      //Crear almacenes de objetos si no existen
      if (!db.objectStoreNames.contains(STORES.CITAS)) {
        db.createObjectStore(STORES.CITAS, { keyPath: "id", autoIncrement: true });
      }
      if (!db.objectStoreNames.contains(STORES.DOCTORES)) {
        db.createObjectStore(STORES.DOCTORES, { keyPath: "id", autoIncrement: true });
      }
      if (!db.objectStoreNames.contains(STORES.PACIENTES)) {
        db.createObjectStore(STORES.PACIENTES, { keyPath: "id", autoIncrement: true });
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject(`Error al abrir la base de datos: ${event.target.error}`);
    };
  });
};

//Función para obtener datos de un almacén
const getData = (storeName) => {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([storeName], "readonly");
      const store = transaction.objectStore(storeName);
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  });
};

//Función para agregar datos a un almacén
const addData = (storeName, data) => {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([storeName], "readwrite");
      const store = transaction.objectStore(storeName);
      const request = store.add(data);

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  });
};

//función para eliminar datos de un almacén
const deleteData = (storeName, id) => {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([storeName], "readwrite");
      const store = transaction.objectStore(storeName);
      const request = store.delete(id);

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  });
};

//Función para actualizar datos en un almacén
const updateData = (storeName, id, newData) => {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([storeName], "readwrite");
      const store = transaction.objectStore(storeName);
      const request = store.put({ ...newData, id });

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  });
};

//Exportar todas las funciones y constantes necesarias
export { openDB, STORES, getData, addData, deleteData, updateData };