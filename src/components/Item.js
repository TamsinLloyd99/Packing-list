
export default function Item({ item, onDeleteItems, onToggleItems }) {
    return (
        <li>
            <input type="checkbox"
                value={item.packed}
                //make the checkbox a controlled element
                onChange={() => onToggleItems(item.id)} />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {/* if item is packed a line will be put through the item  */}
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItems(item.id)}>❌</button>
            {/* instead of just using onClick={onDeleteItems}, using a callback function means React will only call the onDeleteItems function only when the event happens */}
        </li>
    );
}
