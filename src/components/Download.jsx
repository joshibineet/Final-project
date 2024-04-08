import React, {useRef} from "react";
import { FaTimes } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const Download = ({onClose}) => {
    const modalRef = useRef();

    const closeModal = (e) => {
      if(modalRef.current === e.target) {
        onClose();
      }
    }
  return (
    <div ref={modalRef} onClick={closeModal} className="flex fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm  justify-center items-center">
      <div className="mt-10 flex flex-col gap-5 text-white">
        <button onClick={() => onClose()}  className="place-self-end">
          <FaTimes size={30} />
        </button>
        <div className="bg-[#082D4A] rounded-xl px-20 py-12 flex flex-col gap-5 items-center mx-4">
          <h1 className="text-3xl font-extrabold">Download Apk Free</h1>
          <p className="text-3xl font-bold max-w-md text-center">Experience the Future of Female Commerce with Cnex </p>
          <form>
            <input 
            type="text" 
            placeholder="Enter Your Email"
            required
            className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
            />
            <button className="mt-4 w-full flex items-center bg-black justify-center gap-2 px-5 py-3 font-medium rounded-md"><FaDownload />Download Cnex</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Download;
