import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from "../convex/_generated/react";

export default function NewCategory() {
  const [newCategory, setNewCategory] = useState('');
  const navigate = useNavigate();
  const addCategory = useMutation("addCategories");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCategory) {
      console.log(`New category: ${newCategory}`);
      addCategory({name: newCategory});
      navigate('/');
    }
  };

  return (
    <div className="center-category">
      <form onSubmit={handleSubmit}>
        <label>
          Category Name:
          <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button> { }
      </form>
    </div>
  );
}

