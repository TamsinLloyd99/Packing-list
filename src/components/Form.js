import { useState } from "react";


export default function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    // 1)Define a piece of state




    function handleSubmit(e) {
        e.preventDefault()
        if (!description) return;
        //stops an empty string being submitted
        const newItem = { description, quantity, packed: false, id: Date.now() };
        // logs date from onSubmit to create a new item
        console.log(newItem)

        onAddItems(newItem)

        setDescription("")
        setQuantity(1)
        // sets form back to its original state after submission1
    }

    return <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select value={quantity}
            // 2) Use that piece of state on the element we want to control
            onChange={(e) => setQuantity(Number(e.target.value))}>
            {/*3) Update state variable with onChange handler  */}
            {/* creates a select drop down menu */}
            {Array.from({ length: 20 }, (_, i) => i + 1).map
                // .map() iterates over each number and renders an option element for each number,assigns the number as the options value, provides a key for React rendering
                ((num) => (
                    <option value={num} key={num}>
                        {num} {/* visible text inside the element */}
                    </option>
                ))}
        </select>
        <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)} />
        {/* the value of the element is now set as the description, when the input (target.value) is changed the onChange method updates that and sets it as the new state of the description*/}
        <button>Add</button>
    </form >
}