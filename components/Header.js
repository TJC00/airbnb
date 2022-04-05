import {GlobeIcon, MenuIcon, SearchIcon, UserCircleIcon} from "@heroicons/react/solid";
import {useState} from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker} from "react-date-range";
import {UsersIcon} from "@heroicons/react/outline";
import {useRouter} from "next/router";
import {format} from "date-fns";

function Header({placeholder}) {
    const [searchInput, setSearchInput]= useState('');
    const [startDate, setStartDate]=useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numberOfGuest, setNumberOfGuest]=useState(1);
    const  formattedStartDate=format(new Date(startDate), "dd MMM yy");
    const  formattedEndDate=format(new Date(endDate), "dd MMM yy");
    const range=`${formattedStartDate} - ${formattedEndDate}`;
    const router = useRouter();

    const selectionRange={
        startDate:startDate,
        endDate:endDate,
        key:"selection",
    };

    const handleSelect = (ranges) => {
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
    };
    
    const resetInput = () => {
      setSearchInput("");
    }
    
    const search = () => {
      router.push({
          pathname:"/search",
              query:{
              location: searchInput,
                  startDate:endDate.toISOString(),
                endDate:endDate.toISOString(),
                  numberOfGuest:numberOfGuest,
            },
        });
    };
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-gray-900 shadow-md p-5 md:px-10">
        {/*    left*/}
            <div onClick={ ()=> router.push("/")} className="relative flex items-center h-10 cursor-pointer hover:animate-bounce my-auto border-gray-500">
                <h1 className="p-2 text-gray-400 text-2xl md:text-4xl font-bold animate-pulse shadow-lg rounded-lg shadow-gray-600">
                    AIRBNB
                </h1>
            </div>
        {/*    Middle- Search Bar*/}
            <div className="flex items-center md:border-2 md:border-gray-800 rounded-full py-2 md:shadow-md shadow-2xl">
                <input
                    value={searchInput}
                    onChange={(e)=> setSearchInput(e.target.value)}
                    type="text" className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-200 placeholder-gray-100 capitalize "
                    placeholder={ placeholder || "Type Search "}/>
                <SearchIcon className="h-8 bg-gray-200 text-gray-500 p-2 rounded-full cursor-pointer hidden md:inline-flex md:mx-2"/>
            </div>
        {/*    Right*/}
            <div className="flex items-center space-x-4 justify-end">
                <p className="hidden md:inline cursor-pointer">
                    Become a host
                </p>
                <GlobeIcon className="h-6 cursor-pointer"/>
                <div className="flex items-center space-x-2">
                    <MenuIcon className="h-6 cursor-pointer"/>
                    <UserCircleIcon className="h-6 cursor-pointer"/>
                </div>
            </div>
            {/* Date range picker */}
            { searchInput &&
                <div className="flex flex-col col-span-3 mx-auto mt-0">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={ new Date()}
                        rangeColors={["#4b5563"]}
                        onChange={handleSelect}
                        className="text-gray-600 bg-gray-800"
                    />
                    <div className="flex items-center border-b mb-4 border-gray-700">
                        <h1 className="text-2xl flex-grow font-semibold"> Number of Guests</h1>
                        <UsersIcon className="h-5" />
                        <input
                            value={numberOfGuest}
                            onChange={(e)=>setNumberOfGuest(e.target.value)}
                            type="number" className="w-12 pl-2 text-lg font-semibold outline-none text-gray-600 bg-gray-800 rounded-full"/>
                    </div>
                    <div className="flex items-center space-x-10">
                        <button onClick={resetInput} className="flex-grow bg-gray-800 rounded-full text-gray-300 font-semibold"> Cancel </button>
                        <button onClick={search} className="flex-grow bg-gray-800 rounded-full text-gray-300 font-semibold"> Search </button>
                    </div>
                </div>
            }
        </header>
    );
}

export default Header;