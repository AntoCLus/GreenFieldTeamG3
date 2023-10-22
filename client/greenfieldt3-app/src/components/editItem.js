// Import Modules
import React, { useState, useEffect } from "react";
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
      .put(
        "http://localhost:8000/items/update-item/" +
          props.match.params.id,
        itemObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Item successfully updated");
          props.history.push("/item-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  // Load data from server and reinitialize item form
  useEffect(() => {
    axios
      .get("http://localhost:8000/items/update-item/" + props.match.params.id)
      .then((res) => {
        const { name, quantity, price } = res.data;
        setFormValues({ name, quantity, price });
      })
      .catch((err) => console.log(err));
  }, []);

  // Return item form
  return (
    <ItemForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      Update Item
    </ItemForm>
  );
};

// Export EditItem Component
export default EditItem;