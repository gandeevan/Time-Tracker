import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from "../convex/_generated/react";


function validateForm(startTime = "", endTime = "", category = "") {

  if (category === "") {
    alert("Please select a category.");
    return false;
  }

  if (startTime === "" || endTime === "") {
    alert("Please select the start time and the end time.");
    return false;
  }

  const startTimeMs = Date.parse(startTime);
  const endTimeMs = Date.parse(endTime);

  if (isNaN(startTimeMs) || isNaN(endTimeMs)) {
    throw new Error("validateForm: invalid date");
  }

  if (startTimeMs >= endTimeMs) {
    alert("Start time must be before end time.");
    return false;
  }

  console.log("Validated form");
  return true;
}

export default function TimeTracker() {

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [category, setCategory] = useState("");
  const categories = useQuery("getCategories");
  const addEvent = useMutation("addEvent");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault(startTime, endTime, category);
    if (validateForm(startTime, endTime, category)) {
      addEvent({ startTime: startTime, endTime: endTime, category: category });
      navigate('/');
    }
  }


  return (
    <div className="center-category">
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
            {categories && categories.length > 0 && categories.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          <Link to="/new-category"> Add Category</Link>
          <span> | </span>
          <Link to="/view-stats"> View Stats</Link>
        </div>
      </div>
      </form>
    </div>
  );
}