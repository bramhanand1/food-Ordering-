import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body-part";
import About from "./component/about";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Menu from "./component/Menu";
import Login from "./component/login";
import { useState,useEffect} from "react";
import userContext from "./utilites/usercontext";
import{createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import { Provider } from "react-redux";
import Appstore from "./utilites/appstore";
import Cart from "./component/cart";




    const Applayout= () => {
      const [username,setname]=useState();

      useEffect(()=>{
          const data = {
            name:"Default",
          };
        setname(data.name);
      },[]);

      return (
        <Provider store={Appstore}>
      <userContext.Provider value={{loggeduser:username,setname}}>
      <div>
          <Header />
          <Outlet/>
       {/* <h1>Namaste React episode 3</h1> */}
       </div> 
       </userContext.Provider>
       </Provider>
    );
  }

    const approuter = createBrowserRouter([
      {
        path:"/",
        element:<Applayout/>,
        
      children: [
        {
          path:"/",
        element:<Body/>,
        },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurants/:resID",
        element:<Menu />,
      },
      {
        path:"/login",
        element:<Login />,
      },
      {
        path:"/cart",
        element:<Cart />,
      },
     {errorElement:<Error/>,}
    ],
     
    },
    ]);
     const root = ReactDOM.createRoot(document.getElementById("root"));
           root.render(< RouterProvider router={approuter}/>);
    