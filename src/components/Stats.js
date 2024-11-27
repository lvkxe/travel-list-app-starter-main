import React from "react";

function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  
  const packedPercentage = totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;

  const totalWeight = items.reduce(
    (sum, item) => sum + item.quantity * item.weight,
    0
  );
  const packedWeight = items
    .filter((item) => item.packed)
    .reduce((sum, item) => sum + item.quantity * item.weight, 0);

  const overdueItems = items.filter((item) => item.dueDate && new Date(item.dueDate) < new Date() && !item.packed);

  return (
    <footer className="stats">
      <em>
        You have {totalItems} items in the list. You already packed {packedItems}{" "}
        ({packedPercentage}%). Total weight: {totalWeight.toFixed(3)} kg. Packed
        weight: {packedWeight.toFixed(3)} kg.
      </em>
      {overdueItems.length > 0 && (
        <p style={{ color: "red" }}>
          Warning! {overdueItems.length} item(s) are overdue and not packed.
        </p>
      )}
      {packedPercentage === 100 && <p>You got everything!</p>}
    </footer>
  );
}

export default Stats;
