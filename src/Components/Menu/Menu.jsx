import React from 'react'
import { assets } from '../../assets/assets'
import './Menu.css'
const Menu = () => {
    return (

        <div>
            <div className="starters black">
                <p className="h5 type fst-italic golden text-center">Starters</p>
                <div className='d-flex align-items-center justify-content-center mt-3' >
                    <img src={assets.separator} width={70} alt="separator" />
                    <p className="fs-1 fw-semibold golden text-center mx-3">Appetizers</p>
                    <img src={assets.separator} width={70} alt="separator" />
                </div>
                <div className="menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6 px-3 px-md-4">
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.garlicBread} width={100} height={100} className='rounded-4' alt="Garlic Bread" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Garlic Bread</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$4.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">Garlic bread is a delicious and crispy bread topped with garlic butter, often sprinkled with herbs and sometimes cheese.</p>
                                    </div>
                                </div>
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.mozarellaSticks} width={100} height={100} className='rounded-4' alt="Mozzarella Sticks" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Mozzarella Sticks</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$8.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">Golden and crispy on the outside, with melted mozzarella cheese inside. A deliciously gooey appetizer, perfect for dipping in marinara sauce</p>
                                    </div>
                                </div>
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.meatballs} width={100} height={100} className='rounded-4' alt="MeatBalls" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Meatballs</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$15.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">Ground meat balls typically seasoned with herbs and spices, often served in a rich sauce or as a topping on dishes like spaghetti.</p>
                                    </div>
                                </div>
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.greeksalad} width={100} height={100} className='rounded-4' alt="Greek Salad" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Greek Salad</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$12.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">Greek salad is a fresh mix of cucumbers, tomatoes, red onions, olives, and feta cheese, dressed with olive oil and oregano.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 px-3 px-md-4">
                                <div className="dish d-flex align-items-center my-4">
                                    <div className='dish-img'>
                                        <img src={assets.nachos} width={100} height={100} className='rounded-4' alt="Nachos" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Nachos</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$10.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">Crispy tortilla chips topped with melted cheese, and often garnished with ingredients like jalapeños, beans, meat, sour cream, and salsa.</p>
                                    </div>
                                </div>
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.samosas} width={100} height={100} className='rounded-4' alt="Samosas" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Samosas</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$9.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">Filled with spiced potatoes, peas, and sometimes meat, served with chutney or sauce.</p>
                                    </div>
                                </div>
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.springRolls} width={100} height={100} className='rounded-4' alt="Spring Rolls" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Spring Rolls</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$10.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">Spring rolls filled with vegetables, and sometimes meat, often served with a sweet or savory dipping sauce.</p>
                                    </div>
                                </div>
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.tacos} width={100} height={100} className='rounded-4' alt="Tacos" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Tacos</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$8.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">Tacos filled with a variety of ingredients like seasoned meat, beans, vegetables, and topped with salsa, cheese, and other garnishes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Main Dishes section */}
            {/* <div className='menu-2'>
                <img src={assets.menu2} className='' width={"100%"} alt="Main Dish" />
            </div> */}
            <div className="mainDish black">
                <p className="h5 type fst-italic golden text-center">Reservations</p>
                <div className='d-flex align-items-center justify-content-center mt-3' >
                    <img src={assets.separator} width={70} alt="" />
                    <p className="fs-1 fw-semibold golden text-center mx-3">Main Course</p>
                    <img src={assets.separator} width={70} alt="" />
                </div>
                <div className="menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6 px-3 px-md-4">
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
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.PastaBolognese} width={100} height={100} className='rounded-4' alt="pasta" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Pasta Bolognese</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$20.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">Pasta served with a rich meat sauce made from ground beef, tomatoes, onions, and herbs.</p>
                                    </div>
                                </div>
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.chickenbiryani} width={100} height={100} className='rounded-4' alt="biryani" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Chicken Biryani</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$25.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">Chicken Biryani with marinated chicken, aromatic herbs, and saffron, often garnished with fried onions and served with raita.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 px-3 px-md-4">
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
                                        <img src={assets.shakshuka} width={100} height={100} className='rounded-4' alt="shakshuka" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Shakshuka</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$18.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">Poached eggs in a spicy tomato and pepper sauce, often served with crusty bread.</p>
                                    </div>
                                </div>
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.shrimprisotto} width={100} height={100} className='rounded-4' alt="Risotto" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Creamy Shrimp Risotto</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$22.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">Creamy rice dish cooked with broth and flavored with ingredients like mushrooms, seafood, or vegetables.</p>
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
                    </div>

                </div>
            </div>
            {/* Desserts section */}
            {/* <div className='menu-3'>
                <img src={assets.menu3} className='' width={"100%"} alt="Desserts" />
            </div> */}
            <div className="starters black">
                <p className="h5 type fst-italic golden text-center">Sweet Tooth</p>
                <div className='d-flex align-items-center justify-content-center mt-3' >
                    <img src={assets.separator} width={70} alt="" />
                    <p className="fs-1 fw-semibold golden text-center mx-3">Desserts</p>
                    <img src={assets.separator} width={70} alt="" />
                </div>
                <div className="menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6 px-3 px-md-4">
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.cheesecake} width={100} height={100} className='rounded-4' alt="cheesecake" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Cheesecake</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$6.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">A rich and creamy dessert with a graham cracker crust, often topped with fruit or chocolate.</p>
                                    </div>
                                </div>
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.chocolavacake} width={100} height={100} className='rounded-4' alt="choco lava cake" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'> Chocolate Lava Cake</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$8.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">A warm chocolate cake with a gooey, molten center, usually served with ice cream.</p>
                                    </div>
                                </div>
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.tiramisu} width={100} height={100} className='rounded-4' alt="tiramisu" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Tiramisu</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$15.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">An Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.</p>
                                    </div>
                                </div>
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.cremeBrulee} width={100} height={100} className='rounded-4' alt="creme brulee" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Crème Brûlée</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$12.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">A creamy custard topped with a caramelized sugar crust, served in a ramekin</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 px-3 px-md-4">
                                <div className="dish d-flex align-items-center my-4">
                                    <div className='dish-img'>
                                        <img src={assets.brownies} width={100} height={100} className='rounded-4' alt="brownies" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Brownies</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$10.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">Dense and fudgy chocolate squares, sometimes served with nuts or topped with a scoop of ice cream.</p>
                                    </div>
                                </div>
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.sorbet} width={100} height={100} className='rounded-4' alt="sorbet" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Sorbet</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$9.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">A refreshing, fruit-flavored frozen dessert, often served as a palate cleanser.</p>
                                    </div>
                                </div>
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.chocolateMousse} width={100} height={100} className='rounded-4' alt="chocolate mousse" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Mousse</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$10.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">A light and airy dessert made from whipped cream and chocolate or fruit purée, served chilled.</p>
                                    </div>
                                </div>
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.icecream} width={100} height={100} className='rounded-4' alt="icecream" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Chocolate Icecream</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$8.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">A rich and creamy frozen dessert made with cocoa or melted chocolate.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* drins section */}
            <div className="starters black">
                <p className="h5 type fst-italic golden text-center">Refreshing</p>
                <div className='d-flex align-items-center justify-content-center mt-3' >
                    <img src={assets.separator} width={70} alt="" />
                    <p className="fs-1 fw-semibold golden text-center mx-3">Drinks</p>
                    <img src={assets.separator} width={70} alt="" />
                </div>
                <div className="menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6 px-3 px-md-4">
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.strawberrylemonade} width={100} height={100} className='rounded-4' alt="cheesecake" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Strawberry Lemonade</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$5.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">A sweet and tangy beverage combining fresh lemonade with the vibrant flavor of ripe strawberries.</p>
                                    </div>
                                </div>
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.orangejuice} width={100} height={100} className='rounded-4' alt="choco lava cake" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Orange Juice</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$4.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">A refreshing drink made from freshly squeezed oranges, known for its bright, citrusy flavor and natural sweetness.</p>
                                    </div>
                                </div>
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.cranberryjuice} width={100} height={100} className='rounded-4' alt="tiramisu" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Cranberry Juice</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$5.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">A tangy and refreshing drink made from pure cranberry juice, known for its crisp flavor and bright red color. </p>
                                    </div>
                                </div>
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.cappuccino} width={100} height={100} className='rounded-4' alt="creme brulee" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Cappuccino</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$4.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">A classic coffee drink featuring equal parts espresso, steamed milk, and milk foam. Rich and creamy with a velvety texture and a frothy top.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 px-3 px-md-4">
                                <div className="dish d-flex align-items-center my-4">
                                    <div className='dish-img'>
                                        <img src={assets.coldcoffee} width={100} height={100} className='rounded-4' alt="brownies" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Cold Coffee</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$4.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white"> A chilled, creamy coffee drink blended with ice, milk, and a touch of sugar. Often topped with whipped cream for an indulgent treat.</p>
                                    </div>
                                </div>
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.mojito} width={100} height={100} className='rounded-4' alt="sorbet" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Mojito</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$6.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">A classic cocktail made with fresh mint leaves, lime juice, sugar, and rum, topped with soda water and served over ice.</p>
                                    </div>
                                </div>
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.mangosmoothie} width={100} height={100} className='rounded-4' alt="chocolate mousse" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Mango Smoothie</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$6.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white"> A creamy and refreshing blend of ripe mangoes, yogurt, and a touch of honey. Perfect for a tropical, fruity treat.</p>
                                    </div>
                                </div>
                                <div className="dish d-flex align-items-center my-4">
                                    <div className="dish-img">
                                        <img src={assets.blueberrymatcha} width={100} height={100} className='rounded-4' alt="icecream" />
                                    </div>
                                    <div className='ms-4'>
                                        <div className="namePrice d-flex justify-content-between align-items-center mb-1">
                                            <p className='golden fs-4 mb-0 me-2'>Iced Blueberry Match</p>
                                            <div className='line-seprator'>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <p className='golden fs-4 mb-0 ms-2'>$8.00</p>
                                        </div>
                                        <p className="desc mb-0 text-white">A refreshing blend of earthy matcha green tea, sweet blueberry syrup, and cold milk, served over ice for a vibrant and energizing drink.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Menu
