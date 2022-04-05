import Image from 'next/image';
import brabus from '../images/brabus.jpg';
function LargeCard({ image, title, description, buttonText}) {
    return (
        <div className="relative cursor-pointer py-16">
            <div className="relative h-80 min-w-[300px]">
                <Image src={image} layout="fill" objectFit="cover" className="rounded-2xl opacity-20" alt="Header image"/>
            </div>
            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3 w-64 text-gray-300"> {title}</h3>
                <p className="text-sm text-gray-400 font-bold"> {description}</p>
                <button className="active:shadow-blue-200 transition transform duration-300 text-sm text-gray-300 bg-gray-900 px-4 py-2 rounded-full mt-5 shadow-md hover:scale-105 hover:shadow-blue-800">{buttonText}</button>
            </div>
        </div>
    );
}

export default LargeCard;