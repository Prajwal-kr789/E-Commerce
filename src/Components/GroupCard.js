import React from 'react';
import '../Card.css';
import { useState } from "react";
import Quickreview from "./Quickreview";
import { useDispatch } from 'react-redux';
import { addItem } from '../Utils/CartSlice';

const GroupCard = (props) => {

    const {name, ratings, price, ratingsCount, img, category, seller, shipping, stock,ress} = props;
   const[openquickreview,setopenquickreview] = useState(false)

    const dispatch = useDispatch();
    const handleadd = (name)=>{
        dispatch(addItem(name));
    }


  return (
    <div className="">
        

<div  class="w-10/12 max-w-sm bg-white border border-transparent rounded-lg shadow dark:bg-gray-800 ">
    <p>
        <img onClick={()=>setopenquickreview(true)} class="p-8 rounded-t-lg" src={img} alt="product image" />
    </p>
    <div class="px-5 pb-5">
        <p>
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </p>
        <div class="flex items-start flex-col mt-2.5 mb-5">
        <div className='flex '>
                <span class="text-xl font-bold text-gray-900 dark:text-white">Price : {price}/-</span>
            </div>
            <div class="p-4 mt-2 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
                {/* <p class="text-sm font-semibold text-gray-900 dark:text-white">Seller : {seller}</p> */}
                <p class="text-sm font-bold text-gray-700 dark:text-gray-300">Available : {stock} ({stock !== null ?"In stock" : "Out of stock"})</p>
                <p class="text-sm font-bold text-blue-500 dark:text-blue-300">Shipping in {shipping} days</p>
            </div>
            <span class=" text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded mt-2 dark:text-blue-600 ">Ratings : {ratings}⭐({ratingsCount} reviews)</span>

        </div>

        <div class="flex items-center justify-between">
            
            <p onClick={()=>handleadd(name)} class="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</p>
        </div>

    </div>
</div>

{
                openquickreview && <Quickreview {...props}
                setopenquickreview={setopenquickreview}
                openquickreview={openquickreview}/>
        }


    </div>
  );
};

export default GroupCard;
