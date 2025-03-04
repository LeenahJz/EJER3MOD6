import React, { useRef, useState } from "react";

const CameraAccess = () => {
  const videoRef = useRef(null);
  const [image, setImage] = useState(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error al acceder a la cámara:", error);
    }
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageUrl = canvas.toDataURL("image/png");
    setImage(imageUrl);
  };

  return (
    <div className="p-4 w-screen h-auto bg-blue-100">
      <h2 className="text-2xl text-blue-900 font-bold mb-4">Permitir acceso a la Cámara</h2>
      <button
        onClick={startCamera}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg mb-4"
      >
        Iniciar Cámara
      </button>
      <video ref={videoRef} autoPlay className="w-full justify-center max-w-md mb-4"></video>
      <button
        onClick={captureImage}
        className="bg-blue-900 text-white justify-center py-2 px-4 rounded-lg mb-4"
      >
        Capturar Imagen
      </button>
      {image && (
        <div>
          <h3 className="text-xl font-bold mb-2">Imagen Capturada:</h3>
          <img src={image} alt="Captured" className="w-full max-w-md" />
        </div>
      )}
    </div>
  );
};

export default CameraAccess;