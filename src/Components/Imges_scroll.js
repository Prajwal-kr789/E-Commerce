import { useState } from "react";
import Quickreview from "./Quickreview";
import { useDispatch } from 'react-redux';
import { addItem } from '../Utils/CartSlice';

const Imges_scroll = (props) =>{

    
    const dispatch = useDispatch();
    const handleadd = (name)=>{
        dispatch(addItem(name));
    }

    const {name, ratings, price, ratingsCount, img, category, seller, shipping, stock} = props;

    const[openquickreview,setopenquickreview] = useState(false)


    return(
        <div  className="">
            <div  class="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md md:max-w-xl lg:max-w-2xl p-2">
    <div  class="flex items-center">
        <div class="w-1/3">
            <img src={img} alt="" onClick={()=>setopenquickreview(true)} class="w-full h-auto"/>
        </div>
        <div class="w-2/3 p-4">
            <p class="text-lg font-semibold">{name}</p>
            <p class="text-lg font-semibold text-gray-700">Price : {price}/-</p>
            <button  onClick={()=>handleadd(name)} class="text-white mt-10 bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
 
        </div>
    </div>
    <div class="bg-gray-100 dark:bg-gray-800">
        <div class="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <p class="text-sm font-medium text-gray-400">Ratings : {ratings}⭐({ratingsCount} reviews)</p>
            </div>
            <div>
                <p class="text-sm font-medium text-gray-400">Dealer : {seller}</p>
            </div>
            <div>
                <p class="text-sm font-medium text-gray-400">Available : {stock}({stock !== null ?"In stock" : "Out of stock"})</p>
            </div>
        </div>
    </div>
    {
                openquickreview && <Quickreview {...props}
                setopenquickreview={setopenquickreview}
                openquickreview={openquickreview}/>
        }
</div>
        
        </div>
        
    )
}

export default Imges_scroll