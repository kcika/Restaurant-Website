import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link, NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='footer py-5 position-relative'>
            <div className="darkoverlay"></div>
            {/* <img src={assets.footerImg} width={"100%"} alt="" /> */}
            <div className="container py-5">
                {/* <div className="text golden d-flex align-items-center justify-content-center position-relative">
                    <ul className='text-center'>
                        <li>
                            <NavLink to="" className="nav-link block text-lg px-4 py-3 fw-semibold">HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="nav-link block text-lg px-4 py-3 fw-semibold">ABOUT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu" className="nav-link block text-lg px-4 py-3 fw-semibold">MENU</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="nav-link block text-lg px-4 py-3 fw-semibold">CONTACT</NavLink>
                        </li>
                        <li>
                            <NavLink to="/delivery" className="nav-link block text-lg px-4 py-3 fw-semibold">DELIVERY</NavLink>
                        </li>
                    </ul>
                    <div>
                        <div className="box black d-flex flex-column align-items-center justify-content-center mx-5">
                            <p className="h1 mb-4">Tastemaker</p>
                            <p>1234 Flavor Street, Suite 567, Fooville, CA 98756, USA </p>
                            <p>booking@tastemaker.com</p>
                            <p>Call: (123) 456-7890</p>
                            <p>Open: 10:00 am to 11:00pm</p>
                            <img src={assets.separator} width={70} className='my-4' alt="seperator" />
                            <p className='h1'>Get News and Offers</p>
                            <p className='mb-4'>Subscribe us and get upto 15% off</p>
                            <form action="">
                                <input type="email" name='email' id='email' placeholder='Your Email Address' required />
                                <button type='submit'>SUBSCRIBE</button>
                            </form>
                        </div>
                    </div>
                    <ul className='text-center'>
                        <li>
                            <NavLink to="" className="nav-link block text-lg px-4 py-3 fw-semibold">FACEBOOK</NavLink>
                        </li>
                        <li>
                            <NavLink to="" className="nav-link block text-lg px-4 py-3 fw-semibold">INSTAGRAM</NavLink>
                        </li>
                        <li>
                            <NavLink to="" className="nav-link block text-lg px-4 py-3 fw-semibold">TWITTER</NavLink>
                        </li>
                        <li>
                            <NavLink to="" className="nav-link block text-lg px-4 py-3 fw-semibold">YOUTUBE</NavLink>
                        </li>
                        <li>
                            <NavLink to="" className="nav-link block text-lg px-4 py-3 fw-semibold">GOOGLEMAP</NavLink>
                        </li>
                    </ul>
                </div > */}
                <div className="row golden position-relative">
                    <div className="col-12 col-lg-4 my-2">
                        <p className="fs-1 fw-semibold mb-0">TASTEMAKER</p>
                        <p className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, nostrum.</p>
                        <p className="fs-5"><strong>Address</strong>: 1234 Flavor Street, Suite 567 Foodville, CA 98765 USA</p>

                    </div>
                    <div className="col-12 col-lg-4 my-2 d-flex">
                        <ul className='col-6 ps-0'>
                            <p className="fs-4 fw-semibold">Quick Links</p>
                            <li>
                                <NavLink to="" className='golden text-decoration-none fs-5 fw-semibold my-2 d-block'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className='golden text-decoration-none fs-5 fw-semibold my-2 d-block'>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/menu" className='golden text-decoration-none fs-5 fw-semibold my-2 d-block'>Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className='golden text-decoration-none fs-5 fw-semibold my-2 d-block'>Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/delivery" className='golden text-decoration-none fs-5 fw-semibold my-2 d-block'>Order Online</NavLink>
                            </li>
                        </ul >
                        <ul className="col-6 ps-0">
                            <p className="fs-4 fw-semibold">Get In Touch</p>
                            <li className='fw-semibold'><i className="bi bi-telephone"></i> : (123) 456-7890</li>
                            <li className='fw-semibold'><i className="bi bi-envelope"></i>: info@thetastyplate.com</li>
                            <li className='mt-1 fs-5 fw-semibold'>Our Hours</li>
                            <li className='fw-semibold'>Mon - Fri: </li>
                            <li>11:00 AM - 10:00 PM</li>
                            <li className='fw-semibold'>Sat - Sun:</li>
                            <li>10:00 AM - 9:00 PM</li>
                        </ul>
                    </div >
                    <div className="col-12 col-lg-4 ps-3 ps-lg-5">
                        <p className="fs-2 mb-0">Get News &amp; Offers</p>
                        <p className="fs-5">Subscribe and Get 15% Off</p>
                        <div className='subscribe d-flex'>
                            <input type="email" name="" id="" />
                            <button type="submit" className='bg-golden px-2 fs-5 fw-semibold'>Subscribe</button>
                        </div>
                        <p className="fs-4 fw-semibold my-3">Follw us:</p>
                        <div>
                            <i className="bi bi-facebook fs-3 mx-2"></i>
                            <i className="bi bi-instagram fs-3 mx-2"></i>
                            <i className="bi bi-twitter fs-3 mx-2"></i>
                            <i className="bi bi-youtube fs-3 mx-2"></i>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default Footer
