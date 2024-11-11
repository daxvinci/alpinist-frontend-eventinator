import { useParams } from "react-router-dom";
import { FaArrowCircleLeft,FaCalendarAlt,FaClock,FaSearchLocation } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../App";
import Heading from "../components/reusables/Heading";


const Event = () => {
    const {data,setIsLoading,isLoading} = useContext(dataContext)
    const params = useParams();
    const [eventDetail,setEventDetail] = useState()
    const [formattedDate, setFormattedDate] = useState("");

    //for date
    

    useEffect(()=>{
        setIsLoading(true)
        if(data){
          const found = data.find((event)=>event.eventId === parseInt(params.id))
          setEventDetail(found)
          if(found){
            const dateObject = new Date(found.date)
            const options = { month: 'long', day: 'numeric', year: 'numeric' }
            const readDate = dateObject.toLocaleDateString('en-US', options)
            setFormattedDate(readDate)
            }
          setIsLoading(false)
        }
    },[data,params.id,setIsLoading])

    if (!eventDetail) {

        return (  
            <>
           {isLoading && <div className="container w-full h-screen flex justify-center items-center">
                <div className="flex flex-col items-center gap-4">
                <Link to="/">
                    <FaArrowCircleLeft size={50} />
                </Link>
                <button type="button" className="bg-[#4b55631a] text-white px-4 py-2 rounded flex items-center" disabled>
                <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>

                </svg>
                Loading...
            </button>
                </div>
            </div>}
            </>  
          );
    }
    return ( 
        <>
       <div className="min-h-screen w-full p-5">
                <Link to="/">
                    < FaArrowCircleLeft size={40} />
                </Link>
            <div className="hello container w-[50%] p-5 mx-auto">
                < Heading />
                <div className="w-full flex flex-col gap-4 justify-between details-card bg-[#363a3d1c] rounded-3xl p-8">
                    <div className="image-detail w-[70px] h-[70px] md:min-w-[250px] md:min-h-[250px] self-center rounded-3xl relative overflow-hidden">
                        <img className="object-cover absolute inset-0 w-full h-full " src={eventDetail.image} alt={`image of ${eventDetail.title}`} />
                    </div>
                    <h2 className="text-3xl font-bold">{eventDetail.title}</h2>
                    <p className="description text-lg font-semibold">{eventDetail.description}</p>
                    <div className="details-date flex gap-3 items-center">
                        < FaCalendarAlt size={20}/>
                        <div className="actual-date">{formattedDate}</div>
                    </div>
                    <div className="details-time flex gap-3 items-center">
                        < FaClock size={20}/>
                        <div className="actual-time">{eventDetail.time}</div>
                    </div>
                    <div className="details-location flex gap-3 items-center">
                        < FaSearchLocation size={20}/>
                        <div className="actual-location">{eventDetail.location}</div>
                    </div>
                    <div className="details-category flex gap-3 items-center">
                        < BiCategory size={20}/>
                        <div className="actual-category">{eventDetail.category}</div>
                    </div>

                </div>
            </div>
        </div>
        </>
     );
}
 
export default Event;