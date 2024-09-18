import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="border p-4 rounded-lg">
      <img
        src={data.images[0]}
        alt={data.title}
        className="w-full h-48 object-cover mb-2"
      />
      <h2 className="text-lg font-semibold">{data.title}</h2>
      <p className="text-gray-600">${data.price}</p>
      <p className="text-sm text-gray-500">{data.category.name}</p>
    </div>
  );
};

export default Card;