import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { getProducts } from "../../api/products";
import { addToCart } from "../../slice/cartSlice";
import { addToWishlist } from "../../slice/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FilterProducts from '../FilterProducts/FilterProducts';

function Dashboard() {
    const [searchQuery, setSearchQuery] = useState("");

    const dispatch = useDispatch()

    // Calling the api data using useDispatch    
    useEffect(() => {
        dispatch(getProducts())
    }, [])

    // Destructure the data to show on browser using useSelector
    const { filterdata } = useSelector(state => state.filterdata);

    const handleAddToWishlist = (item) => {
        console.log("Adding to cart:", item);
        dispatch(addToWishlist(item))
    }

    const handleAddToCart = (item) => {
        console.log("Adding to cart:", item);
        dispatch(addToCart(item)); // Dispatch the addToCart action
    };

    const filteredProducts = filterdata.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <FilterProducts />
            <Header />
            <div className="flex justify-center mt-4 m-2">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-2 p-2 rounded-xl w-[80%] md:w-[50%] placeholder:text-xl"
                />
            </div>
            <div className='flex flex-wrap bg-slate-500 justify-center w-[100%] mb-20 md:mb-0'>
                {filteredProducts.map((item) => {
                    return (
                        <div key={item.id} className='flex flex-col w-[100%] md:w-[20%] flex-wrap justify-center items-center m-2 bg-white '>
                            <img src={item.image} alt={item.title} className='flex md:h-[100px]  md:w-[25%] w-[60%] mt-4' />
                            <div className='flex flex-col justify-center items-center'>
                                <p className='flex text-base'>{item.rating.rate}/5({item.rating.count} Reviews )</p>
                                <div className='flex text-2xl font-bold items-center'><MdOutlineCurrencyRupee size={14} />{item.price}</div>
                                <h3 className='flex text-base font-semibold'>{item.title}</h3>
                            </div>
                            <div className="flex flex-col md:w-[100%] w-[60%] justify-center items-center">
                                <div className="flex flex-row w-[100%] items-center justify-center gap-1">
                                    <button onClick={() => handleAddToWishlist(item)} className='rounded-3xl py-2 px-4 w-[60%]  md:w-[40%] md:m-1 mt-2 mb-1  bg-yellow-500 text-black'>Wishlist</button>
                                    <button onClick={() => handleAddToCart(item)} className='rounded-3xl py-2 px-4 w-[60%]  md:w-[40%] md:m-1 my-1 bg-yellow-500 text-black'>Add</button>
                                </div>
                                <Link to={`/viewproduct/${item.id}`} className='flex items-center justify-center  rounded-3xl py-2 px-4 w-[60%]  md:w-[40%] md:m-1 mb-1 mt-1 bg-yellow-500 text-black'>View</Link>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard