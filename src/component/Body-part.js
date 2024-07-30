//import resobj from "../utilites/mockdata";
import { LOGO_URL } from "../utilites/comman";
import Restcart ,{ toprated } from "./rest-cart";
import { useEffect, useState } from "react";
import Shimer from "./shimer";
import { Link } from "react-router-dom";
import useonlinestatus from "../utilites/useonlinestatus";

const Body=()=>{
    const [list,setlist] = useState([]);
    const [flist,setflist] = useState([]);
    const[searchtext,settext]=useState("");

    const Promoted = toprated(Restcart);
  
    // console.log(list)
    useEffect(()=>{
    fetchData();
},[]);  
const fetchData = async()=>{const data = await fetch(
    // https://proxy.cors.sh/
   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5800357&lng=77.32741709999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
 );
const json = await data.json();

setlist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setflist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};



const onlinestatus = useonlinestatus();
if(onlinestatus=== false)

    return (
        <h1>YOur are offline</h1>
    );
    


if(list.length=== 0)
   { 
     return  <Shimer />
    
    }
    return(
        <div className="body">
               <div className="flex items-center px-2 mt-6">
                             <div className="flex-1 flex justify-center ">
                                <div className=" ">
                                   <input type="text" className="size-10 w-96 border border-solid border-black rounded-3xl p-4" value={searchtext} onChange={(e)=>{
                                   settext(e.target.value);
                                   }}/>
                              </div>
                               <div className="search-logo ">
                                  <button className="w-12"
                                       onClick={()=>{
                                      console.log(searchtext);
                                          const flist=list.filter(
                                        (res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                   
                               setflist(flist);
                              }}  >
                               <img className="searchimg" src={LOGO_URL}
                                alt="search logo"/>
                                </button>
                             </div>
                             </div>
                             <div className="md:shadow-2xl">
                                       <button className="border border-solid border-black rounded-2xl p-3 bg-gray-700 text-white "
                                        onClick={()=>{const flist = list.filter((res)=>res.info.avgRating>4.1);
                                       console.log(flist);
                                     setflist(flist);
                                           }} >
                                          Top Rated </button>
                                </div>
                         </div>   



                             <div className="flex flex-wrap  " key={indexedDB}>
                              {
                                  // <Restcart resdata={resobj[0]}/>
                                 flist.map((resta) => (
                                  <Link key={resta.info.id} className="link" to ={"/restaurants/"+ resta.info.id  }  >
                               {
                               resta.info.avgRating>4.1 ?
                               (<Promoted resdata={resta} />) : (
                               <Restcart  resdata={resta}/>)
                               }
                                        </Link>))
                                
                              }
                           </div>  
        </div>
    )
}
export default Body;