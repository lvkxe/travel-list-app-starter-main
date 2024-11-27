import React, { useState } from "react";

function Form({ handleAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState("");
  const [dueDate, setDueDate] = useState("");  

  function handleSubmit(e) {
    e.preventDefault();
    if (description && weight) {
      const newItem = {
        id: Date.now(),
        description,
        quantity,
        weight: Number(weight),
        packed: false,
        dueDate: dueDate ? new Date(dueDate) : null, 
      };
      handleAddItem(newItem);
      setDescription("");
      setQuantity(1);
      setWeight("");
      setDueDate(""); 
    }
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <label>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {[...Array(11).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
      </label>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Weight per item (kg)..."
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)} 
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
