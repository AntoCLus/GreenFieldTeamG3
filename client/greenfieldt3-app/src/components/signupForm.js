import React, { Component } from 'react'
import { useState } from 'react'
import './loginSignup.css'

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
}

