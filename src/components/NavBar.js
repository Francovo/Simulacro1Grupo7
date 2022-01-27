import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <div className="header">
                <nav>
                <Link to="/list">Listado</Link>
                <Link to="/form">Registro</Link>
                </nav>
            </div>
            <hr/>
        </div>
    )
}
