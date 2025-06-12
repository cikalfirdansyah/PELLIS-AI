import { FiUploadCloud } from "react-icons/fi";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
function SkinDetection() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [predictionResult, setPredictionResult] = useState<null | { predicted_class: string; confidence: number }>(null);

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPredictionResult(null);
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

  const handleCapture = async () => {
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

      // Langsung kirim hasil tangkapan ke API
      await uploadToAPI(dataUrl);
    }
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const uploadToAPI = async (imageDataUrl: string) => {
    try {
      const blob = await (await fetch(imageDataUrl)).blob();
      const formData = new FormData();
      formData.append("file", blob, "image.png");

      const response = await axios.post("https://23a5-180-251-181-12.ngrok-free.app/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Prediction result:", response.data);
      setPredictionResult(response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image");
    }
  };
  return (
    <div className="hero2 min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 absolute top-1/5">Detect Skin Condition</h1>
      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-[600px] h-[500px] max-w-xl">
        {image ? (
          <div className="mb-6">
            <img src={image} alt="Preview" className="rounded-lg object-contain max-h-[300px] max-w-full mx-auto mb-4" />
            <div className="flex justify-center gap-2">
              <button onClick={() => setImage(null)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 w-[200px]  px-6 rounded-md">
                Remove Image
              </button>
              <button onClick={() => image && uploadToAPI(image)} className="bg-green-500 hover:bg-green-600 text-white font-semibold  w-[200px] py-2 px-6 rounded-md">
                Submit
              </button>
            </div>
            {predictionResult && (
              <div className="mt-4 text-center text-gray-800">
                <p className="text-lg font-semibold">Prediction Result:</p>
                <p className="mt-1">
                  Class: <span className="font-bold">{predictionResult.predicted_class}</span>
                </p>
                <p>
                  Confidence: <span className="font-bold">{(predictionResult.confidence * 100).toFixed(2)}%</span>
                </p>
              </div>
            )}
          </div>
        ) : showCamera ? (
          <div className="mb-6">
            <video ref={videoRef} autoPlay className="rounded-lg w-full max-h-[400px] mb-4" />
            <button onClick={handleCapture} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md">
              Capture
            </button>
          </div>
        ) : (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 h-full flex flex-col items-center justify-center">
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
