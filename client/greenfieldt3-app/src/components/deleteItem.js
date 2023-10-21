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


    const handleChechboxChange = (itemId) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter((id) => id !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }
    };

    const handleDeleteSelected = () => {
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


    return (
        <div>
            <button className='deleteBtn' onClick={handleDeleteSelected}>Delete Selected</button>
            
        </div>
    )
}


export default DeleteItem;