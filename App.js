import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import { useState } from 'react';
import SearchItem from './SearchItem';

function App() {
  const [items,setItems]=useState(JSON.parse(localStorage.getItem('todo-list')) || []);
  const [newItem,setNewItem]=useState('');  

  const [searchItem,setSearchItem]=useState('');

  const addItem=(item)=>{
    const id=items.length ? items[items.length -1].id +1 : 1;
    const newItem={id, checked:false, item};
    const itemsList=[...items,newItem];
    setNewItem(itemsList);
    setItems(itemsList);
    localStorage.setItem('todo-list', JSON.stringify(itemsList));
  }

  const handleCheck=(id)=>{
    const itemsList=items.map((item)=>
    item.id===id ? {...item, checked:!item.checked }: item
    );
    setItems(itemsList);
    localStorage.setItem('todo-list', JSON.stringify(itemsList));
  }

  const handleDelete=(id)=>{
    const itemsList=items.filter((item)=>item.id!==id);
    setItems(itemsList);
    localStorage.setItem('todo-list', JSON.stringify(itemsList));
   }

   const handleSubmit=(e)=>{
    e.preventDefault();
    if(!newItem)return;
    addItem(newItem);
    setNewItem('');
   }

  return (
    <div className='app'>
      <Header />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem}/>
      <Content items={items.filter(item=>{
        return (item.item).toLowerCase().includes(searchItem.toLowerCase());
      })} handleCheck={handleCheck} handleDelete={handleDelete}/>
      <Footer />
    </div>
  );
}

export default App;
