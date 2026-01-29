import React from 'react'
import { Card } from './ui/Card';

const ServiceCard = ({ icon, title, desc }) => {
  return (
    <Card>
      <div className="flex justify-center text-blue-700 mb-4">
        {icon}
      </div>
      <h4 className="font-bold mb-2 text-center">{title}</h4>
      <p className="text-sm text-gray-600 text-center">{desc}</p>
    </Card>
  );
}

export default ServiceCard