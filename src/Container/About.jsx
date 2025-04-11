import { HeartHandshake, Lightbulb, IdCard, Split, ArrowUpRight  } from "lucide-react";

export default function About(){
    return(
       <>
        <section className="h-screen container max-w-full">
            <div className="items-center justify-center w-1/2 mx-auto mt-20">
                <h1 className="items-center leading-[75px] text-center">
                    Why Choose <span className="text-Primary">Cleaning Rabbit</span>
                </h1>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-10">
                <div className="col-span-4 gap-9 flex mx-auto">
                    <div className="border-Paragraph border-1 rounded-3xl h-72 w-[260px] p-5 shadow-lg shadow-gray-400/50">
                      <Lightbulb className="w-20 h-20 text-Primary" />
                      <h2 className="font-semibold text-[26px] leading-[32px] my-2 ">
                        Easy &<br/> Convenient
                      </h2>
                      <p className="font-bold text-base text-[18px] text-Paragraph"> 
                        Find and book cleaning Services in a minutes.
                      </p>
                    </div>

                    <div className="border-Paragraph border-1 rounded-3xl h-72 w-[260px] p-5 shadow-lg shadow-gray-400/50">
                       <HeartHandshake className="w-20 h-20 text-Primary"/>
                       <h2 className="font-semibold text-[26px] leading-[32px] my-2">
                        Trusted Professionals
                      </h2>
                      <p className="font-bold text-base text-[18px] text-Paragraph"> 
                        Review cleaners profiles, ratings, and photos before booking.
                      </p>
                    </div>

                    <div className="border-Paragraph border-1 rounded-3xl h-72 w-[260px] p-5 shadow-lg shadow-gray-400/50">
                       <IdCard className="w-20 h-20 text-Primary"/>
                       <h2 className="font-semibold text-[26px] leading-[32px] my-2">
                        Secure<br/> Payments
                      </h2>
                      <p className="font-bold text-base text-[18px] text-Paragraph"> 
                        Pay securely with your credit card for a hassle-free experience.
                      </p>
                    </div>

                    <div className="border-Paragraph border-1 rounded-3xl h-72 w-[260px] p-5 shadow-lg shadow-gray-400/50">
                       <Split className="w-20 h-20 text-Primary"/>
                       <h2 className="font-semibold text-[26px] leading-[32px] my-2">
                        Flexible<br/> scheduling
                      </h2>
                      <p className="font-bold text-base text-[18px] text-Paragraph"> 
                        Choose the date and time that works best for you.
                      </p>
                    </div>
                </div>
            </div>

            {/* EXPLORE IMAGES */}
            <div className="grid grid-cols-4  mt-20 mb-10 mx-auto">
                <div className="col-span-4 flex gap-10 mx-auto">
                    <div className="h-96 w-[550px] relative">
                    <img src="/images/kitchen.jpg" alt="" className="h-96 w-[550px] bg-cover bg-no-repeat rounded-3xl shadow-lg"/>

                    <div className="absolute flex items-center justify-center left-10 bottom-6">
                        <h2 className="text-white font-extrabold text-[45px]">Home Cleaning</h2>
                        <button className="bg-Primary rounded-full p-3 items-center justify-center ml-32">
                         <ArrowUpRight className="text-white font-extrabold text-[45px]"/>
                        </button>
                    </div>
                    </div>

                    <div className="h-96 w-[550px] relative">
                        <img src="/images/office.jpg" alt="" className="h-96 w-[550px] bg-cover bg-no-repeat rounded-3xl shadow-lg"/>

                        <div className="absolute flex items-center justify-center left-10 bottom-6 ">
                            <h2 className="text-white font-extrabold text-[45px]">
                                Offices Cleaning
                            </h2>
                            <button className="bg-Primary rounded-full p-3 items-center justify-center ml-28">
                             <ArrowUpRight className="text-white font-extrabold text-[45px]"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       </>
    );
}