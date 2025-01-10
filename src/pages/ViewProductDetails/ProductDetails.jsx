import React from 'react'

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../slice/cartSlice";
import { addToWishlist } from "../../slice/wishlistSlice";
import { useDispatch } from "react-redux";
import { MdOutlineCurrencyRupee } from "react-icons/md";

function ProductDetails() {
    const { id } = useParams();
    const { products } = useSelector((state) => state.products);
    console.log("Details: ", products);

    const dispatch = useDispatch()


    // Find the product by ID
    const product = products.find((item) => item.id === parseInt(id));

    const handleAddToWishlist = (item) => {
        console.log("Adding to cart:", item);
        dispatch(addToWishlist(item))
    }

    const handleAddToCart = (item) => {
        console.log("Adding to cart:", item);
        dispatch(addToCart(item)); // Dispatch the addToCart action
    };


    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center w-[100%] my-24 md:my-0 md:mt-0 md:h-full">
            <div className="flex md:w-[60%] flex-row flex-wrap items-center justify-center ">
                <div className='flex flex-col items-center justify-center bg-white md:p-4 w-[40%] md:w-[40%] '>
                    <img src={product.image} alt={product.title} className='flex w-[100%] ' />
                </div>
                <div className="flex w-[100%] flex-col p-4 ">
                <h1 className='flex text-xl font-semibold md:text-3xl md:font-bold'>{product.title}</h1>
                <p className='flex text-base'>{product.rating.rate}/5({product.rating.count} Reviews )</p>
                <p className='flex text-xl font-semibold md:text-2xl md:font-bold items-center'><MdOutlineCurrencyRupee size={16} />{product.price}</p>
                    <p className='flex text-base md:text-lg'>{product.description}</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-[100%] justify-center items-center">
                <button onClick={() => handleAddToWishlist(product)} className='rounded-3xl py-2 px-4 w-[60%]  md:w-[20%] md:m-1 mt-2 mb-1  bg-yellow-500 text-black'>Wishlist</button>
                <button onClick={() => handleAddToCart(product)} className='rounded-3xl py-2 px-4 w-[60%]  md:w-[20%] md:m-1 my-1 bg-yellow-500 text-black'>Add</button>
            </div>
        </div>
    );
}

export default ProductDetails;
