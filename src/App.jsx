import Bookmark from "./pages/Bookmark";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Form from "./pages/Form";
import Error404 from "./pages/Error404";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css'
import { useState,useEffect, createContext } from "react";

export const dataContext = createContext();

function App() {
  const [events,setEvents] = useState([]);
  const [data, setData] = useState();
  const [isLoading,setIsLoading] = useState(true)
  const [filterName, setFilterName] = useState("")
  useEffect(()=>{
    const userEvent = JSON.parse(localStorage.getItem("events")) || []
    fetch("/events.json")
    .then((res)=> res.json())
    .then((data)=>{
      const combinedEvents = [...userEvent,...data,]
      console.log('Combined Events:', combinedEvents);
      setEvents(combinedEvents)
    })
    .catch((err)=>console.log(err))
  },[])

  useEffect(() => {
    if (events.length > 0) {
      setData(events);
    }
  }, [events]);

  // console.log(events)

  const router = createBrowserRouter([
    {
      path: "/",
      element: < Home/>
    },
    {
      path: "/bookmark",
      element: < Bookmark/>
    },
    {
      path: "/event/:id",
      element: < Event/>
    },
    {
      path: "/form",
      element: < Form/>
    },
    {
      path: "*",
      element: < Error404/>
    },
  ]);

  return (
    <>
      <dataContext.Provider value={{events,setEvents,data,setData,isLoading,setIsLoading,filterName,setFilterName}}>
        < RouterProvider router={router} />
      </dataContext.Provider>
    </>
  )
}

export default App
