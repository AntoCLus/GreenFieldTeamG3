import "./home.css"
import React from "react"
import { useEffect } from "react";
import { useState } from "react"
import axios from "axios"

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios 
      .get('http://localhost:8000/item')
      .then((response) => {
        const itemsData = response.data.reduce((acc, item) => {
          if (!acc[item.name]) {
            acc[item.name] = { ...item, quantity: 0 };
          }
          acc[item.name].quantity += 1;
          return acc;
        }, {});
        const itemsArray = Object.values(itemsData);
        setItems(itemsArray);
      })
      .catch((error) => {
        console.error('Error fetching parts:', error);
      });
  }, []);

  return (
    <div>
      <h2 className='container'>Your shopping list!! Please add what you have bought today:</h2>
      <table>
        <thead>
          <tr>

          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
  

export default Home;