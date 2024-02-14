import { useDispatch } from "react-redux";
import { addItem } from "../Utils/CartSlice";



const Quickreview = (props) =>{

    const {name, ratings, price, ratingsCount, img, category, seller, shipping, stock ,setopenquickreview,openquickreview,ress} = props;
    const dispatch = useDispatch();

    const handleadd = (name) =>{
      dispatch(addItem(name))
    } 

    return(
        <div>
  
<div class="relative z-10" role="dialog" aria-modal="true">

  <div class="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">

      <div class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
        <div  class="relative  flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <button  type="button" class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8" onClick={()=>{setopenquickreview(false);console.log(openquickreview)}}>
            ❌
          </button>

          <div class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <div class="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              <img src={img} alt="Two each of gray, white, and black shirts arranged on table." class="object-cover object-center"/>
            </div>
            <div class="sm:col-span-8 lg:col-span-7">
              <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">{name}</h2>

              <section aria-labelledby="information-heading" class="mt-2">
                <h3 id="information-heading" class="sr-only">Product information</h3>

                <p class="text-xl text-gray-900">Price : {price}/-</p>

                <div class="mt-6">
                  <h4 class="sr-only">Reviews</h4>
                  <div class="flex items-center">

                    <p class="sr-only">3.9 out of 5 stars</p>

                    <div className="flex flex-col">
                    <p class="ml-3 text-sm font-medium text-indigo-600 ">{ratings}⭐({ratingsCount} reviews)</p>
                    <p class="ml-3 text-sm font-medium text-indigo-600 ">Available : {stock} ({stock !== 0 ? "In stock" :"Out of stock"})</p>
                    <p class="ml-3 text-sm font-medium text-fuchsia-600 ">Shipping in {shipping} days</p>
                    <p class="ml-3 text-sm font-medium text-black ">Seller : {seller}</p>
                    <p class="ml-3 text-sm font-medium text-black ">Category : {category}</p>
                    </div>
                  </div>
                </div>
              </section>

              <section aria-labelledby="options-heading" class="mt-10">
                <h3 id="options-heading" class="sr-only">Product options</h3>

                  <button type="submit" onClick={()=>handleadd(name)} class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Quickreview;