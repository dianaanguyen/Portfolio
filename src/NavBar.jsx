import React from 'react';

function NavBar() {
  return (
    <nav className="bg-gray-800 py-2 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 bg-black rounded-full">
              <span className="text-white font-bold text-lg">DN</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-2">
              <a href="#" className="text-gray-300 hover:bg-gray-700 px-2 py-1 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 px-2 py-1 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 px-2 py-1 rounded-md text-sm font-medium">
                Projects
              </a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 px-2 py-1 rounded-md text-sm font-medium">
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
