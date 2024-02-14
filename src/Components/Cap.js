import { useState } from "react";
import Quickreview from "./Quickreview";
import { useDispatch } from 'react-redux';
import { addItem } from '../Utils/CartSlice';

const Cap = (props) =>{

    const {name, ratings, price, ratingsCount, img, category, seller, shipping, stock} = props;

    const[openquickreview,setopenquickreview] = useState(false)

    
    const dispatch = useDispatch();
    const handleadd = (name)=>{
        dispatch(addItem(name));
    }

    return(
        <div >
            <div  className="w-96 mt-5 ">

            
        <p class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img onClick={()=>setopenquickreview(true)} class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={img} alt=""/>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p class="mb-3 text-md font-bold text-gray-700 dark:text-gray-400">At Rs. {price}/- only</p>

                <div className=" rounded-lg p-1  w-fit flex items-center">
                    <p className=" text-blue-700 text-sm  font-bold  dark:text-gray-400">{ratings}⭐ ({ratingsCount} reviews)</p>
                </div>      
                    
                <button onClick={()=>handleadd(name)} class="inline-flex mt-5 items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
           
        </button>

                      </div>
        </p>
        </div>
        {
                openquickreview && <Quickreview {...props}
                setopenquickreview={setopenquickreview}
                openquickreview={openquickreview}/>
        }
        </div>
    )
}

export default Cap;