import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCartContext } from '../Context';

const MyOrder = () => {
  const { id } = useParams();
  const { getOrderDetails } = useContext(ShoppingCartContext);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const orderDetails = getOrderDetails(parseInt(id));
    setOrder(orderDetails);
  }, [id, getOrderDetails]);

  if (!order) {
    return <div className="container mx-auto mt-20 p-6">Cargando...</div>;
  }

  return (
    <div className="container mx-auto mt-20 p-6">
      <h1 className="text-2xl font-bold mb-6">Detalles de la orden - #{order.id}</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
        <div className="p-4">
          <p><strong>Date:</strong> {order.date}</p>
          <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-4">Productos</h2>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Producto</th>
              <th className="py-3 px-4 text-left">Precio</th>
            </tr>
          </thead>
          <tbody>
            {order.products.map(product => (
              <tr key={product.id} className="border-t">
                <td className="py-3 px-4">{product.title}</td>
                <td className="py-3 px-4">${product.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/my-orders" className="mt-6 inline-block text-blue-500 hover:text-blue-700">
        Volver a mis órdenes
      </Link>
    </div>
  );
};

export default MyOrder;