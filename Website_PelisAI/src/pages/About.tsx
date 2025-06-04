

function About() {
    const teamMembers = [
  {
    id: 1,
    name: "Rifky",
    role: "AI Engineer",
    imageUrl: "/images/rifky.jpg", // Ganti jika ada gambar berbeda
    githubLink: "https://github.com/rizkyhaksono",
  },
  {
    id: 2,
    name: "Cikal",
    role: "AI Engineer", // Sesuaikan peran jika ada
    imageUrl: "/images/cikal.jpg", // Asumsi ada gambar cikal.jpg
    githubLink: "https://github.com/cikal", // Ganti dengan link GitHub Cikal
  },
  {
    id: 3,
    name: "Ghifari",
    role: "AI Engineer", // Sesuaikan peran jika ada
    imageUrl: "/images/ghifari.jpg", // Asumsi ada gambar galih.jpg
    githubLink: "https://github.com/galih", // Ganti dengan link GitHub Galih
  },
  {
    id: 4,
    name: "Yoel",
    role: "WEB", 
    imageUrl: "/images/yoel.jpg",
    githubLink: "https://github.com/yoel", 
  },
];
  return (
    <>
    
    <div className="px-8 container my-20">
        <div className="max-w-screen-xl px-4 mx-auto lg:py-24 lg:px-6 max-[640px]">
            <div className="max-w-screen-md mx-auto text-center mb-8 lg:mb-12">
                <h2 className="mb-4 font-black text-5xl text-primary tracking-tigh  xl:pt-0 lg:pt-0 md:pt-12 sm:pt-12 pt-12">About Us</h2>
                <p className="mb-5 font-base text-gray-500 sm:text-2xl">Were founded in 2025, Team Lakar AI, Indonesia.</p>
                <p className="mb-5 font-base text-gray-500 sm:text-lg">
                    Pelis AI, is dedicated to advancing early detection of skin conditions and making skin checks an accessible part of your health routine. Our mission is simple yet impactful: to inspire, educate, and empower individuals and healthcare professionals in recognizing and addressing skin concerns, for better skin health within our communities.
            </p>
          </div>
        </div>


        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">Team Member </h1>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:justify-items-center justify-items-center gap-8 mt-12">
            {teamMembers.map((member) => (
            <div    key={member.id} 
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow "
                > <div className="flex flex-col items-center py-10">
                    <img
                    src={member.imageUrl} 
                    className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover"
                    alt={member.name} 
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900">
                        {member.name} </h5>
                    <span className="text-sm text-gray-500 ">
                        {member.role}
                    </span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <a
                        href={member.githubLink}
                        target="_blank" // Membuka di tab baru
                        rel="noopener noreferrer" // Praktik keamanan yang baik
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300"
                        > View GitHub
                        </a>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 "
                        > Message 
                        </a>
                    </div>
                </div>
            </div>
        ))}
    </div>
    </div>
    
    </>
  )
}

export default About