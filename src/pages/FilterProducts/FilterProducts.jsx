import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../slice/filterSlice";

function FilterProducts() {
    const dispatch = useDispatch();

    const { products } = useSelector(state => state.products);

    // Filter logic using the full product list
    const handleFilter = (category) => {
        const filters = products.filter((item) => item.category === category);
        dispatch(setFilter(filters)); // Update the filtered list
    };

    return (
        <div className="flex text-slate-950 font-extrabold text-lg items-center m-6 md:m-4 mt-28 md:mt-6 px-4  overflow-scroll md:overflow-hidden gap-10">
            <button onClick={() => handleFilter("men's clothing")} className="flex border-4 rounded-full px-4 py-2">Mens</button>
            <button onClick={() => handleFilter("women's clothing")} className="flex border-4 rounded-full px-4 py-2">Womens</button>
            <button onClick={() => handleFilter("jewelery")} className="flex border-4 rounded-full px-4 py-2">Jewelery</button>
            <button onClick={() => handleFilter("electronics")} className="flex border-4 rounded-full px-4 py-2">Electronics</button>
            <button onClick={() => dispatch(setFilter(products))} className="flex border-4 rounded-full px-4 py-2">All</button>
        </div>
    );
}

export default FilterProducts;


// import { useDispatch, useSelector } from "react-redux";
// // import { setProduct } from "../../slice/productSlice";
// import { setFilter } from "../../slice/filterSlice";

// function FilterProducts() {

//     const dispatch = useDispatch()

//     // const { products } = useSelector(state => state.products)
//     // console.log("aaaa:   ",products);

//     const { filterdata } = useSelector(state => state.filterdata)
//     // console.log("abcd:   ",filterdata);


//     const handleFilter = (id) =>{
//         const filters = filterdata.filter((item)=>{
//                 return (item.category === id)
//          })
//         // console.log(filters);
//         dispatch(setFilter(filters))
//     }

//     return (
//         <div className="flex text-slate-950 font-extrabold text-lg items-center mt-20 md:mt-16 p-4 md:p-2 md:m-2 overflow-scroll md:overflow-hidden gap-10">
//             <button onClick={()=>{handleFilter("men's clothing")}} className=" flex border-4 rounded-full px-4 py-2">Mens</button>
//             <button onClick={()=>{handleFilter("women's clothing")}} className=" flex border-4 rounded-full px-4 py-2">Womens</button>
//             <button onClick={()=>{handleFilter("jewelery")}} className=" flex border-4 rounded-full px-4 py-2">jewelery</button>
//             <button onClick={()=>{handleFilter("electronics")}} className=" flex border-4 rounded-full px-4 py-2">Electronics</button>
//         </div>
//     )
// }

// export default FilterProducts