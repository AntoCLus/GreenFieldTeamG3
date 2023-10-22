import React, { useState} from "react";
import axios from 'axios';
import ItemForm from "./itemForm";

const AddItem = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleAdd = () => {
        const itemData = {
            name,
            price,
            quantity,
        };
     /*   onAddItem(itemData);
    }*/

        for (let i = 0; i < quantity; i++) {
            axios
              .post('http://localhost:8000/item/create', itemData)
              .then((res) => {
                console.log(`Item ${res.data.newItem.name} created successfully`);
                setName('');
                setPrice('');
                setQuantity('');
              })
              .catch((err) => {
                console.error('Error creating item:', err);
              });              
        }
    }


    return (
        <div className="add-item">
            <h2 className="h2-add"></h2>
            <input
                type="text"
                placeholder="Item Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <button onClick={handleAdd}>Add Item(s)</button>
        </div>
    );
    }
export default AddItem