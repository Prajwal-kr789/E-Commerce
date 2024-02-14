import Electronics from "./Electronics";
import Mockdata from "../Utils/Mockdata.json"
import Boot from "./Boot";


const Bootcontroller = () =>{

    const Bootcard = Mockdata?.maindata;

    return(
        <div>

        <div className="mt-32 ml-8 mr-8">
            <hr />
        <h2 className="text-3xl font-bold text-fuchsia-500 text-center dark:text-white border-b-2 border-gray-300 dark:border-gray-700 pb-2 mb-4">Men's Boots</h2>
        <div className="grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {
                    Bootcard.cards
                    .filter((res) => res.category === "Men's Boot")
                    .map((res, index) => (
                        <div key={index} className="inline-block">
                            <Boot
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


        </div>
    )
}

export default Bootcontroller;