import Header from "../components/Header"
import Card from "../components/Card";
import Footer from "../components/Footer";
import Loading from "../components/reusables/Loading";
import Heading from "../components/reusables/Heading";
import Empty from "../components/reusables/Empty";
import { useContext,useEffect} from "react";
import { dataContext } from "../App";

const Home = () => {
    const {data,isLoading,setIsLoading,filterName}= useContext(dataContext);

    useEffect(() => {
        if (data) {
          setIsLoading(false)
        }
      }, [data,setIsLoading])

    console.log(data)
    return ( 
        <>
        < Header/>
        <div className="flex p-2 md:p-0 min-h-screen w-full">
            <div className="hello container md:w-[55%]  mx-auto">
                < Heading name="Eventinator" filterName={filterName}/> 

                {data && !isLoading && data.length > 0 ? ( data.map((event,index) => (
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
 
export default Home;