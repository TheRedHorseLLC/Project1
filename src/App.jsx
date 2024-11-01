import Navbar from "/Users/nduracak/P1/Components/Navbar/Navbar.jsx"
import About from "/Users/nduracak/P1/Components/About/About.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "/Users/nduracak/P1/Components/Home/Home.jsx"
import ErrorMessage from "/Users/nduracak/P1/Components/Error/ErrorMessage.jsx"
import Help from "/Users/nduracak/P1/Components/Help/Help.jsx"
import Contact from "/Users/nduracak/P1/Components/Contact/Contact.jsx"
import "./App.css"

const router = createBrowserRouter([
{
  element:<Navbar />,
  children: [
    {
     path: "/theredhorse/",
      element:<Home />
    },
    {
      path: "/theredhorsellc/About",
      element:<About />
    },
    {
      path: "/theredhoursellc/Help",
      element: <Help />
    },
    {
      path: "theredhorsellc/Contact",
      element: <Contact />
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