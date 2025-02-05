import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import { Toaster } from "react-hot-toast"


const Root = () => {
  return (
    <div>  
      <Toaster />    
      <NavBar />
      <Outlet />
      <div className="min-h-[calc(100vh-450px)]"></div>
      <Footer />      
    </div>
  )
}

export default Root

