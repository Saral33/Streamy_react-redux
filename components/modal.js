import React from "react";
import ReactDom from "react-dom";
import history from '../history';

const Modal = (props) => {
  return ReactDom.createPortal(
    <div className="ui dimmer modals visible active" onClick={()=>{history.push('/')}}>
      <div className="ui standard modal visible active" onClick={(e)=> e.stopPropagation()}>
        <div className="header">{props.header}</div>
        <div className="content" style={{color:'black'}}>{props.content}</div>
        <div className="actions">{props.buttons}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
