import { FaBookmark,FaSearchLocation } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../App";

const Card = ({event}) => {
    const {setEvents} = useContext(dataContext)

    const handleBookmark = (id)=>{
        console.log(id)
        setEvents((prev)=>
            prev.map((newEvent)=> newEvent.eventId === id ? {...newEvent,bookmarked : !newEvent.bookmarked} : newEvent)
        )
        console.log(event.bookmarked)
    }

    return ( 
        <div id={event.eventId.toString()} className="card-container w-full flex  mb-5 p-2 gap-3 justify-between">
                    <div className="day w-[15%] flex flex-col items-center gap-4 p-1 font-semibold">
                        <div className="date">{event.date}</div>
                        <div onClick={()=>handleBookmark(event.eventId)} className="bookmark hover:animate-pulse cursor-pointer">
                            < FaBookmark size={20} color={event.bookmarked ? "#ffe300" : ""} />
                        </div>
                    </div>
                    <Link className="card min-w-[80%] p-4 flex md:flex-row flex-col-reverse gap-1 m:gap-3 justify-between shadow-lg rounded-3xl backdrop:blur-xl flex-grow" to={`/event/${event.eventId}`}>
                        <div className="event-details md:w-full flex flex-col gap-2">
                            <h1 className="title text-2xl font-bold">{event.title}</h1>
                            <h3 className="location text-gray-200 flex gap-3 items-center font-semibold">{event.location}< FaSearchLocation size={17}/></h3>
                            <h3 className="category text-gray-500 font-semibold">{event.category}</h3>
                            <h3 className="description text-gray-200 font-semibold">{event.description.substring(0,50)}{event.description.length > 50 && "...."}</h3>
                        </div>
                        <div className="event-img w-[200px] h-[200px] md:w-[120px] md:h-[120px] rounded-2xl overflow-hidden relative">
                            <img src={event.image} alt={`image of ${event.title}`} className="absolute inset-0 w-full h-full object-cover" />
                        </div>

                    </Link>
                </div>
     );
}
 
export default Card;