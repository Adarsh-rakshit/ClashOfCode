"use Client"
import React from 'react';

const Button = ({ contestUrl }) => {
  // Function to handle button click
  const handleClick = () => {
    if (contestUrl) {
      window.open(contestUrl, '_blank'); // Open the URL in a new tab
    }
  };

  return (
    <>
      <button
        onClick={handleClick} // Attach the click handler
        className="px-4 py-2 uppercase rounded-xl text-lg font-medium text-white/80 bg-transparent cursor-pointer transition ease-in-out duration-200 select-none hover:text-white hover:bg-green-500 hover:border-blue-500 hover:shadow-[0_0_5px_#008cff,0_0_20px_#008cff,0_0_50px_#008cff,0_0_100px_#008cff] focus:outline-none focus:text-white focus:bg-black-500 focus:border-green-500 focus:shadow-[0_0_5px_#ffffff,0_0_10px_#ffffff,0_0_20px_#ffffff]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/>
          <path d="M9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707-1.414 1.414z"/>
        </svg>
      </button>
    </>
  );
};

export default Button;
