import { useEffect, useState } from "react";

const useonlinestatus = () =>
{ 
    const[onlines,setonline] = useState("true")
  useEffect(()=>{
    window.addEventListener("offline", () => {
          setonline(false)
    });
    window.addEventListener("online",()=>{
        setonline(true);
    })
  },[])
    return onlines;
}
export default useonlinestatus;
