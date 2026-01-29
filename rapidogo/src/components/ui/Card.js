
import React from "react";

export const Card = ({ children }) => (
  <div className="bg-white rounded-xl shadow-md p-6">
    {children}
  </div>
);



export function CardContent({ children, className = "" }) {
  return <div className={`mt-2 ${className}`}>{children}</div>;
}
