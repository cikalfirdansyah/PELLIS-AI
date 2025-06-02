import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="\PelisAi_white.svg" className="mb-4" alt="" />
            <p className="text-sm text-gray-400">AI-powered skin disease detection for fast, reliable diagnostics. Empowering health through technology.</p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/detect" className="hover:underline">
                  Detect
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-2">Contact</h2>
            <p className="text-sm mb-2">
              📧{" "}
              <a href="mailto:contact@dermai.com" className="hover:underline">
                contact@dermai.com
              </a>
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="Twitter" className="hover:text-white">
                🐦
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                💼
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-white">
                💻
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">&copy; {new Date().getFullYear()} PelisAI. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default Footer;
