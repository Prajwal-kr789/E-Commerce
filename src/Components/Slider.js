import Imges_scroll from "./Imges_scroll";
import Mockdata from "../Utils/Mockdata.json"
import { useEffect } from "react";

const Slider = () =>{
    const slidercards = Mockdata?.maindata;


    return (
        <div className="mt-10 ml-10 mr-10">
                <hr className="h-px bg-blue-500" />
                <hr className="h-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

                    <h2 className="text-3xl text-center font-bold text-gray-600 dark:text-white border-b-2 border-gray-300 dark:border-gray-700 pb-2 mb-4">Newly added</h2>

        
        <div className="overflow-x-auto whitespace-nowrap transition-all duration-1000 ease-in">
            {
                slidercards.cards
                    .filter((res) => res.category === "Bag")
                    .map((res, index) => (
                        <div key={index} className="inline-block">
                            <Imges_scroll
                                name={res.name}
                                ratings={res.ratings}
                                price={res.price}
                                ratingsCount={res.ratingsCount}
                                img={res.img}
                                category={res.category}
                                seller={res.seller}
                                shipping={res.shipping}
                                stock={res.stock}
                            />
                        </div>
                    ))
            }
            </div>
        </div>
    );
}

export default Slider;