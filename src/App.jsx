import Navbar from "/Users/nduracak/P1/Components/Navbar/Navbar.jsx"
import About from "/Users/nduracak/P1/Components/About/About.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "/Users/nduracak/P1/Components/Home/Home.jsx"
import ErrorMessage from "/Users/nduracak/P1/Components/Error/ErrorMessage.jsx"
import Help from "/Users/nduracak/P1/Components/Help/Help.jsx"
import Contact from "/Users/nduracak/P1/Components/Contact/Contact.jsx"
import Inventory from "/Users/nduracak/P1/Components/Inventory/Inventory.jsx"
import LocalMap from "../Components/LocalMap/LocalMap"
import Login from "/Users/nduracak/P1/Components/Login/Login.jsx"
import SignUp from "/Users/nduracak/P1/Components/SignUP/SignUp.jsx"
import "./App.css"

const router = createBrowserRouter([
{
  element:<Navbar />,
  children: [
    {
     path: "/Home",
      element:<Home />
    },
    {
      path: "/Inventory",
      element:<Inventory />
    },
    {
      path: "/About",
      element:<About />
    },
    {
      path: "/Help",
      element: <Help />
    },
    {
      path: "/Contact",
      element: <Contact />
    },
    {
      path: "/LocalMap",
      element: <LocalMap />
    },
    {
      path: "/Login",
      element: <Login />
    },
    {
      path: "/SignUp",
      element: <SignUp />
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
    <RouterProvider router={router} />
    </div>
  )
}