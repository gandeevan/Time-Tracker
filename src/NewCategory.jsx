import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewCategory({ setCategoryOptions }) {
  const [newCategory, setNewCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCategory) {
      setCategoryOptions(prevCategoryOptions => [...prevCategoryOptions, newCategory]);
      navigate('/');
    }
  };
  
  return (
    <div className="center">
      <form onSubmit={handleSubmit}>
        <label>
          Category Name: 
          <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button> {}
      </form>
    </div>
  );
}

      