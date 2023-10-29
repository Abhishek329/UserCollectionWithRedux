// Backdrop.tsx
import React from "react";

const Backdrop = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
     className={`fixed inset-0 z-40 bg-black backdrop-blur-lg backdrop-filter transition-opacity ${isOpen ? 'opacity-50' : 'opacity-0'} duration-300`}
    ></div>
  );
};

export default Backdrop;
