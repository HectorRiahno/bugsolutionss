import { useState } from "react";

export default function FilterPanel({ onFilter }) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilter = (order) => {
    onFilter({ order, minPrice, maxPrice });
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Filtrar Productos</h3>
      <div className="flex flex-col gap-2">
        <button
          className="bg-blue-500 text-white rounded-lg px-4 py-2"
          onClick={() => handleFilter("asc")}
        >
          Más barato a más caro
        </button>
        <button
          className="bg-blue-500 text-white rounded-lg px-4 py-2"
          onClick={() => handleFilter("desc")}
        >
          Más caro a más barato
        </button>
        <div className="flex gap-2 mt-2">
          <input
            type="number"
            placeholder="Precio mínimo"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="border rounded-lg p-2 w-full"
          />
          <input
            type="number"
            placeholder="Precio máximo"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="border rounded-lg p-2 w-full"
          />
        </div>
        <button
          className="bg-green-500 text-white rounded-lg px-4 py-2 mt-2"
          onClick={() => handleFilter("range")}
        >
          Filtrar por rango
        </button>
      </div>
    </div>
  );
}
