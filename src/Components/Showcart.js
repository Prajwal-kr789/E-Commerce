import React from 'react'

const Showcart=(props) => {

    const {name} = props;


  return (
        <div className='flex justify-center items-center mt-10'>

            <div className=" border w-3/12 border-1 rounded-xl border-solid border-[#ccc] py-4 px-4 bg-gray-300 dark:bg-black ">

                <p className="text-center font-bold text-blue-500 dark:text-white">{name}</p>
                
            </div>
            
             {/* <h2>{Items.Items.map((ress) =><>
                    
                    <div className="bg-slate-100 border ml-96 w-6/12 flex items-center justify-center border-slate-400 p-3 my-1 flex justify-between rounded-lg ">
                        <div className="w-6/12">
                            <span>{ress.card.info.isVeg?"🟢":"🔴"}</span>
                            <span className="font-bold text-blue-500">{ress.card.info.name}</span>
                            <span>    ( ₹ {ress.card.info.price/100} /-)</span><br />
                            <span className="text-sm">{ress.card.info.description}</span>
                        </div>
                        <div className="">
                            <img className="h-20 rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+ress.card.info.imageId} alt="FOOD ITEM..." />
                            {
                                console.log(ress.card.info.imageId)
                            }
                        </div>
                    </div>
                     </>)}</h2> */}
        </div>
  )
}

export default Showcart
