import Image from 'next/image';
import brabus from '../images/brabus.jpg';
function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image
                src={brabus}
                alt="My Banner"
                layout="fill"
                objectFit="cover"
                className="opacity-20"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">
                    Not sure where to go? Perfect.
                </p>
                <button className="bg-gray-900 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-100">Search</button>
            </div>
        </div>
    );
}

export default Banner;