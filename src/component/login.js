import UserContext from "../utilites/usercontext";
import { useContext } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login =()=>{
    const{ loggeduser,setname } = useContext(UserContext);
 
    return(
        <div className="m-[40px] flex justify-center">
           <div className="w-[400px] h-[500px] border border-solid border-black text-center bg-pink-100">
                   <h1 className="m-[20px] font-bold text-6xl">Login</h1>
                   <div className="mt-[80px]">
                    <label className="font-bold">Username: </label>
                   <input className="border border-black p-2 bg-blue-50"
                   value={loggeduser}
                   onChange={(e) => setname(e.target.value)}   />
                   </div>
                   <button className="border border-black p-6 mt-6 ml-8 bg-black text-white hover:bg-slate-500 font-extrabold">
                   <Link className="link"to ="/">Log in</Link>
                   </button>
           </div>
        </div>
    )
}
export default Login;