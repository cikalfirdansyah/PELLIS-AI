import { FiUploadCloud } from "react-icons/fi";
import React, { useEffect, useRef, useState } from "react";

function SkinDetection() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };
  const stopCamera = () => {
    stream?.getTracks().forEach((track) => track.stop());
    setStream(null);
  };
  const handleTakePhoto = async () => {
    setImage(null); // reset image preview
    setShowCamera(true);
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setStream(mediaStream);
    } catch (error) {
      console.error("Error accessing camera:", error);
      alert("Could not access camera");
    }
  };

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context?.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/png");
      setImage(dataUrl);
      stopCamera();
      setShowCamera(false);
    }

    // Cleanup on unmount
    useEffect(() => {
      return () => {
        stopCamera();
      };
    }, []);
  };
  return (
    <div className="hero2 min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 absolute top-1/4 -translate-y-1/2">Detect Skin Condition</h1>
      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-[600px] max-w-lg">
        {image ? (
          <div className="mb-6">
            <img src={image} alt="Preview" className="rounded-lg max-h-[400px] mx-auto mb-4" />
            <button onClick={() => setImage(null)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md">
              Remove Image
            </button>
          </div>
        ) : showCamera ? (
          <div className="mb-6">
            <video ref={videoRef} autoPlay className="rounded-lg w-full max-h-[400px] mb-4" />
            <button onClick={handleCapture} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md">
              Capture
            </button>
          </div>
        ) : (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 mb-6 flex flex-col items-center justify-center">
            <FiUploadCloud className="text-gray-400 text-6xl mb-4" />
            <p className="text-gray-600 mb-4">Drag and drop your image here or</p>
            <div className="flex space-x-4">
              <button onClick={handleUpload} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md">
                Upload
              </button>
              <button onClick={handleTakePhoto} className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-md">
                Take Photo
              </button>
            </div>
          </div>
        )}
        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
}

export default SkinDetection;
