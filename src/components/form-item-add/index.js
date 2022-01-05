import React from "react";
import './index.css'

const ItemAddForm = (props) => {

  return (
   <div className='item-add-form'>
     <button 
     className="btn btn-outline-secondary"
     onClick={() => props.onItemAdded('hello world')}>
       Addd Item
     </button>
   </div> 
  );
};

export default ItemAddForm;