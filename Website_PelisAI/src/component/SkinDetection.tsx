import { FiUploadCloud } from 'react-icons/fi'

function SkinDetection() {
    const handleUpload= () =>{
        alert('Upload')
    }
    const handleTakePhoto= () =>{
        alert('Take Photo')
    }
  return (
     <div className="hero2 min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 absolute top-1/4 -translate-y-1/2">
        Detect Skin Condition
      </h1>
      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-[600px] max-w-lg">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 mb-6 flex flex-col items-center justify-center">
          <FiUploadCloud className="text-gray-400 text-6xl mb-4" /> {/* Ikon upload */}
          <p className="text-gray-600 mb-4">Drag and drop your image here or</p>
          <div className="flex space-x-4">
            <button onClick={handleUpload}  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md">
              Upload
            </button>
            <button onClick={handleTakePhoto} className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-md">
              Take Photo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkinDetection