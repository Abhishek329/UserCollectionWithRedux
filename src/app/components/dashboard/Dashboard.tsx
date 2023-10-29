import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import { User } from "../../models/User";
import Pagination from "../../layout/Pagination";
import { useAppDispatch, useAppSelector } from "../../../store/Store";
import {  UserState, fetchUsers } from "./UserSlice";
import LoadingComponent from "../../layout/LoadingComponent";



const Dashboard= () =>{

  const { users,currentPage } = useAppSelector((state) => state.users) as UserState;
  const dispatch = useAppDispatch();

   // Declare currentPage state and a function to update it
   const [localCurrentPage, setLocalCurrentPage] = useState(currentPage);

   const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    // Fetch users with page and results
    dispatch(fetchUsers(currentPage)).then(() => {
      setIsLoading(false); // Data fetching is completed
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
      setIsLoading(false); // In case of an error, ensure loading state is updated
    });
  }, [dispatch, currentPage]);

  const handlePageChange = (newPage: number) => {
    setIsLoading(true);
    // Dispatch the fetchUsers action with the new page
    setLocalCurrentPage(newPage);
    dispatch(fetchUsers(newPage)).then(() => {
      setIsLoading(false); // Data fetching is completed
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
      setIsLoading(false); // In case of an error, ensure loading state is updated
    });;
  };
  


    return(
        <div className="md:container md:mx-auto mt-4">
           {isLoading ? ( // Conditionally render the loading component
            <LoadingComponent />
          ) : (
          <div>
          <div className="grid grid-cols-5 gap-4">
          {users.map((user:User, index:number) => (
            <Card
              key={index}
              user ={user}
            />
          ))}
          </div>
          <div className="flex justify-center mt-4"> 
          <Pagination currentPage={localCurrentPage} onPageChange={handlePageChange}/>
          </div>
      </div>       
      )}
      </div>
    );
};



export default Dashboard;