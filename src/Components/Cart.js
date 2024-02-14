import React from 'react'
import { useSelector } from 'react-redux'
import Quickreview from './Quickreview'
import Showcart from './Showcart';
import { useDispatch } from 'react-redux';
import { removeItem,clearCart} from '../Utils/CartSlice';

const Cart =()=> {


  const dispatch = useDispatch();

    const cartitems = useSelector((store)=>store.cart.items)
    console.log(cartitems);

    const handleremove = () =>{
      dispatch(removeItem());
    }
    
    const handleclear = () =>{
      dispatch(clearCart());
    }

  return (
    <div className='h-screen mt-20'>
      <hr className='h-2 '/>
      <p className='text-center  text-3xl m-10 text-gray-600 font-bold'>Cart</p>
      {cartitems.length === 0 ? (
                <p className='text-center text-blue-500 text-2xl m-10  font-bold'>The Cart is <span className='text-red-400'>Empty!!!</span>  ,<br /> Go on Shopping...</p>
            ) : (
                cartitems.map((name) => <Showcart name={name} />)
            )}
            {
              cartitems.length !== 0 ? <div className='flex justify-center items-center flex-col'>
              <p onClick={handleremove} class="text-white mt-5  bg-black hover:cursor-pointer hover:bg-gray-800 w-3/12 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Remove Item</p>
              <p onClick={handleclear} class="text-white mt-5 bg-black hover:cursor-pointer hover:bg-gray-800 w-3/12 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Clear Cart</p></div>  :""
            }
      

      

    </div>
  )
}

export default Cart
