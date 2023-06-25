import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/navbar";
import Footer from "../shared/footer/footer";

const Main = () => {
    return (
        <div>
   <Navbar></Navbar>
   <Outlet></Outlet>
   <Footer></Footer>
        </div>
    )
}
export default Main;