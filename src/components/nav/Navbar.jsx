import { NavLink } from "react-router-dom";
import logo from "../../assets/1600w-JmYWTjUsE-Q.webp";
import { FaBars,FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {

    const [nav,setNav]= useState(true);
      const handleIcon =()=>{
        nav ?  setNav(false) : setNav(true)
       ;
      }
        return (
        <div className="flex items-center gap-4 md:gap-0 relative">
           <div className="w-3/12">
              <img src={logo} alt="logo" className="w-16 rounded-full object-cover border border-[#131313]"/>
           </div>

           {/*  */}
            <div className="flex justify-end gap-10 w-7/12 ">
                <nav className="hidden md:flex justify-end items-center gap-5 text-slate-600 font-medium">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about"> About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="user">User</NavLink>
                </nav>  
                <input type="text" placeholder="Type here" className="input input-bordered w-full block" />
            </div>
            {/*  */}
             <div>
                <nav className={`${nav ? "hidden -right-60 top-20 transition duration-1000 ease-in-out delay-500" : "md:hidden flex flex-col justify-end items-start gap-5 right-0 top-20 transition duration-1000 ease-in-out  delay-500" } bg-slate-300 p-3 w-48  rounded-md absolute `}>
                    <NavLink to="/" className={"hover:bg-slate-50 hover:pr-6 hover:pl-1 hover:text-black transition duration-300 ease-in-out hover:rounded-md"}>Home</NavLink>
                    <NavLink to="/about"  className={"hover:bg-slate-50 hover:pr-6 hover:pl-1 hover:text-black transition duration-300 ease-in-out hover:rounded-md"}> About</NavLink>
                    <NavLink to="/contact"  className={"hover:bg-slate-50 hover:pr-6 hover:pl-1 hover:text-black transition duration-300 ease-in-out hover:rounded-md"}>Contact</NavLink>
                    <NavLink to="user"  className={"hover:bg-slate-50 hover:pr-6 hover:pl-1 hover:text-black transition duration-300 ease-in-out hover:rounded-md"}>User</NavLink>
                    {/*  */}
                    <div className="flex items-center  gap-2 md:hidden bg-slate-500 px-4 py-1 rounded-md text-white cursor-pointer">
                        <span>Account </span>
                        <FaRegUserCircle />
                    </div>
                </nav>
             </div>
             {/*  */}
            
             <div className="hidden md:flex items-center justify-end gap-3 text-xl font-semibold w-2/12 ">
                 <span>Account</span> <FaRegUserCircle />
             </div>

             <div className="md:hidden flex text-3xl text-slate-500">
                <span onClick={handleIcon}><FaBars /></span>
             </div>
        </div>
    );
};

export default Navbar;