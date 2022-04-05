import explore from "../utils/explore";
import Image from 'next/image';
import brabus from '../images/brabus.jpg';
import {HeartIcon} from "@heroicons/react/outline";
import {StarIcon} from "@heroicons/react/solid";
function SearchResults(props) {
    return (
        <div className="flex flex-col">
            {Object.entries(explore).map(([key,{ name, distance}])=>(
                <div key={key} className="flex items-center first:border-t-2 border-gray-600 py-7 px-5 hover:opacity-60 cursor-pointer hover:shadow-lg shadow-gray-600 hover:scale-105 transition transform duration-200 ease-out">
                    {/* right image */}
                    <div className="relative h-24 w-40 md:w-80 md:h-52 flex-shrink-0">
                        <Image src={brabus} layout="fill" className="rounded-lg"/>
                    </div>
                    {/* left container */}
                    <div className="flex flex-col flex-grow pl-5">
                        <div className="flex justify-between">
                            <p> {name} </p>
                            <HeartIcon className="h-7 cursor-pointer"/>
                        </div>
                        <h4 className="text-xl"> {name}</h4>
                        <div className="border-b w-10 pt-3"/>
                        <p className="pt-2 text-sm text-gray-200">
                            Description
                        </p>
                        <div className="flex justify-between items-end pt-5" >
                            <p className="flex items-center" >
                                <StarIcon className="h-5 text-red-600"/>
                                <h1 className="text-right font-extrabold">
                                    4.7
                                </h1>
                            </p>

                            <di>
                                <p className="text-lg font-semibold lg:text-2xl">
                                    $2.55
                                </p>
                                <p className="text-right font-extrabold">
                                    $3,56
                                </p>
                            </di>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default SearchResults;