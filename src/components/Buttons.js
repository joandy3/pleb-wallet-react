import React, { useState } from "react";
import PaymentsModal from "./PaymentsModel";
import "./Buttons.css";

export const Buttons = () => {

  const [modalState, setModalState] = useState({
    type: "",
    open: false,
  });
 
 return (
   <div>
     <div className="buttons">
       <button
         className="button"
         onClick={() =>
          setModalState({ open: true, type: "send" })
         }
       >
         Send
       </button>
       <button
         className="button"
         onClick={() =>
          setModalState({ open: true, type: "receive" })
         }
       >
         Receive
       </button>
     </div>
     <PaymentsModal modalState={modalState} setModalState={setModalState} />
   </div>
 );
};

export default Buttons;


