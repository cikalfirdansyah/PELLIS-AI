import { useState } from "react"

function Card({title, description, img,detail,type}) {
    const [isOpen, setIsOpen] =useState(false)
  return (
    <>
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-72">
        <div className="">
            <img src={img} alt={title} className="w-full h-44 object-cover" />
        </div>
        <div className="p-3">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        <button onClick={ () => setIsOpen(true)}
        className="mt-4 text-blue-600 text-sm cursor-pointer"> Learn More</button>
        </div>
    </div>
    {isOpen && (
        <div className="fixed inset-0  bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[600px] h-[350px] p-6 rounded-lg shadow-lg relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <div className="text-xl font-semibold mb-3">{title}</div>
            <div className="flex gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="w-[300px] h-[100px] bg-gray-300 rounded-md " > 
                    <img src={img} alt="" className=" w-full h-full object-cover rounded-md" />
                </div>
                <div>
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-blue-700 font-semibold text-lg">{title}</h3>
                    <span  className={`text-xs px-2 py-0.5 rounded-full  
                        ${type === 'Common' ? 'bg-blue-200 text-blue-700' 
                        : 'bg-yellow-200 text-yellow-700'}`}>{type}</span>
                </div>
                <p className="text-sm text-gray-700">{detail}</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 justify-center mt-8">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                    Start Detection
                </button>
                <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:underline">
                    Back
                </button>
            </div>
          </div>
        </div>
    )}
    </>
  )
}

export default Card