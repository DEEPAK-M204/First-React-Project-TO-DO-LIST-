import React from 'react';
import { FaPlus } from 'react-icons/fa';
function AddItem( {newItem, setNewItem, handleSubmit} ) {        
    return (
    <form className="addForm" onSubmit={handleSubmit} >
      <input 
        autoFocus
        type="text"
        placeholder="Add Item"
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        required
      />
      <button type='submit'><FaPlus /></button>
    </form>
    )
}
export default AddItem;