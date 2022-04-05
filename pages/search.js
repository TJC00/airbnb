import Header from "../components/Header";
import Footer from "../components/Footer";
import {useRouter} from "next/router";
import {format} from "date-fns";
import SearchResults from "../components/SearchResults";

function Search( searchResults) {
    const router = useRouter();
    const {location, startDate, endDate, numberOfGuest}=router.query;
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;
    return (
        <div>
            <Header placeholder={`${location} | ${range}| ${numberOfGuest} `}/>
            <main>
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">
                        300+ Stays - {range} - for {numberOfGuest}  guests
                    </p>
                    <h1 className="text-xl font-semibold mt-2 mb-6"> Stays in {location}</h1>
                    <div className=" hidden md:inline-flex overflow-scroll scrollbar-hide mb-5 space-x-3 whitespace-nowrap">
                        <p className="button">Cancellation Flex</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Cancellation Flex</p>
                        <p className="button">Cancellation Flex</p>
                    </div>
                </section>
                <section>
                    <SearchResults/>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default Search;

export async function getServerProps(){
    const  searchResults = await fetch("URL LINK")
        .then(res => res.json());

    return{
        props:{
            searchResults,
        }
    }
}