import React from "react";
import { FaTimes, FaTrashRestoreAlt } from "react-icons/fa";
import SpinnerButton from "../spinners/SpinnerButton";
import { BsFillTrashFill } from "react-icons/bs";
const ModalDeleteAndRestore = ({ setIsDelete, item, isRestore }) => {
  const handleClose = () => setIsDelete(false);

  return (
    <div className="modal fixed top-0 left-0 w-full z-20">
      <div className="backdrop bg-white bg-opacity-80 h-screen "></div>
      <div className="modal__main absolute mx-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border  border-gray-400 rounded-md py-8 px-5 max-w-[420px] w-full ">
        <div className="modal__header relative">
          {isRestore ? (
            <FaTrashRestoreAlt className="fill-yellow-300 text-2xl mb-2" />
          ) : (
            <BsFillTrashFill className="fill-red-500 text-2xl mb-2" />
          )}
          <button className="absolute -top-4 right-0 " onClick={handleClose}>
            <FaTimes className="text-gray-400 text-base" />
          </button>
        </div>

        <div className="modal__body ">
          <h3 className="mb-3">Are you sure?</h3>
          <p>{`You are about to ${isRestore ? "restore" : "delete"} ${
            item.name
          }, do you want to continue?`}</p>
        </div>

        <div className="modal__action flex justify-end mt-6 gap-2">
          <button className="btn btn--accent">
            Confirm <SpinnerButton />
          </button>
          <button className="btn btn--cancel" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteAndRestore;
