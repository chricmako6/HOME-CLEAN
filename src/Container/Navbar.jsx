import { Globe, ChevronDown } from "lucide-react";
export default function Navbar(){
    return(
        <>
        <div className="flex w-screen items-center justify-between p-4 bg-white shadow-md shadow-gray-300 fixed z-10 h-[80px]">
                 <div>
                    <h1  className="text-[50px] pl-20">
                        <span className="text-Primary">Home</span>Clean.
                    </h1>
                </div>
            <nav className="flex items-center pr-10 text-[17px] mr-12">
                <ul className="flex font-semibold gap-8 text-Paragraph items-center">
                    <li>Residential Cleaning</li>
                    <li>Commercial Cleaning</li>
                    <li>Services</li>
                    <div className="border-Primary border-2 rounded-md p-2 px-4 text-Primary">
                       <li>We're Cleaners!</li>
                    </div>
                    {/* Language Icon with Dropdown */}
                    <div className="relative group">
                            <button className="flex items-center gap-2 text-Paragraph">
                                <Globe className="w-5 h-5" />
                                <ChevronDown className="w-5 h-5" />
                            </button>
                            <ul className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 w-32">
                                <li className="p-2 hover:bg-gray-100 cursor-pointer">English</li>
                                <li className="p-2 hover:bg-gray-100 cursor-pointer">Spanish</li>
                                <li className="p-2 hover:bg-gray-100 cursor-pointer">French</li>
                            </ul>
                    </div>
                </ul>
            </nav>
        </div>
        </>
    );
}
