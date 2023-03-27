import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import { decrementQuantity, incrementQuantity, removeItemFromCart } from '../redux/CartSlice';
import './Cart.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function Cart() {
    const cart = useSelector((state) => state.cart.cart);
    const total = cart.map((item) => item.price * item.quantity).reduce((curr, prev) => curr + prev, 0);
    console.log(total);
    const orders = [...cart]
    const charges = 30;
    const dispatch = useDispatch();
    const incrementItemQuantity = (item) => {
        dispatch(incrementQuantity(item));
    };
    const decrementItemQuantity = (item) => {
        dispatch(decrementQuantity(item));
    };
    const removeItemFromCart = (item) => {
        dispatch(removeItemFromCart(item));
    };
    const placedOrder = (item) => {
        toast.success('🦄 Wow so easy! Your Order is placed', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });

           
    }

    return (
        <>
            <Header />
            <div className="cart">
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Left Part */}
                <div className="cartLeft">
                    {cart.map((item, index) => (
                        <div className="cartContainer" key={index}>
                            {/* image */}
                            <div>
                                <img src={item.image} style={{ width: 100, height: 100 }} alt="product" />
                            </div>

                            {/* description*/}
                            <div className="cartDescription">
                                <p>{item.title.length > 90 ? item.title.substr(0, 90) : item.title}</p>
                                <p>{item.description.length > 200 ? item.description.substr(0, 200) : item.description}</p>
                                <p style={{ marginTop: 8 }}>{item.price}</p>
                            </div>

                            {/* Buttons */}
                            <div className="cartButtonContainer">
                                <div className="cartButtons">
                                    <div onClick={() => decrementItemQuantity(item)} style={{ cursor: "pointer" }}>-</div>
                                    <div>{item.quantity}</div>
                                    <div onClick={() => incrementItemQuantity(item)} style={{ cursor: "pointer" }}>+</div>
                                </div>
                                <button onClick={() => removeItemFromCart(item)} className="cartButton">Remove Item from bag</button>
                                <h5 style={{ marginTop: 7 }}>{item.price * item.quantity}</h5>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cartRight">
                    {/* Location info and Button */}
                    <div className="cartRightLocationContainer"></div>
                    <div className="cartRightLocation">
                        <div>
                            <LocationOnIcon />
                            <div className="cartRightDescription">
                                <p className="cartRightText">Select your Location</p>
                                <p className="cartRightText">Please select a location so we can find you</p>
                                <button className="cartRightButton"> Select Location</button>
                            </div>
                        </div>
                    </div>

                    <div className="cartRightLocation">
                        <div>
                            <LocationOnIcon />
                            <div className="cartRightDescription">
                                <p className="cartRightText">Choose your saved address</p>
                                <button className="cartRightButton"> Choose Location</button>
                            </div>
                        </div>
                    </div>

                    {/* Coupon info and description */}
                    <div></div>

                    {/* Container for the checkout and the total */}
                    <div className="cartRightCheckout">
                        <div className="cartRightCheckoutpart">
                            <h5>Total Price</h5>
                            <h5>{total}</h5>
                        </div>

                        <div className="cartRightCheckoutpart">
                            <h5>Discount</h5>
                            <h5>-</h5>
                        </div>

                        <div className="cartRightCheckoutpart">
                            <h5>Delivery Charges</h5>
                            <h5>{charges}</h5>
                        </div>

                        <div className="cartRightCheckoutpart">
                            <h3>Grand Total</h3>
                            <h3>{total + 30}</h3>
                        </div>


                    </div>
                    <button onClick={placedOrder} className='cartRightCheckoutButton'> Place Order </button>
                </div>
            </div>
        </>
    );
}

export default Cart;
