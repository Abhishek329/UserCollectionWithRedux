import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () =>{

    const navigation = useNavigate();
    return(
        <div className="grid grid-cols-1 gap-3 w-1/2 mx-auto h-1/2">
          <div className="text-4xl pt-10">Welcome </div>
          <div className="block">
          <button onClick={() => navigation('/users')} className="bg-slate-100 shadow-md px-4 py-3"> Check out our users...</button></div>
      </div>
    )
}