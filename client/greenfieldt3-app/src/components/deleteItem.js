
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteItem = () => {
    const [items, setItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    
    useEffect(() => {
        fetchItems();
    }, [selectedItems]);

    const fetchItems = () => {
        axios.get('http://localhost:8000/item')
        .then((response) => {
            setItems(response.data);
        })
        .catch((error) => {
            console.error('Error fetching items:', error);
        });
    };


    const handleCheckboxChange = (itemId) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter((id) => id !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }
    };

    const handleDeleteSelected = () => {
      const confirmed = window.confirm('Are you sure you want to delete the selected items?');
        if (confirmed){
        selectedItems.forEach((itemId) => {
            axios.delete(`http://localhost:8000/item/${itemId}`)
            .then((res) => {
                console.log(`Item ${itemId} deleted successfully`);
                setSelectedItems([]);
            })
            .catch((error) => {
                console.error(`Error deleting item ${itemId}:`, error);
            });
        });
    };
  }

    return (
            <div>
      <h2 className='h2-delete'>Delete items</h2>
      <button className='deleteBtn' onClick={handleDeleteSelected}>Delete Selected</button>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((items) => (
            <tr key={items._id}>
              <td>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(items._id)}
                    onChange={() => handleCheckboxChange(items._id)}
                  />
                  {items.name}
                </label>
              </td>
              <td>{items.description}</td>
              <td>{items.price}</td>
              <td>{items.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
    
}


export default DeleteItem; 