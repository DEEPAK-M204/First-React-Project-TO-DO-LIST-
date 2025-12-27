import React from "react";
import { FaTrash } from "react-icons/fa";
function Content({items, handleCheck, handleDelete}) {
    return (
    <main>
      {(items.length) ? (
      <ul>
        {items.map(item=>(
          <li className="items" key={item.id}>
            <input 
              type="checkbox" checked={item.checked} onChange={()=>handleCheck(item.id)}/>
            <label style={(item.checked)?{textDecoration:'line-through'}:null}
            onDoubleClick={()=>handleCheck(item.id)}>
              {item.item}</label>
            <FaTrash 
            role="button"
            tabIndex="0"
            className="trash"
            onClick={()=>handleDelete(item.id)}
            />
          </li>
        ))}
      </ul>
      ):
      <p style={{color:'rgb(255, 89, 0)'}}>Your List Is Empty !</p>}
    </main>
  );
}
export default Content;