import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../App";
import Loading from "../components/reusables/Loading";
import Heading from "../components/reusables/Heading";
import Empty from "../components/reusables/Empty";
const Bookmark = () => {
    const {data,isLoading,setIsLoading,filterName} = useContext(dataContext);
    const [bookmark, setBookmark] = useState([])

    useEffect(()=>{
        if(data && data.length > 0){
            const marked = data.filter((event)=> event.bookmarked === true);
            setBookmark(marked);
        }
    },[data])

    useEffect(()=>{
        setIsLoading(true)
        if(bookmark) setIsLoading(false)
    },[setIsLoading,bookmark])

    return ( 
        <>
        < Header />
        <div className="flex p-2 md:p-0 min-h-screen w-full">
            <div className="hello container md:w-[55%] mx-auto">
                
                < Heading name="Bookmark" filterName={filterName} />


               
                {bookmark && !isLoading && bookmark.length > 0 ? ( bookmark.map((event,index) => (
                    < Card
                        key={index}
                        event={event}
                    />
                ))):
                (
                    !isLoading && <div className="empty flex justify-center items-center my-2">
                        <div className="text-2xl font-bold">
                            <Empty />
                        </div>
                    </div>
                )}

                {isLoading && <div className="empty flex justify-center items-center my-2">
                        <div className="text-2xl font-bold">
                            < Loading />
                        </div>
                    </div>}


            </div>
        </div>
        < Footer />
        </>
     );
}
 
export default Bookmark;