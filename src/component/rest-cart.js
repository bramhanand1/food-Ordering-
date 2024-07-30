import { CDN_URL } from "../utilites/comman";
const Restcart=(prop)=>{
    const{resdata}=prop;
    const{
        name,cuisines,costForTwo,avgRating,cloudinaryImageId,
    
      }=resdata?.info;
    return(
        <div className="p-4 m-4  w-[250px] h-[400px] mr-2 border break-words  rounded-3xl flex flex-col justify-between bg-pink-200 md:shadow-2xl">
           
            <img className="h-[200px] w-60" alt ="res-logo"src={CDN_URL+ cloudinaryImageId
             } />
            <h3 className="font-bold text-center text-lg">{name}</h3>
            <h4 className="font-semibold text-sm">{cuisines.join(",")}</h4>
            <h4 className="font-semibold mt-1">{costForTwo}</h4>
          <div className="w-full flex justify-between mt-auto "> 
            <h4 >{resdata.info.sla.deliveryTime} mintues</h4>
            <h4 >{avgRating}</h4>
           </div>
        </div>
    )
};
export const toprated = (Restcart)=>{
  return (props) => {
    return(
         <div>
         <label className="absolute bg-black text-white m-2 p-2">Top Rated
         </label>
         <Restcart {...props}/>
         </div>
    );

  };
};
export default Restcart;