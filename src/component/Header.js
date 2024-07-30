import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utilites/usercontext";
import useonlinestatus from "../utilites/useonlinestatus";
import { useSelector } from "react-redux";

const Header=()=>{
  const [btnname,setbtname] =useState("signup");
  const onlinestatus = useonlinestatus();
  const { loggeduser }= useContext(UserContext);
  const cartitem = useSelector((store)=>store.cart.items);
  console.log(cartitem);

    return(
        <div className="flex justify-between bg-pink-100">
           <div className ="logo container" > 
            <img
             className ="w-32"
            src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2" alt="logo image"/>
          </div>
            <div className="right"> 
              <ul className="flex p-4 m-4 items-center md:shadow-lg">
                <li className="m-4 p-6 border border-solid border-black rounded-2xl hover:bg-gray-300 "><Link className="link"to ="/">Home</Link></li>
                <li className="m-4 p-6 border border-solid border-black rounded-2xl hover:bg-gray-300"><Link className="link"to ="/about">About</Link></li>
                <li className=" m-4 p-6 border border-solid border-black rounded-2xl hover:bg-gray-300 "><Link className="link"to ="/contact">Contact</Link></li>
                <li className="m-4 p-6 border border-solid border-black rounded-2xl  hover:bg-gray-300"><Link className="link"to ="/cart">
                  Cart
                  <div className="border border-solid border-black pl-2 bg-green-100 skew-y-6 skew-x-6">{cartitem.length}</div>
                  </Link></li>
              {/* <button className="m-4 p-6 login border border-solid border-black rounded-3xl hover:bg-gray-300" onClick={()=>
                {
                  btnname==="signup"? setbtname("logout"):setbtname("signup")
                }
              }><Link className="link"to="/login">{btnname}</Link></button> */}
                <li className="m-4 p-6 border border-solid border-black rounded-2xl  hover:bg-gray-300"><Link className="link"to="/login">{ loggeduser}</Link></li>
              </ul>
            </div>
        </div>
        
    )
};
export default Header;