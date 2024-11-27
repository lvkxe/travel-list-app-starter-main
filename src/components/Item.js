import React from "react";

function Item({ item, togglePacked, updateQuantity, deleteItem, handleUpdateItem }) {
  const isOverdue = item.dueDate && new Date(item.dueDate) < new Date() && !item.packed;

  return (
    <div className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={(e) => handleUpdateItem(item.id, e.target.checked)}
        />
        <span
          style={{
            textDecoration: item.packed ? "line-through" : "none",
            color: isOverdue ? "red" : "inherit",  
          }}
        >
          {item.description} ({item.quantity}) - {item.weight} kg each
          {item.dueDate && (
            <span style={{ marginLeft: "10px", fontStyle: "italic" }}>
              Due: {new Date(item.dueDate).toLocaleDateString()}
            </span>
          )}
        </span>
      </label>
      <select
        value={item.quantity}
        onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
      >
        {[...Array(11).keys()].map((num) => (
          <option key={num + 1} value={num + 1}>
            {num + 1}
          </option>
        ))}
      </select>
      <button className="delete-button" onClick={() => deleteItem(item.id)}>
        🗑️
      </button>
    </div>
  );
}

export default Item;
