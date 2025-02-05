import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"


const Root = () => {
  return (
    <div>
      
      <NavBar />
      <Outlet />
      <div className="min-h-[calc(100vh-450px)]"></div>
      <Footer />
      
    </div>
  )
}

export default Root

