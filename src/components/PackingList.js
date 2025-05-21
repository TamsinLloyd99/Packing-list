import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItems, onToggleItems, onClearList }) {
    const [sortBy, setSortBy] = useState("input");
    let sortedItems;

    if (sortBy === "input") sortedItems = items;
    if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    // Sorts the copied array by comparing the description strings of each item.
    // Compares two strings in a locale-aware way (e.g. case, accents, alphabet order).
    if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));



    return (
        <div className="list">
            <ul>
                {sortedItems.map(item => (
                    <Item item={item}
                        onDeleteItems={onDeleteItems}
                        onToggleItems={onToggleItems}
                        key={item.id} />
                    // pass the onDeleteItems function down to Item
                ))}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by the input order</option>
                    <option value="description">Sort by the description</option>
                    <option value="packed">Sort by the packed status</option>
                </select>
                <button onClick={() => { onClearList(); }}>Clear List</button>
            </div>
        </div>
    );
}
