import Electronics from "./Electronics";
import Mockdata from "../Utils/Mockdata.json"
import Cap from "./Cap";

const Capcontroller = () => {

    const electronicard = Mockdata?.maindata;

    return(
        <div className="mt-20">
            <hr className="h-2" />
        <h2 className="text-3xl font-bold text-purple-600 text-center dark:text-white border-b-2 border-gray-300 dark:border-gray-700 pb-2 mb-4">Caps</h2>
        <div className="grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  place-items-center gap-4 mt-10">
            {
                    electronicard.cards
                    .filter((res) => res.category === "Cap")
                    .map((res, index) => (
                        <div key={index} className="inline-block">
                            <Cap
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
    )
}

export default Capcontroller;