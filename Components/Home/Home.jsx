import Carousel from "../Carousel/Carousel"
import GridCards from "../../GridCards/GridCards"
import Footer from "../Footer/Footer"

export default function home(){
    return(
    <div>
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
    )}