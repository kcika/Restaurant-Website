import React from 'react'
import './Home.css'
import CarouselFadeExample4 from '../Carousels/CarouselFadeExample4'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
import Reservation from '../Reservation/Reservation'
import Gallery from '../Gallery/Gallery'

const Home = () => {
    return (
        <div className='black golden py-5'>
            <CarouselFadeExample4 />
            <div className='container py-5'>
                {/* about us section */}
                <div className="row py-lg-5">
                    <div className="col-12 col-lg-5 text-center pe-lg-5 my-3 my-lg-0">
                        <p className="fs-3 fw-semibold mb-0">Our Story</p>
                        <img src={assets.separator} width={100} className='my-3' alt="" />
                        <p className="fs-1">A journey of flavor and tradition crafted with passion</p>
                        <p className="fs-5">Our story is a journey of flavor and tradition, crafted with passion and dedication. From cherished family recipes to innovative creations, each dish reflects our commitment to quality and authenticity. Using time-honored techniques and fresh ingredients, we bring you a dining experience that celebrates both tradition and innovation. Join us, where every bite tells a story of passion and culinary excellence.</p>
                        <NavLink to="/about" className='d-inline-block cta bg-golden px-4 py-2 text-decoration-none fs-5 fw-semibold'>Read More About Us</NavLink>
                    </div>
                    <div className="col-12 col-lg-7">
                        <div className='imgContainer rounded-4 h-100'>
                            <img src={assets.mission2} className='rounded-4' width={"100%"} alt="" />
                        </div>
                    </div>
                </div>
                {/* Delicious menu */}
                <div className='row py-5'>
                    <div className='text-center my-3'>
                        <p className="fs-1 mb-0">Delicious Menu</p>
                        <img src={assets.separator} className='my-4' width={100} alt="" />
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6 px-3 px-lg-4">
                            <div className="dish d-flex align-items-center my-4">
                                <div className="dish-img">
                                    <img src={assets.steakFlorentine} width={100} height={100} className='rounded-4' alt="steak" />
                                </div>
                                <div className='ms-4'>
                                    <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                        <p className='golden fs-4 mb-0 me-2'>Steak Florentine</p>
                                        <div className='line-seprator'>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <p className='golden fs-4 mb-0 ms-2'>$40.00</p>
                                    </div>
                                    <p className="desc mb-0 text-white">Grilled steak, often served with sides like mashed potatoes, vegetables, or salad.</p>
                                </div>
                            </div>
                            <div className="dish d-flex align-items-center my-4">
                                <div className="dish-img">
                                    <img src={assets.chickenparmesan} width={100} height={100} className='rounded-4' alt="chicken parmesan" />
                                </div>
                                <div className='ms-4'>
                                    <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                        <p className='golden fs-4 mb-0 me-2'>Chicken Parmesan</p>
                                        <div className='line-seprator'>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <p className='golden fs-4 mb-0 ms-2'>$25.00</p>
                                    </div>
                                    <p className="desc mb-0 text-white">Breaded and fried chicken breast topped with marinara sauce and melted cheese, typically served over pasta.</p>
                                </div>
                            </div>
                            <div className="dish d-flex align-items-center my-4">
                                <div className="dish-img">
                                    <img src={assets.SalmonFillet} width={100} height={100} className='rounded-4' alt="salmon" />
                                </div>
                                <div className='ms-4'>
                                    <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                        <p className='golden fs-4 mb-0 me-2'>Salmon Fillet</p>
                                        <div className='line-seprator'>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <p className='golden fs-4 mb-0 ms-2'>$30.00</p>
                                    </div>
                                    <p className="desc mb-0 text-white">Grilled or baked salmon, often served with vegetables, rice, or a lemon butter sauce.</p>
                                </div>
                            </div>
                            <div className="dish d-flex align-items-center my-4">
                                <div className="dish-img">
                                    <img src={assets.VegetableStirFry} width={100} height={100} className='rounded-4' alt="vegetable stir fry" />
                                </div>
                                <div className='ms-4'>
                                    <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                        <p className='golden fs-4 mb-0 me-2'>Vegetable Stir-Fry</p>
                                        <div className='line-seprator'>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <p className='golden fs-4 mb-0 ms-2'>$18.00</p>
                                    </div>
                                    <p className="desc mb-0 text-white">A mix of vegetables sautéed with soy sauce and other seasonings, often served with rice or noodles.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 px-3 px-lg-4">
                            <div className="dish d-flex align-items-center my-4">
                                <div className='dish-img'>
                                    <img src={assets.FishandChips} width={100} height={100} className='rounded-4' alt="fish and chips" />
                                </div>
                                <div className='ms-4'>
                                    <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                        <p className='golden fs-4 mb-0 me-2'>Fish and Chips</p>
                                        <div className='line-seprator'>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <p className='golden fs-4 mb-0 ms-2'>$21.00</p>
                                    </div>
                                    <p className="desc mb-0 text-white"> Battered and fried fish fillets served with crispy fries and often accompanied by tartar sauce.</p>
                                </div>
                            </div>
                            <div className="dish d-flex align-items-center my-4">
                                <div className="dish-img">
                                    <img src={assets.chickenCurry} width={100} height={100} className='rounded-4' alt="chicken curry" />
                                </div>
                                <div className='ms-4'>
                                    <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                        <p className='golden fs-4 mb-0 me-2'>Chicken Curry</p>
                                        <div className='line-seprator'>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <p className='golden fs-4 mb-0 ms-2'>$20.00</p>
                                    </div>
                                    <p className="desc mb-0 text-white">Spiced chicken simmered in a flavorful curry sauce, served with rice or naan bread</p>
                                </div>
                            </div>
                            <div className="dish d-flex align-items-center my-4">
                                <div className="dish-img">
                                    <img src={assets.vegetarianLasagna} width={100} height={100} className='rounded-4' alt="lasagna" />
                                </div>
                                <div className='ms-4'>
                                    <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                        <p className='golden fs-4 mb-0 me-2'>Vegetarian Lasagna</p>
                                        <div className='line-seprator'>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <p className='golden fs-4 mb-0 ms-2'>$20.00</p>
                                    </div>
                                    <p className="desc mb-0 text-white">Layers of pasta, marinara sauce, and cheese with vegetables like spinach, zucchini, and mushrooms.</p>
                                </div>
                            </div>
                            <div className="dish d-flex align-items-center my-4">
                                <div className="dish-img">
                                    <img src={assets.butterChicken} width={100} height={100} className='rounded-4' alt="butter chicken" />
                                </div>
                                <div className='ms-4'>
                                    <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                        <p className='golden fs-4 mb-0 me-2'>Butter Chicken</p>
                                        <div className='line-seprator'>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <p className='golden fs-4 mb-0 ms-2'>$20.00</p>
                                    </div>
                                    <p className="desc mb-0 text-white">Butter Chicken is a popular Indian main course featuring tender chicken cooked in a creamy tomato-based sauce with a blend of spices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-5'>
                        <NavLink to="/menu" className='d-inline-block cta bg-golden px-4 py-2 text-decoration-none fs-5 fw-semibold my-2'>Explore Full Menu</NavLink>
                    </div>
                </div>
                {/* signature dishes */}
                <div className='row py-md-5'>
                    <div className='text-center my-3'>
                        <p className="fs-1 mb-0">Our Signature Dishes</p>
                        <img src={assets.separator} className='my-4' width={100} alt="" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 my-3 my-md-0">
                        <div className="signatureDish">
                            <div className='img'>
                                <img src={assets.chickenCurry} className='rounded-top-3' width={"100%"} alt="" />
                            </div>
                            <p className='fs-3 px-3 mb-0 mt-2'>Chicken Curry</p>
                            <p className='fs-5 px-3 mb-0'>Tender chicken pieces simmered in a    flavorful curry made with aromatic spices, tomatoes, and onions.</p>
                            <div className="d-flex justify-content-between align-items-center p-3">
                                <p className="fs-4 fw-semibold mb-0">$20</p>
                                <NavLink to="/menu" className='d-inline-block cta bg-golden px-4 py-2 text-decoration-none fs-5 fw-semibold'>Explore Full Menu</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 my-3 my-md-0">
                        <div className="signatureDish">
                            <div className='img'>
                                <img src={assets.paneertikkamasala} className='rounded-top-3' width={"100%"} alt="" />
                            </div>
                            <p className='fs-3 px-3 mb-0 mt-2'>Paneer Tikka Masala</p>
                            <p className='fs-5 px-3 mb-0'>Grilled chunks of paneer simmered in a rich, creamy tomato-based sauce with aromatic spices.</p>
                            <div className="d-flex justify-content-between align-items-center p-3">
                                <p className="fs-4 fw-semibold mb-0">$18</p>
                                <NavLink to="/menu" className='d-inline-block cta bg-golden px-4 py-2 text-decoration-none fs-5 fw-semibold'>Explore Full Menu</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 my-3 d-md-none my-md-0 d-lg-block">
                        <div className="signatureDish">
                            <div className='img'>
                                <img src={assets.PastaBolognese} className='rounded-top-3' width={"100%"} alt="" />
                            </div>
                            <p className='fs-3 px-3 mb-0 mt-2'>Pasta Bolognese</p>
                            <p className='fs-5 px-3 mb-0'>A hearty Italian classic featuring tender pasta tossed in a rich, slow-cooked tomato and meat sauce made with ground beef, aromatic herbs.</p>
                            <div className="d-flex justify-content-between align-items-center p-3">
                                <p className="fs-4 fw-semibold mb-0">$20</p>
                                <NavLink to="/menu" className='d-inline-block cta bg-golden px-4 py-2 text-decoration-none fs-5 fw-semibold'>Explore Full Menu</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* reservation section */}
            <div className="reservationCont px-0 py-5">
                <div className="container black px-5 py-4 rounded-4">
                    <Reservation />
                </div>
            </div>
            {/* testimonials */}
            <div className="container">
                <div className="row">
                    <div className="testimonials py-5">
                        <div className="container">
                            <p className="fs-1 fw-semibold text-center mb-0">What People Say About Us</p>
                            <img src={assets.separator} className='d-block mx-auto mt-4 mb-5' width={80} alt="separator" />
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4 my-3 my-lg-0">
                                    <div className='testimonial p-5 text-center rounded-4 position-relative'>
                                        <p><i class="bi bi-bookmark-star-fill fs-4"></i></p>
                                        <img src={assets.testimonial1} className='rounded-circle' width={100} alt="testimonial1" />
                                        <div className='my-3'>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                        </div>
                                        <p className="fs-5">Absolutely amazing! Every dish was bursting with flavor and freshness. Highly recommend!</p>
                                        <p className="fs-5 mb-0">-Sarah T.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 my-3 my-lg-0">
                                    <div className='testimonial p-5 text-center rounded-4 position-relative'>
                                        <p><i class="bi bi-bookmark-star-fill fs-4"></i></p>
                                        <img src={assets.testimonial2} className='rounded-circle' width={100} alt="testimonial2" />
                                        <div className='my-3'>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                        </div>
                                        <p className="fs-5">The best meal I've had in a long time. The ingredients were fresh, and the presentation was stunning!</p>
                                        <p className="fs-5 mb-0">-Deep Singh.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 my-3 my-lg-0 d-md-none d-lg-block">
                                    <div className='testimonial p-5 text-center rounded-4 position-relative'>
                                        <p><i class="bi bi-bookmark-star-fill fs-4"></i></p>
                                        <img src={assets.testimonial3} className='rounded-circle' width={100} alt="testimonial3" />
                                        <div className='my-3'>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                        </div>
                                        <p className="fs-5">Incredible flavors and beautifully prepared dishes. The food here is a feast for the senses!</p>
                                        <p className="fs-5 mb-0">-Emily K.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* gallery */}
            <Gallery />
        </div>
    )
}

export default Home