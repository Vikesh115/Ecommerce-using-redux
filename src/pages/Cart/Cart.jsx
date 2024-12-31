import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../slice/cartSlice';
import { addToWishlist } from '../../slice/wishlistSlice';

function Cart() {

    // Destructure the data to show on browser using useSelector
    const { cart } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleAddToWishlist = (item) => {
        console.log("Adding to cart:", item);
        dispatch(addToWishlist(item))
    }

    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleIncrement = (item) => {
        dispatch(incrementQuantity(item.id)); // Pass item.id as payload
    };

    const handleDecrement = (item) => {
        dispatch(decrementQuantity(item.id)); // Pass item.id as payload
    };

    const Shipping = 20.02;
    const Handling = 10.00;
    const Tax = 30.28;

    const Total = totalPrice + Shipping + Handling + Tax;

    return (
        <div>
            <div className='flex flex-col justify-center items-center bg-cyan-300 md:bg-slate-300 py-6 text-xl w-[100%] md:mt-0 mt-20'>
                <div className='flex font-bold'>Shopping Cart</div>
                <div className='flex'>Shop</div>
            </div>
            <div className='flex md:flex-row w-[100%] flex-wrap md:flex-nowrap'>
                <div className='flex flex-col md:w-[60%]'>
                    {cart.map((item) => {
                        return (
                            <>
                                <div key={item.id} className='flex border-4 rounded-3xl md:w-[100%] mx-2 my-4 gap-4 items-center'>
                                    <img src={item.image} alt={item.title} className='flex w-[30%] md:w-[10%] bg-black ml-8' />
                                    <div className='flex flex-col w-[100%] p-2'>
                                        <div className='flex md:text-base text-xs'>{item.title}</div>
                                        <div className='flex md:font-bold items-center'><MdOutlineCurrencyRupee />{item.price}</div>
                                        <p className='flex md:font-medium items-center'>Quantity: {item.quantity}</p>
                                        <p className='flex md:font-bold items-center'>Total: <MdOutlineCurrencyRupee />{(item.price * item.quantity)}</p>
                                        <div className="flex items-center justify-between w-[20%] ">
                                            <button
                                                onClick={() => handleDecrement(item)}
                                                className="h-10 w-10  text-black rounded-lg"
                                            >
                                                -
                                            </button>
                                            <p className="text-xl font-semibold">{item.quantity}</p>
                                            <button
                                                onClick={() => handleIncrement(item)}
                                                className="h-10 w-10 text-black rounded-lg"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className='flex w-[70%]'>
                                        <button onClick={() => handleAddToWishlist(item)} className='bg-blue-600 text-black rounded m-1 md:rounded-3xl md:px-4 md:py-2  md:mt-2 h-[40px] w-[60%] md:h-[40px] md:w-[60%] '>Wishlist</button>
                                        <button
                                            onClick={() => handleRemove(item.id)}
                                            className="bg-purple-700 text-white m-1 md:px-4 md:py-2 rounded md:mt-2 h-[40px] w-[60%] md:h-[40px] md:w-[60%]"
                                        >
                                            Remove
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
                <div className='flex w-[100%] md:w-[40%] border-2 m-4 mb-36 md:mb-0 p-4 rounded md:h-[400px] md:mt-4 md:mr-4'>
                    <div className="flex mb-24 md:m-2 flex-col w-[100%]">
                        <p className='flex text-xl '>Cart total</p>
                        <p className='flex w-[100%] h-[1px] bg-black my-4'></p>
                        <div className='flex justify-between '>
                            <p className='flex'>Sub total: </p>
                            <p className='flex mr-20 items-center'><MdOutlineCurrencyRupee />{totalPrice.toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between mt-16'>
                            <p className='flex'>Shipping: </p>
                            <p className='flex mr-20 items-center'><MdOutlineCurrencyRupee />{Shipping}</p>
                        </div>
                        <div className='flex justify-between my-2'>
                            <p className='flex'>Handling: </p>
                            <p className='flex mr-20 items-center'><MdOutlineCurrencyRupee />{Handling}</p>
                        </div>
                        <div className='flex justify-between '>
                            <p className='flex'>Tax: </p>
                            <p className='flex mr-20 items-center'><MdOutlineCurrencyRupee />{Tax}</p>
                        </div>
                        <div className='flex justify-between mt-20 '>
                            <p className='flex font-bold '>Total: </p>
                            <p className='flex mr-20 items-center'><MdOutlineCurrencyRupee />{Total.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart

//Total Price: <MdOutlineCurrencyRupee />{totalPrice.toFixed(2)}