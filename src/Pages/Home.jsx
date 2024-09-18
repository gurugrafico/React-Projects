import React, { useContext } from "react";
import { ShoppingCartContext } from "../Context";

const Home = ({ categories }) => {
  const { items } = useContext(ShoppingCartContext);

  // Filtrar los productos según las categorías proporcionadas
  const filteredItems =
    categories && categories.length > 0
      ? items.filter((item) => categories.includes(item.category.toLowerCase()))
      : items;

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4 px-6">
        {categories && categories.length > 0
          ? categories.includes("men's clothing") &&
            categories.includes("women's clothing")
            ? "Ropa"
            : categories
                .map((category) =>
                  category === "men's clothing" ||
                  category === "women's clothing"
                    ? "Ropa"
                    : category.charAt(0).toUpperCase() + category.slice(1)
                )
                .join(", ")
          : "Todos los productos"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {filteredItems.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{product.title}</h3>
              <p className="text-gray-700 text-base mb-2">${product.price}</p>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
