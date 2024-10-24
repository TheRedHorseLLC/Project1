import Navbar from "/Users/nduracak/P1/Components/Navbar/Navbar.jsx"
import GridCards from "../Components/GridCards/GridCards";
import Carousel from "../Components/Carousel/Carousel.jsx"
import Footer from "/Users/nduracak/P1/Components/Footer/Footer.jsx"
import "./App.css"

export default function App(){
  return(
    <div>
    <Navbar />
<div className="positions">
   <div className="Carousel"><Carousel /></div>
   <div className="GridCards"> <GridCards /></div>
   <div className="Footer"> <Footer /> </div>
   </div>
    </div>
  )
}