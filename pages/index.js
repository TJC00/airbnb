import Header from "../components/Header";
import Head from 'next/head'
import Banner from "../components/Banner";
import ExploreNearby from "../components/ExploreNearby";
import LiveAnywhere from "../components/LiveAnywhere";
import LargeCard from "../components/LargeCard";
import brabus from '../images/brabus.jpg';
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="">
         <Head>
             <title>
                 AIRBNB_CLONE
             </title>
         </Head>
    {/*    Header   */}
        <Header/>
    {/*    Banner   */}
        <Banner/>
    {/*    main     */}
        <main className="max-w-6xl mx-auto px-8 sm:px-16">
            <section className="pt-6">
                <h2 className="text-4xl font-semibold pb-5"> Explore Nearby</h2>
            {/*    Pull data from save  */}
            {/*    Explore near by */}
                <ExploreNearby/>
            </section>
            <section className="pt-6">
                <h2 className="text-4xl font-semibold pb-5"> Live Anywhere</h2>
                {/*    Pull data from save  */}
                {/*    Live Anywhere */}
                <LiveAnywhere/>
            </section>
            <section className="pt-6">
                {/*    Large Card */}
                <LargeCard
                    image={brabus}
                    title="The greatest outdoors"
                    description="Wishlist created by AirBnB"
                    buttonText="Get inspired"
                />
            </section>
            <section className="pt-6">
                {/*    Footer */}
                <Footer/>
            </section>
        </main>
    </div>
  )
}
