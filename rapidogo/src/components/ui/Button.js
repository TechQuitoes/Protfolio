import React from "react";

export const Button = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`px-6 py-3 rounded-md font-semibold transition ${className}`}
  >
    {children}
  </button>
);