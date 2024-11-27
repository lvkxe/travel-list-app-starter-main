import React from "react";
import Item from "./Item";

function PackingList({ items, togglePacked, updateQuantity, deleteItem, handleUpdateItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item
              item={item}
              togglePacked={togglePacked}
              updateQuantity={updateQuantity}
              deleteItem={deleteItem}
              handleUpdateItem={handleUpdateItem}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
