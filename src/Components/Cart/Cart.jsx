import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalAmount } = useContext(StoreContext);
    const navigate = useNavigate();

    return (
        <div className="container-fluid black golden">
            <div className='cart container'>
                <div className="cart-items py-4">
                    <div className="row cart-items-header d-flex justify-content-between text-center">
                        <div className="col-2"><p className='fs-5 fw-semibold mb-0'>Items</p></div>
                        <div className="col-2"><p className='fs-5 fw-semibold mb-0'>Title</p></div>
                        <div className="col-2"><p className='fs-5 fw-semibold mb-0'>Price</p></div>
                        <div className="col-2"><p className='fs-5 fw-semibold mb-0'>Quantity</p></div>
                        <div className="col-2"><p className='fs-5 fw-semibold mb-0'>Total</p></div>
                        <div className="col-2"><p className='fs-5 fw-semibold mb-0'>Remove</p></div>
                    </div>
                    <br />
                    <hr />
                    {food_list.map((item, index) => {
                        if (cartItems[item.id] > 0) {
                            return (
                                <div>
                                    <div className='row cart-item-title cart-items-item d-flex justify-content-between align-items-center text-center'>
                                        <div className="col-2 cartImg">
                                            <img src={item.image} width={"100%"} className='rounded-4' alt="" />
                                        </div>
                                        <div className="col-2">
                                            <p className='fs-5 fw-semibold mb-0'>{item.name}</p>
                                        </div>
                                        <div className="col-2">
                                            <p className='fs-5 fw-semibold mb-0'>${item.price}</p>
                                        </div>
                                        <div className="col-2">
                                            <p className='fs-5 fw-semibold mb-0'>{cartItems[item.id]}</p>
                                        </div>
                                        <div className="col-2">
                                            <p className='fs-5 fw-semibold mb-0'>${item.price * cartItems[item.id]}</p>
                                        </div>
                                        <div className="col-2">
                                            <img src={assets.cross_icon} onClick={() => removeFromCart(item.id)} />
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            )
                        }
                    })}
                </div>
                <div className='cartBottom'>
                    <div className="col-12 col-md-6 cart-total">
                        <p className="h2 fw-semibold my-4">Cart Total</p>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <p className='mb-0 fs-5 fw-semibold'>Sub Total</p>
                                <p className='mb-0 fs-5 fw-semibold'>${getTotalAmount()}</p>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-between'>
                                <p className='mb-0 fs-5 fw-semibold'>Delivery Fee</p>
                                <p className='mb-0 fs-5 fw-semibold'>${getTotalAmount() === 0 ? 0 : 2}</p>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-between'>
                                <p className='mb-0 fs-5 fw-semibold'>Total</p>
                                <p className='mb-0 fs-5 fw-semibold'>${getTotalAmount() === 0 ? 0 : getTotalAmount() + 2}</p>
                            </div>
                        </div>
                        <button onClick={() => navigate('/placeorder')} className='w-100 bg-golden fs-5 fw-semibold py-3 my-3'>Proceed To Checkout</button>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Cart
