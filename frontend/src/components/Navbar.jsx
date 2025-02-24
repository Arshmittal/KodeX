import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="nav flex px-[100px] items-center justify-between h-[90px] bg-[#0f0e0e]">
        {/* Gradient Text for "KodeX" */}
        <Link to="/" className="w-[170px] h-[50px] flex items-center justify-center text-2xl font-bold 
          bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          KodeX
        </Link>

        <div className="links flex items-center gap-[15px]">
          <Link to="/" className="transition-all hover:text-blue-500 text-white">Home</Link>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("isLoggedIn");
              window.location.reload();
            }}
            className="btnNormal bg-red-500 transition-all hover:bg-red-600 px-[20px] text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
