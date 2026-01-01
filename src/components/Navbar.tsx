import { createSignal } from "solid-js";
import logo from "../assets/YouTube_logo.png";

export default function Navbar(){

    const [search, setSearch] = createSignal<boolean>(true);

    const showSearch = () => {

        setSearch(false);

        return;
    }

    return( 
        <>

            <header class="flex flex-row items-center w-full h-14 bg-[#0f0f0f] ">

                <div class="w-5 h-full mr-1.25"> </div>

                {/* This is the side button bruhhh */}

                <div class="flex items-center w-10 h-10  ">
                <button class="p-2 text-white hover:bg-[#272727] rounded-full">
                <svg
                    viewBox="0 0 24 24"
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </button> 

                </div>

                {/* logo */}
                <div class="flex justify-center bg-[#0f0f0f] w-31 h-14">
                    <img class="block p-2" src={ logo } alt="YT" />
                </div>

                {/* UHH SEARCH BAR */}
                <div class="flex items-center">
                <input
                    type="text"
                    placeholder="Search"
                    class="w-90 h-10 px-4 bg-[#121212] text-white border border-[#222222]
                    rounded-l-full focus:outline-none focus:border-blue-500 "/>
            
               <button
                class=" w-16 h-10 flex items-center justify-center bg-[#222222] border border-l-0 border-[#222222] rounded-r-full text-gray-300 hover:bg-[#2a2a2a] active:bg-[#333333]">

                <svg
                  viewBox="0 0 24 24"
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>
        
        

            </header>

        </>
    )



}