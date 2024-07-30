import { useDispatch, useSelector } from "react-redux"
import { clearcart } from "../utilites/cartslice";
import Menuitems from "./menuitems";
const Cart =()=> {
    const cartitem = useSelector((store)=>store.cart.items);
    const Dispatch = useDispatch();
    const clearcartitem=()=>{
        Dispatch(clearcart());
    };
    return(
        <div className="flex justify-center">
        <div className="p-4 m-4">
            
              <div >
              <h1 className="font-bold text-2xl text-center ">CART</h1>
              {cartitem.length===0 ? <h1 className="m-auto my-2 p-4 border border-solid border-black font-bold" >cart is empty</h1>:
                <div className="m-auto w-6/12 my-2 p-4 border border-solid border-black"><Menuitems items={cartitem}/></div> }
            </div>
        </div>
        <div className=" p-4 m-4 ">
        <button className="font-bold text-2xl mx-8 border border-solid border-black p-3 bg-black text-white rounded-xl"
        onClick={clearcartitem}
        >Clear</button>
        </div>
        </div>
    )
}
export default Cart