
import { Outlet,useNavigation } from "react-router-dom";
import Navbar from "../nav/Navbar"
import Footer from "../footer/Footer";
const Home = () => {
    const navigation = useNavigation();
    return (
        <div className="border border-red-400 p-4">
              <Navbar></Navbar>
               {
                navigation.state === "loading" ? <div className="w-full mx-auto"> <span className="loading loading-ring loading-lg"></span></div>  : <Outlet></Outlet>
               }
            
             <Footer></Footer>

        </div>
    );
};

export default Home;