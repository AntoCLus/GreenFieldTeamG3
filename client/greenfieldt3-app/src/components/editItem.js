import React, { useState, useEffect } from "react";
import axios from "axios";

const EditItem = () => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [formValues, setFormValues] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    fetchItems();
  }, [selectedItems]);

  const fetchItems = () => {
    axios
      .get('http://localhost:8000/item')
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleUpdateSelected = () => {
    const confirmed = window.confirm('Are you sure you want to update the selected items?');
    if (confirmed) {
      selectedItems.forEach((itemId) => {
        axios.put(`http://localhost:8000/item/${itemId}`, formValues)
          .then((res) => {
            console.log(`Item ${itemId} updated successfully`);
            setSelectedItems([]);
          })
          .catch((error) => {
            console.error(`Error updating item ${itemId}:`, error);
          });
      });
    }
  };

  return (
    <div>
      <h2 className='h2-edit'>Edit items</h2>
      <button className='editBtn' onClick={handleUpdateSelected}>Update Selected</button>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item._id)}
                    onChange={() => handleCheckboxChange(item._id)}
                  />
                  {item.name}
                </label>
              </td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Edit Item</h3>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <label>Quantity:</label>
        <input
          type="text"
          name="quantity"
          value={formValues.quantity}
          onChange={handleInputChange}
        />
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={formValues.price}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default EditItem;









// Import Modules
/*import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemForm from "./itemForm"; 

// EditItem Component
const EditItem = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  // onSubmit handler
  const onSubmit = (itemObject) => {
    axios
      .put(`http://localhost:8000/item/update/${props.match.params.id}`, itemObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Item successfully updated");
          props.history.push("/item-list");
        } else {
          return Promise.reject();
        }
      })
      .catch((err) => alert("Something went wrong"));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/item/update/${props.match.params.id}`)
      .then((res) => {
        const { name, quantity, price } = res.data;
        setFormValues({ name, quantity, price });
      })
      .catch((err) => console.log(err));
  }, [props.match.params.id]);

  // Return item form
  return (
    <ItemForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      Update Item
    </ItemForm>
  );
};

// Export EditItem Component
export default EditItem;*/