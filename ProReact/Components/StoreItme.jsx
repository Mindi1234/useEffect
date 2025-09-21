import React, { useState, useEffect } from "react";
import { getProducts } from "../Service/service";
import '../Css/StorageCss.css'; 

const StoreItme = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      setItems(products);
    };
    fetchData();
  }, []);

  return (
    <div className="store-container">
      <h1>products</h1>
      <div className="grid">
        {items.map(item => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} />
            <div className="title">{item.title}</div>
            <div className="price">${item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreItme;
