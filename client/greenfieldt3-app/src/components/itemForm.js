import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const ItemForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    quantity: Yup.number()
      .positive("Invalid quantity")
      .integer("Invalid quantity")
      .required("Required"),
    price: Yup.number()
      .positive("Invalid price")
      .required("Required"),
  });

  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="quantity" type="number" className="form-control" />
            <ErrorMessage
              name="quantity"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="price" type="number" className="form-control" />
            <ErrorMessage
              name="price"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button variant="danger" size="lg" block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
      {props.items.length > 0 && (
        <ul>
          {props.items.map((item) => (
            <li key={item._id}>
              {item.name} - {item.quantity} - {item.price}
              <button onClick={() => props.onDeleteItem(item._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemForm;