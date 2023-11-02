<h1 align="center">🌟 **Shop & Shine API DOCUMENTATION** 🌟</h1>

**This documentation provides details on the available API endpoints for the Shop & Shine application.**

## Base URL

[http://localhost:8000](http://localhost:8000)

### Create a New Item

- **Endpoint:** [http://localhost:8000/items/create](http://localhost:8000/items/create)
- **Method:** POST
- **Request:**
  - **Content-Type:** application/json
  - **Request Body:**
    ```json
    {
      "name": "Beer",
      "price": 19.99,
      "quantity": 10
    }
    ```
- **Response:**
  - **Status Code:** 201 Created
  - **Response Body:**
    ```json
    {
      "message": "Item created successfully",
      "item": {
        "_id": "5f1b3e1f387b2b547893daff",
        "name": "Product Name",
        "price": 19.99,
        "quantity": 10,
        "__v": 0
      }
    }
    ```

---

### Get All Items

- **Endpoint:** [http://localhost:8000/items](http://localhost:8000/items)
- **Method:** GET
- **Response:**
  - **Status Code:** 200 OK
  - **Response Body:**
    ```json
    [
      {
        "_id": "5f1b3e1f387b2b547893daff",
        "name": "Product Name",
        "price": 19.99,
        "quantity": 10,
        "__v": 0
      },
      {
        "_id": "5f1b3e1f387b2b547893dafg",
        "name": "Another Product",
        "price": 29.99,
        "quantity": 5,
        "__v": 0
      }
    ]
    ```

---

### Delete an Item

- **Endpoint:** [http://localhost:8000/items/:id](http://localhost:8000/items/:id)
- **Method:** DELETE
- **Response:**
  - **Status Code:** 200 OK
  - **Response Body:**
    ```json
    {
      "message": "Item deleted successfully"
    }
    ```

---

### Update an Item

- **Endpoint:** [http://localhost:8000/items/:id](http://localhost:8000/items/:id)
- **Method:** PUT
- **Request:**
  - **Content-Type:** application/json
  - **Request Body:**
    ```json
    {
      "name": "Updated Product Name",
      "price": 24.99,
      "quantity": 8
    }
    ```
- **Response:**
  - **Status Code:** 200 OK
  - **Response Body:**
    ```json
    {
      "message": "Item updated successfully"
    }
    ```

---

### Register a New User

- **Endpoint:** [http://localhost:8000/users/register](http://localhost:8000/users/register)
- **Method:** POST
- **Request:**
  - **Content-Type:** application/json
  - **Request Body:**
    ```json
    {
      "name": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "password": "secretpassword"
    }
    ```
- **Response:**
  - **Status Code:** 201 Created
  - **Response Body:**
    ```json
    {
      "message": "User registered successfully",
      "user": {
        "_id": "5f1b3e1f387b2b547893daff",
        "name": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "__v": 0
      }
    }
    ```

---

### User Login

- **Endpoint:** [http://localhost:8000/users/login](http://localhost:8000/users/login)
- **Method:** POST
- **Request:**
  - **Content-Type:** application/json
  - **Request Body:**
    ```json
    {
      "email": "john.doe@example.com",
      "password": "secretpassword"
    }
    ```
- **Response:**
  - **Status Code:** 200 OK
  - **Response Body:**
    ```json
    {
      "message": "Login successful",
      "user": {
        "_id": "5f1b3e1f387b2b547893daff",
        "name": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "__v": 0
      }
    }
    ```