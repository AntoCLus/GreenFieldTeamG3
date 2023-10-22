import React, { Component } from 'react';
import axios from 'axios';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",  // Corrected the state variable name
            lastName: "",
            email: "",
            password: "",
        };
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleRegister = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password } = this.state;
        console.log("Form Data:", { firstName, lastName, email, password });
        axios.post("http://localhost:8000/register", {
            firstName,
            lastName,
            email,
            password,
        })
        .then(response => {
            // Handle the successful response from the server
            console.log('Registered successfully:', response.data);
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });
    };

    render() {
        return (
            <form onSubmit={this.handleRegister}> {/* Moved the onSubmit to the <form> element */}
                <h3>Sign Up</h3>

                <div className="mb-3">
                    <input
                        type="text"
                        name="firstName"  // Corrected the input field name
                        className="form-control"
                        placeholder="First name"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last name"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}


/* new code
import React, { Component } from 'react';
import axios from 'axios';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",  // Corrected the state variable name
            lastName: "",
            email: "",
            password: "",
        };
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleRegister = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password } = this.state;
        console.log("Form Data:", { firstName, lastName, email, password });
        axios.post("http://localhost:8000/register", {
            firstName,
            lastName,
            email,
            password,
        })
        .then(response => {
            // Handle the successful response from the server
            console.log('Registered successfully:', response.data);
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });
    };

    render() {
        return (
            <form onSubmit={this.handleRegister}> {/* Moved the onSubmit to the <form> element */
   /*             <h3>Sign Up</h3>
/*
                <div className="mb-3">
                    <input
                        type="text"
                        name="firstName"  // Corrected the input field name
                        className="form-control"
                        placeholder="First name"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last name"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}
*/

/* old code import React, { Component } from 'react'
import { useState } from 'react'
import './loginSignup.css'
import axios from 'axios'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: "",
            lastName: ""
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleRegister = (e) => {
        e.preventDefault();
        const { name, lastName, email, password } = this.state;
        console.log("Form Data:", { name, lastName, email, password });
        axios.post("http://localhost:8000/register",
        { name, lastName, email, password })
        .then(response => {
            // Handle the successful response from the server
            console.log('Registered successfully: ', response.data);
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });
        
    }
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="mb-3" onSubmit={this.handleRegister}>
                    <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First name"
                        onChange={this.handleInputChange}
                    
                   
                    />
                </div>
                <div className="mb-3" onSubmit={this.handleRegister}>
                    <input type="text" 
                    name = "lastName"
                    className="form-control" 
                    placeholder="Last name"
                    onChange={this.handleInputChange}/>
                </div>
                <div className="mb-3" onSubmit={this.handleRegister}>
                    <input
                        type="email"
                        name = "email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="mb-3"onSubmit={this.handleRegister}>
                    <input
                        type="password"
                        name ="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        )
    }
}*/