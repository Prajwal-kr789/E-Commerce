import Mockdata from "../Utils/Mockdata.json"
import GroupCard from "./GroupCard";
import { useDispatch } from 'react-redux';
import { addItem } from '../Utils/CartSlice';
import { useState } from "react";

const Body = () =>{


        const [additemss,setaddiemss] = useState(false);

    const groupcards = Mockdata?.maindata;
    // console.log(groupcards.cards)
    // stock
    return(
        <div className="mt-20 ml-5 mr-5">
            <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <button type="button" class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
                <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Shoes</button>
                <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Bags</button>
                <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Electronics</button>
                <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Gaming</button>
            </div>
            <hr />
        <h2 className="text-3xl font-bold text-gray-600 dark:text-white border-b-2 border-gray-300 dark:border-gray-700 pb-2 mb-4 mt-1">Recommended for you</h2>

        <div className="grid ml-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center  p-4 rounded-2xl">

            {
              groupcards.cards.filter((res) => res.category == "Men's Sneaker" ).map((res)=><GroupCard ress={res}  name={res.name} ratings={res.ratings} price={res.price}  ratingsCount={res.ratingsCount} img={res.img} category={res.category} seller={res.seller} shipping={res.shipping} stock={res.stock}/> )  
            }
        </div>
        </div>
    )
}

export default Body;