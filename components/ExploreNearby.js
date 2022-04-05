import explore from "../utils/explore";
import Image from 'next/image';
import brabus from '../images/brabus.jpg';
function ExploreNearby(props) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {Object.entries(explore).map(([key,{ name, distance}])=>(
                <div key={key} className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-800 hover:scale-105 transition transform duration-200 ease-out">
                 {/* right image */}
                    <div className="relative h-16 w-16 ">
                        <Image alt="HELLO BNB" src={brabus} layout="fill" className="rounded-lg"/>
                    </div>
                {/* left container */}
                    <div>
                        <h3> {name} </h3>
                        <h3 className="text-gray-600"> {distance}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ExploreNearby;