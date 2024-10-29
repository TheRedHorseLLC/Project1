import Navbar from "/Users/nduracak/P1/Components/Navbar/Navbar.jsx"
import GridCards from "/Users/nduracak/P1/GridCards/GridCards.jsx"
import Carousel from "../Components/Carousel/Carousel.jsx"
import Footer from "/Users/nduracak/P1/Components/Footer/Footer.jsx"
import "./App.css"

export default function App(){
  return(
    <div>
    <Navbar />
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