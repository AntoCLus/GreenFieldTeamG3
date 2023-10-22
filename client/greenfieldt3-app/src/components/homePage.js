import "./home.css"
import React from "react"
import { useEffect } from "react";
import { useState } from "react"
import axios from "axios"
import ItemForm from "./itemForm";

const Home = () => {
    const [items, setItems] = useState([]); // Changed items to an array
    
    const [Item, setItem] = useState({ // Changed 'items' to 'Item'
      name: "",
      price: "",
      quantity: "",
    });
    
  
    useEffect(() => {
      axios
        .get("https://localhost:8000/item") //call it from back
        .then((response) => {
          const itemsData = response.data.reduce((acc, item) => {
            if (!acc[item.name]) {
              acc[item.name] = { ...item, quantity: 0 };
            }
            acc[item.name].quantity += 1;
            return acc;
          }, {});
          const itemsArray = Object.values(itemsData);
          setItem(itemsArray);
        })
        .catch((error) => {
          console.error("Error fetching items:", error);
        });
    }, []);
  
    const handleAddItem = () => {
      axios
          .post('https://localhost:8000/create', Item)
          .then((res) => {
              console.log(`Item ${res.data.newItem.name} created successfully`);
              //setItems(prevItems => [...prevItems, res.data.newItem]);
              setItem({ name: '', price: '', quantity: '' });
              console.log(Item);
          })
          .catch((err) => {
              console.error('Error creating item:', err);
          });
  };
  const handleDeleteItem = (itemId) => {
    axios
      .delete(`http://localhost:8000/item/${itemId}`)
      .then((res) => {
        console.log(`Item with ID ${itemId} deleted successfully`);
        setItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
      })
      .catch((err) => {
        console.error(`Error deleting item with ID ${itemId}:`, err);
      });
  };
  
  return (
    <>
      <h2 className="container">
        Your shopping list!! Please add what you have bought today:
      </h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
  
      <ItemForm
  initialValues={{ name: Item.name, price: Item.price, quantity: Item.quantity }}
  onSubmit={handleAddItem}
  items={items}
  onDeleteItem={handleDeleteItem}
>
  Add Item
</ItemForm>
  
      <p>List the items you have bought today</p>
    </>
  );
            }
  export default Home;

  /* <input
          type="text"
          value={Item.name}
          onChange={(e) => setItem({ ...Item, name: e.target.value })}
          placeholder="Description of what you bought"
        />
        <input
          type="number"
          value={Item.price}
          onChange={(e) => setItem({ ...Item, price: e.target.value })}
          placeholder="Price"
        />
        <input
          type="number"
          value={Item.quantity}
          onChange={(e) => setItem({ ...Item, quantity: e.target.value })}
          placeholder="Quantity"
        />
                  <button onClick={handleAddItem}>Add</button>
*/ 