import Menuitems from "./menuitems";
import { useState } from "react";
const Category = ({data}) => {
  const[showitem,setitem]=useState(false);
const handleclick = ()=>{
  // setindex();
  setitem(!showitem)
}  

    // console.log(data)
    return (
      <div className="bg-blue-200 w-6/12 mx-auto my-2 p-4  rounded-md shadow-2xl  hover:bg-lime-200">
        <div className="flex justify-between cursor-pointer" onClick={handleclick} >
           <span className="font-bold "> {data.title} ({data.itemCards.length})</span>
           <span>⬇️</span>
        </div>
        {showitem && <Menuitems key ={ data.index} items = {data.itemCards}/>}
      </div>
    );
    
    
};


export default Category;