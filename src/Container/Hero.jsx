import Navbar from "./Navbar";
export default function Hero(){

    return(
        <>
        <Navbar/>
        <section className="hero relative grid grid-cols-2  h-screen container max-w-full">
            
         <div className="shadowy">
            <div className="my-24  pl-20 ">
                <h1 className="leading-[80px] font-bold">
                Find Your<br/> <span className="text-Primary">Perfect</span> Cleaning<br/> Match!
                </h1>
                <p className="font-bold text-base text-[17px] text-Paragraph my-8">Connect with trusted cleaning professinals instantily. Book, Chat and pay securely, all in one place.
                </p>

                <div className="bg-white rounded-full flex items-center justify-between p-3 shadow-md shadow-gray-300 w-[500px]">
                    <input type="text" placeholder="Find the cleaner...." className="p-2 ml-2 font-bold border-none focus:outline-none w-[300px]"/>
                    <button className="bg-Primary text-white rounded-full p-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
                    </button>
                </div>
            </div>
         </div>
        </section>
        </>
    );
}