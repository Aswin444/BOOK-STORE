import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative flex items-center justify-center">
        <div className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        <div className="absolute animate-ping w-16 h-16 border-4 border-blue-300 border-t-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default Spinner;
