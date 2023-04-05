import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function TimeTracker({ categoryOptions }) {

  const [startTime, setStartTime] = useState(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));

  const [endTime, setEndTime] = useState(new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));

  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Start time: ${startTime}`);
    console.log(`End time: ${endTime}`);
    console.log(`Category: ${category}`);
  }

  return (
      <div className="center">
      <form onSubmit={handleSubmit}>
        <label>
          Start Time:
          <input type="datetime-local" value={startTime} onChange={e => setStartTime(e.target.value)} />
        </label>
        <br />
        <label>
          End Time:
          <input type="datetime-local" value={endTime} onChange={e => setEndTime(e.target.value)} />
        </label>
        <br />
        <label>
          Category:
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="" disabled>Select a category</option>
            {categoryOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <button type="button" onClick={() => navigate('/new-category')}>Add Category</button> {}
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
        </div>
  );
}