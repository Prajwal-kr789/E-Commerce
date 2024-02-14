import Electronics from "./Electronics";
import Mockdata from "../Utils/Mockdata.json";
import Clothes from "./Bottle";

const Bottlecontroller = () => {

    const clothcard = Mockdata?.maindata;

    return(
        <div className="mt-20  ml-14 mr-8 ">
            <hr className="h-3"/>
        <h2 className="text-3xl font-bold text-center text-orange-400 dark:text-white border-b-2 border-gray-300 dark:border-gray-700 pb-2 mb-4">Daily Use</h2>
        <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-10 mt-10  ">
            {
                    clothcard.cards
                    .filter((res) => res.category === "Bottle")
                    .map((res, index) => (
                        <div key={index} className="">
                            <Clothes
                                res={res}
                            />
                        </div>
                    ))
        }
    </div>
            
        </div>
    )
}

export default Bottlecontroller;