import Navbar from "/Users/nduracak/P1/Components/Navbar/Navbar.jsx"
import GridCards from "/Users/nduracak/P1/GridCards/GridCards.jsx"
import Carousel from "../Components/Carousel/Carousel.jsx"
import Footer from "/Users/nduracak/P1/Components/Footer/Footer.jsx"
import Header from "/Users/nduracak/P1/Components/Header/Header.jsx"
import About from "/Users/nduracak/P1/Components/About/About.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "/Users/nduracak/P1/Components/Home/Home.jsx"
import ErrorMessage from "/Users/nduracak/P1/Components/Error/ErrorMessage.jsx"
import "./App.css"

const router = createBrowserRouter([
{
  element:<Navbar />,
  children: [
    {
      path: "/",
      element:<Home />
    },
    {
      path: "/theredhoursellc/About",
      element:<About />
    },
    {
      path: "*",
      errorElement:<ErrorMessage />
    }
  ]
}

])

export default function App(){
  return(
    <div>
        <div>
    <RouterProvider router={router} />
    </div>
    <Header />
   <div className="positions">
    <div className="c1">
    <Carousel />
    <Carousel />
    <Carousel />
    <Carousel />
   </div>
   <div className="GridCards"> <GridCards /></div>
   <div className="GridCards"> <GridCards /></div>
   <div className="GridCards"> <GridCards /></div>
   <div className="GridCards"> <GridCards /></div>
   <div className="c2">
   <Carousel />
   <Carousel />
   <Carousel />
   <Carousel />
   </div>
   <div className="Footer"> <Footer /> </div>
   </div>
    </div>
  )
}