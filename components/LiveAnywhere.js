import live from "../utils/live";
import Image from 'next/image';
import brabus from '../images/brabus.jpg';
function LiveAnywhere(props) {
    return (
        <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {Object.entries(live).map(([key,{ name, distance}])=>(
                <div key={key} className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
                    {/* right image */}
                    <div className="relative h-60 w-60 ">
                        <Image src={brabus} layout="fill" className="rounded-xl" alt="Takunda"/>
                    </div>
                    <h3 className="text-2xl mt-3"> {name} </h3>
                </div>
            ))}
        </div>
    );
}

export default LiveAnywhere;