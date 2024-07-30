import { useEffect,useState } from "react";
import Shimer from "./shimer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utilites/comman";
import usemenuapi from "./usemenuapi"; 
import Category from "./menuCategory";
import { useState } from "react";

const Menu = ()=>
{   

    const {resID} = useParams();
    const menul = usemenuapi(resID);

    // const[showindex,setindex]=useState(null);accodiane
  

    if(menul===null ) return <Shimer/>;

   const{name,cuisines}  =
   menul.cards[2].card.card.info;
   const{itemCards}=
   menul?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card;


   const categories = menul?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=>
    c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

   
    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-4xl">{name} </h1>
            <h2 className="font-bold my-6 text-lg">{cuisines.join(",")}</h2>
            <h2 className="font-bold my-6 text-lg border border-solid to-black bg-green-100">Menu</h2>
          
            {categories.map((item,index)=>(
             <Category 
             key ={ item.card.card.itemCards.title} 
             data = {item.card.card} 
            //  showitem={ index===showindex ? true : false }
            //  setindex={()=>setindex(index)}
            //  
            /> 
             
            ))
            }
           
        </div>
    );
};
export default Menu;