import React, { createContext, useState, useEffect } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState({
    id: 1,
    name: 'Andrés Quiñones',
    email: 'andres@ejemplo.com',
    address: 'Calle 51 #89 c 15',
  });

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data));

    const mockOrders = [
      { id: 1, date: '2023-09-15', total: 150.99, products: [1, 2, 3] },
      { id: 2, date: '2023-09-20', total: 89.99, products: [4, 5] },
      { id: 3, date: '2023-09-25', total: 200.50, products: [6, 7, 8, 9] },
    ];
    setOrders(mockOrders);
  }, []);

  const getOrderDetails = (orderId) => {
    const order = orders.find(order => order.id === orderId);
    if (order) {
      const orderWithProducts = {
        ...order,
        products: order.products.map(productId => 
          items.find(item => item.id === productId)
        ).filter(Boolean)
      };
      return orderWithProducts;
    }
    return null;
  };

  return (
    <ShoppingCartContext.Provider value={{ items, orders, user, setUser, getOrderDetails }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};