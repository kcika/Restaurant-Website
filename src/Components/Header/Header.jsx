import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import { StoreContext } from '../../context/StoreContext'


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    };

    const [searchOpen, setSearchOpen] = useState(false);

    const toggleSearch = () => {
        setSearchOpen(!searchOpen)
    };


    const { getTotalAmount } = useContext(StoreContext);

    return (
        <div className='position-fixed top-0 w-100 z-3'>
            <header className='w-100 px-2 px-md-4 black py-2'>
                <nav className='d-flex justify-content-between align-items-center'>
                    <Link to="/" className='h3 font-semibold gold text-decoration-none'>Tastemaker</Link>
                    <ul className={isOpen ? "navLinks active" : "navLinks"}>
                        <li>
                            <NavLink to="" className={({ isActive }) => `nav-link block px-4 py-3 fw-semibold ${isActive ? "gold" : "text-white"}`}>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => `nav-link block px-4 py-3 fw-semibold ${isActive ? "gold" : "text-white"}`}>ABOUT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu" className={({ isActive }) => `nav-link block px-4 py-3 fw-semibold ${isActive ? "gold" : "text-white"}`}>MENU</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => `nav-link block px-4 py-3 fw-semibold ${isActive ? "gold" : "text-white"}`}>CONTACT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/delivery" className={({ isActive }) => `nav-link block px-4 py-3 fw-semibold ${isActive ? "gold" : "text-white"}`}>ORDER ONLINE</NavLink>
                        </li>
                    </ul>
                    <div className='d-flex align-items-center golden'>
                        <div className='mx-2 mx-md-3' onClick={toggleSearch}>
                            <i className="bi bi-search fs-5"></i>
                        </div>
                        <NavLink to="/cart" className='mx-2 mx-md-3'>
                            <i className="bi bi-bag fs-5 golden"></i>
                            <div className={getTotalAmount() === 0 ? "" : "dot"}></div>
                        </NavLink>
                        <NavLink to='/login' className='mx-2 mx-md-3'><i class="bi bi-person golden fs-4"></i></NavLink>
                        <div className='hamburger fs-3 ms-2' onClick={toggleMenu}>
                            <i class="bi bi-list"></i>
                        </div>
                    </div>
                </nav>
                <div className={searchOpen ? "searchbox active" : "searchbox container-fluid"}>
                    <div className='container searchCont d-flex align-items-center'>
                        <i className="bi bi-search fs-5 golden"></i>
                        <input type="search" name="search" id="search" />
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Header
