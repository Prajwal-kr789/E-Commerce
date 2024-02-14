import { useState } from "react";
import Quickreview from "./Quickreview";
import { useDispatch } from 'react-redux';
import { addItem } from '../Utils/CartSlice';

const Electronics = (props) =>{

    const {name, ratings, price, ratingsCount, img, category, seller, shipping, stock} = props;
    const[openquickreview,setopenquickreview] = useState(false)

    
    const dispatch = useDispatch();
    const handleadd = (name)=>{
        dispatch(addItem(name));
    }

    return(
        <div>
<div  class="max-w-lg w-full lg:flex ">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
    <img src={img} onClick={()=>setopenquickreview(true)} alt="" />
  </div>

  <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light dark:bg-gray-800  bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      
      <div class="text-black font-semibold text-xl mb-2 dark:text-white">{name}</div>

      <div className=''>
                <span class="text-lg font-bold  text-gray-900 dark:text-white">Price : {price}/-</span>
    </div>

    </div>
    <div class="flex items-center -mt-5">
      <div class="text-sm">
        
        {/* <p class="text-blue-600 font-bold leading-none">{ratings}⭐({ratingsCount} reviews)</p> */}
        {/* <p class="text-blue-600 font-bold leading-none">Shipping in {shipping} days</p> */}
        <p class="text-blue-600 font-bold mt-2">Available : {stock} ({stock !== null ?"In stock" : "Out of stock"})</p>
      </div>
      <p onClick={()=>handleadd(name)} class="text-white ml-auto bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</p>

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
export default Electronics;