import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { dataContext } from "../App";

const Header = () => {
    const {events,setData,setFilterName} = useContext(dataContext);
    const [filter, setFilter] = useState();
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? "active routes text-xs md:text-xs nav-item hover:border-b-2 hover:border-amber-400" : "routes text-xs md:text-base nav-item hover:border-b-2 hover:border-amber-400";

    const handleSearch = (e) => {
        if(e.target.value.length >= 0){
            setData(events.filter( data => data.title.toLowerCase().includes((e.target.value).toLowerCase())));
        }
        else{
            setData(events);
        } 
        console.log(events.filter( data => data.title.toLowerCase().includes((e.target.value).toLowerCase())))
    }
    const handleFilter = (category) => {
        if(category.length >= 0){
            setData(events.filter( data => data.category.toLowerCase().includes((category).toLowerCase())));
        }
        else{
            setData(events);
        }
    }

    return ( 
        <nav className = "flex gap-2 w-full md:gap-8 justify-between items-center px-2 md:px-4 py-3 mb-5">
            <div className="logo text-xl ml-0 lg:ml-24 py-2">
                <Link to ="/">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 nav-item hover:text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                </Link>

            </div>
            <div className="flex w-[30%] ">
                <form action="" className="w-full">
                    <label htmlFor="search" className="flex w-full nav-item hover:border-b-2 hover:border-amber-400 rounded-lg py-1 md:py-2 px-2 md:px-5 items-center gap-2 bg-slate-800">
                        <input type="search" id="search" className="bg-slate-800 w-full outline-none" onChange={handleSearch}/>
                        <FaSearch />
                    </label>
                </form>
            </div>
            <div className="tab flex gap-3 md:gap-5 w-[40%] md:w-[30%] text-gray-300 justify-between">
                <Link className={isActive("/bookmark")} to="/bookmark">Bookmark</Link>
                <Link className={isActive("/form")} to="/form">Add Event</Link>
                <div className="routes nav-item hover:border-b-2 hover:border-amber-400 relative group" onClick={() => filter===true ? setFilter(false) : setFilter(true)}>
                    <p className="cursor-pointer text-sm md:text-base">Filter</p>
                    {filter && <div className="absolute py-4 px-5 bg-white rounded-lg w-max right-0 top-8 shadow-inner group-focus:block">
                        {events && <ul>
                            {/* console.log(Array.from(new Set(data.filter(data => data.category.toLowerCase().includes((category).toLowerCase()))))); */}
                            <li className="text-gray-800 hover:text-md text-sm rounded-lg cursor-pointer mb-2" onClick={() => {handleFilter("") ; setFilterName("");}}>Clear</li>
                            {Array.from(new Set(events.map(data => data.category))).map((data, index) => <li className="text-black p-1 hover:bg-slate-500 font-bold hover:text-lg rounded-lg cursor-pointer" onClick={() => {handleFilter(data); setFilterName(data)}} key={index}>{data}</li>)}
                        </ul>}
                    </div>}
                </div>
            </div>
        </nav>
     );
}
 
export default Header;