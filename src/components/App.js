import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form"
import PackingList from "./PackingList";
import Stats from "./Stats";



// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 2, description: "Charger", quantity: 1, packed: false },
// ];


export default function App() {
  const [items, setItems] = useState([]);


  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems((items) => items.map(item => item.id === id ?
      //If the item.id matches the given id, it returns a new object with the packed value toggled.
      //Otherwise, returns the item unchanged.
      { ...item, packed: !item.packed } : item))
    // Creates a copy of the item, and updates only the packed property.
    // !item.packed means: if packed is true, it becomes false, and vice versa.
  }

  function clearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    )
    if (confirmed) setItems([])

  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItems={handleDeleteItem} onToggleItems={handleToggleItem} onClearList={clearList} />
      <Stats items={items} />
    </div>
  );
}






