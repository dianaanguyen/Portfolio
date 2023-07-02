import React from 'react';
import reactLogo from './assets/react.svg';

function NavBar() {
  return (
    <nav className="bg-gray-800 py-4 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* <img className="h-8 w-8" src={reactLogo} alt="React Logo" /> */}
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
