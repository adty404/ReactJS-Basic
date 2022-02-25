import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { UserProvider } from '../context/User';
import AuthenticatedUser from './AuthenticatedUser';

export default function Navbar({children}) {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="#">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users">Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                        <UserProvider>
                            <NavLink className="nav-link" to="/">
                                <AuthenticatedUser /> {/*Beda component*/}
                            </NavLink>
                        </UserProvider>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="py-3">
            {children}
        </div>

        <Outlet />
    </>
  );
}
