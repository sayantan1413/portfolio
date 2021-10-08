import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import avatar from '../images/avatar.jpeg'
function Navigation() {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/home" activeClassName="active-class">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class">Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolio" activeClassName="active-class">Portfolios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/blogs" activeClassName="active-class">Blogs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class">Contact</NavLink>
                </li>
            </ul>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`

`;

export default Navigation
