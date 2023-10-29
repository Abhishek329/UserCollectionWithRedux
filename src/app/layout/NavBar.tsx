import React from "react";


const Navbar = () => {



    return (
        <nav className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <li>                
                <a href="/" className="text-white hover:text-blue-300 transition duration-300">
                  User Collection
                </a>
                </li>            
              {/* <li>
                <a href="/home" className="text-white hover:text-blue-300 transition duration-300">
                  Home
                </a>
              </li> */}
              <li>
                <a href="/users" className="text-white hover:text-blue-300 transition duration-300">
                  Users
                </a>
              </li>              
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;