import { CDN_URL } from "../utilites/comman";
import { useDispatch } from "react-redux";
import { additem } from "../utilites/cartslice";

const Menuitems =({items})=>{
    const Dispatch = useDispatch();
    const handleclick =(item)=>{
        Dispatch(additem(item))
    }

    return(

         <div className="">
        
            {items.map((item)=>(
             <div 
              className="m-2 p-2 border-black border-b-2 text-left flex justify-between ">
             <div className="w-9/12">
               <div className="">
                  <span className="font-bold">{item.card.info.name} </span> 
                   <span className=" font-semibold">₹{
                   item.card.info.defaultPrice/100 ? item.card.info.defaultPrice/100 : 
                   item.card.info.price/100}</span>
                </div>
                   <p>
                {item.card.info.description}
                </p>
                </div>
                
                <div className=" relative w-2/12 p-4 ">
                    <div className="h-3/4">
                  <img className="rounded-lg min-h-full w-full" src={CDN_URL+item.card.info.imageId}></img>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2"> 
                     <button className="rounded-lg p-2 bg-black text-white shadow-lg m-auto font-bold"
                     onClick={()=>handleclick(item)}
                     > ADD+
                    </button>
                    </div>
                    </div>
                </div>

            </div>
            ))
        }
        </div>
    )
};
export default Menuitems