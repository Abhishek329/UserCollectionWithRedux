import React, { useState } from "react";
import { User } from "../../models/User";
import { TERipple } from 'tw-elements-react';
import Modal from "../../modal/Modal";
import Backdrop from "../../layout/Backdrop";

interface Props{
    user:User
}

const Card = ({ user}:Props) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (   
    <div
        className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <img
            className="w-32 rounded-full"
            src={user.picture.medium}
            alt={user.name.first} />
        <div className="p-6">
          <h5
            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {user.name.first} {user.name.last}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {user.email}
          </p>
          <button onClick={openModal} className="bg-blue-500 text-white active:bg-blue-500 px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
          View more
        </button>
        {showModal && <Modal isOpen={showModal} closeModal={closeModal} user={user} />}
        {showModal && <Backdrop isOpen={showModal}/>}
        </div>
      </div>
  );
};


export default Card;