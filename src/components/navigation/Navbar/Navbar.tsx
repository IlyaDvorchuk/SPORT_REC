import React from 'react';
import cls from './Navbar.module.scss'
import {navItems} from "./data";
import {MenuItem} from "@mui/material";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={cls.Navbar}>
            {navItems.map(nav => (
                <MenuItem key={nav.name} className={cls.navItem}>
                    <img src={nav.svg} alt={nav.name}/>
                    <Link to={nav.url}>{nav.name}</Link>
                </MenuItem>
            ))}
        </nav>
    );
};

export default Navbar;