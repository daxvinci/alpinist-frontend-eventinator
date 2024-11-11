import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from "../components/reusables/Loading";
import Button from "../components/reusables/Button";
import Heading from "../components/reusables/Heading";
import { useContext } from "react";
import { dataContext } from "../App";

const Form = () => {
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(false)
    const {setEvents} = useContext(dataContext)

    const handleSubmit = (event)=>{
        setIsDisabled(true)
        event.preventDefault()
        const {eventName, date,time,location,category,description,picture} = event.target
        

        //for picutre
        const file = picture.files[0];
        const imageUrl = URL.createObjectURL(file)

        setEvents((prev) =>{
            const newEventId = prev.length > 0 ? Math.max(...prev.map(event => event.eventId)) + 1 : 0
            const newObj = {
                eventId:newEventId,
                title: eventName.value,
                date: date.value,
                time:time.value,
                location: location.value,
                category: category.value,
                image: imageUrl,
                description: description.value,
                bookmarked: false
              }

              const savedEvents = JSON.parse(localStorage.getItem("events")) || []
              savedEvents.push(newObj)
              localStorage.setItem("events", JSON.stringify(savedEvents))

              return[...prev,newObj]
    })
    navigate("/")
    setIsDisabled(false)
    }

    return ( 
        <>
            <div className="min-h-screen w-full p-3 md:p-5">
                <Link to="/">
                    < FaArrowCircleLeft size={40} />
                </Link>
            <div className="hello container md:w-[50%] p-2 md:p-5 mx-auto">
                < Heading name="Add an Event" />
                <div className="w-full flex flex-col gap-4 justify-between details-card bg-[#363a3d1c] rounded-3xl p-3 md:p-8">
                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 justify-between p-8">
                    <div className="input-group">
                        <label className="block">
                            <span className="sr-only">Choose profile photo</span>
                            <input type="file" name="picture" className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                            "/>
                    </label>
                    </div>
                    <div className="input-group">
                        <label htmlFor="eventName"></label>
                        <input className="w-full bg-gray-300 rounded-3xl py-1.5 pl-7 pr-10 text-gray-900 hover:ring-2 ring-inset hover:ring-blue-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-700 outline-none sm:text-sm/6" type="text" name="eventName" id="eventName" placeholder="Event name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="date"></label>
                        <input required className="bg-gray-300 text-gray-900 px-3 py-2 rounded-3xl outline-none hover:ring-2 ring-inset hover:ring-blue-400 focus:ring-2 focus:ring-inset focus:ring-blue-700"  type="date" name="date" id="date" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="time"></label>
                        <input required className="bg-gray-300 rounded-3xl py-1.5 pl-7 pr-10 text-gray-900 hover:ring-2 ring-inset hover:ring-blue-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-700 outline-none sm:text-sm/6" placeholder="time" type="time" name="time" id="time" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="location"></label>
                        <input required className="bg-gray-300 rounded-3xl py-1.5 pl-7 pr-10 text-gray-900 hover:ring-2 ring-inset hover:ring-blue-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-700 outline-none sm:text-sm/6" placeholder="location" type="text" name="location" id="location" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="category"></label>
                        <select className="bg-gray-300 w-full rounded-xl py-1.5 pl-7 pr-10 text-gray-900 hover:ring-2 ring-inset hover:ring-blue-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-700 outline-none sm:text-sm/6" required name="category" id="category">
                            <option value="">Select a category</option>
                            <option value="Music">Music</option>
                            <option value="Art">Art</option>
                            <option value="Sports">Sports</option>
                            <option value="Technology">Technology</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="description"></label>
                        <textarea required className="bg-gray-300 h-28 w-full resize-none rounded-xl py-1.5 pl-7 pr-10 text-gray-900 hover:ring-2 ring-inset hover:ring-blue-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-blue-700 outline-none sm:text-sm/6" name="description" id="description" placeholder="Event description"></textarea>
                    </div>
                    <div className="loading-button flex gap-5 w-full justify-end">
                        {isDisabled && < Loading />}
                        < Button isDisabled={isDisabled} name ="Save" />
                    </div>
                    </form>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Form;