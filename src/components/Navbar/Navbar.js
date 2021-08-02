import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import payload from '../resolvers/payload';


class NavBar extends Component {


    chargeProfile = () => {
        if (localStorage.getItem('token') !== null) {
            const token = localStorage.getItem('token');
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/perfil">Hola!!</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">My Cart</Link>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">My Cart</Link>
                    </li>

                </ul>
            )
        }
    }



    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Gift Shop</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    {this.chargeProfile()}
                </div>
            </nav>
        )
    }
}

export default NavBar;