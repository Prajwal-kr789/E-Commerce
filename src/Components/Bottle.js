import { useState } from "react";
import Quickreview from "./Quickreview";
import { useDispatch } from 'react-redux';
import { addItem } from '../Utils/CartSlice';

const Bottle = (props) =>{

    const[openquickreview,setopenquickreview] = useState(false)
    
    const dispatch = useDispatch();
    const handleadd = (name)=>{
        dispatch(addItem(res.name));
    }
    const {res} = props;

    return(
        <div  classNameName="">

         

<div  className="w-full max-w-sm bg-white border border-transparent bg-gradient-to-b from-gray-50 to-gray-50 rounded-lg shadow dark:bg-gray-800 ">
    <p>
        <img className="p-8 rounded-xl " onClick={()=>setopenquickreview(true)} src={res.img} alt="product image" />
    </p>
    <div className="px-5 pb-5 dark:bg-gray-800">
        <a href="/">
            <h5 className="text-lg mb-1 font-semibold tracking-tight  text-gray-900 dark:text-white">{res.name.substring(0,22)}{res.name.length  > 22 ?"...":""}</h5>
            
        </a>
        <span className="text-md   ml-10 px-2 py-0.5  rounded-xl bg-slate-200 font-bold text-gray-700 dark:text-white dark:text-gray-700">At Rs. {res.price}/- Only</span>

        <div className="flex items-center mt-2.5 mb-5">
           
            <span className="font-bold text-blue-800 text-xs  px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{res.ratings}⭐ ({res.ratingsCount} reviews)</span>
        </div>
        <div className="flex items-center justify-between">
            {/* <span className="text-xl font-bold text-gray-900 dark:text-white">Price : {res.price}/-</span> */}
            <p onClick={()=>handleadd(res.name)} className="text-white  bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</p>
        </div>
    </div>
</div>

    {
                openquickreview && <Quickreview {...props}
                setopenquickreview={setopenquickreview}
                openquickreview={openquickreview}/>
        }

        </div>
    )
}

export default Bottle;