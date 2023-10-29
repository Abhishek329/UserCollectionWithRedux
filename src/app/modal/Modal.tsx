// Modal.tsx
import React from "react";
import { User } from "../models/User";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  user: User
};

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, user }) => {

    const dateFormat = 'dd MMMM yyyy';

    const formattedDate  = format(new Date(user.dob.date),dateFormat);

  return (
    <>
      {isOpen && (
       <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
       <div className="relative w-3/4 max-w-screen-xl h-3/4 mx-auto my-6"> {/* Increase width and height */}
         <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
         <div className="flex flex-col bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:flex-row md:flex-1">
            <img
               className="w-32 h-32 md:w-1/2 md:h-auto rounded-full"
               src={user.picture.medium}
               alt=""
            />
            <div className="flex flex-col justify-start p-6 md:w-2/3">
                <h5 className="mb-2 text-2xl font-medium text-neutral-800 dark:text-neutral-50"> {/* Increase text size on mobile */}
                    {user.name.first} {user.name.last} - Age({user.dob.age})
                </h5>
                <p className="mb-4 text-lg md:text-base text-neutral-600 dark:text-neutral-200"> {/* Increase text size on mobile */}
                <div className="flex items-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  <FontAwesomeIcon icon={faBirthdayCake} className="w-5 h-5 mr-2" />
                  <b>Date Of Birth</b>: {formattedDate} <br />
                </div>
                  <div className="flex items-center mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-2" />
                  <b>Phone Number</b>: {user.phone} <br />
                </div>
                </p>
                <p className="text-base text-neutral-500 dark:text-neutral-300">
                  <FontAwesomeIcon icon={faMapMarker} className="w-5 h-5 mr-2" />
                  {user.location.street.name},{user.location.city},<br/>
                  {user.location.state}<br/>
                  {user.location.postcode}<br/>
                  {user.location.country}
                </p>
                </div>
            </div>
           <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
             <button
               className="bg-blue-500 text-white active:bg-blue-500 px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
               type="button"
               onClick={closeModal}
             >
               Close
             </button>
           </div>
         </div>
       </div>
     </div>
      )}
    </>
  );
};

export default Modal;
