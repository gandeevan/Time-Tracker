import React, { useState } from 'react';
import { useQuery } from "../convex/_generated/react";
import { Table} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';


function TableWithPagination({ data, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(data.length / itemsPerPage);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = data.slice(startIndex, endIndex);

  return (
    <div>
    <Table striped bordered hover variant="dark" className="table">
      <thead>
        <tr>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {itemsToShow.map((item) => (
          <tr key={item.id}>
            <td>{item.startTime}</td>
            <td>{item.endTime}</td>
            <td>{item.category}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <ReactPaginate
        previousLabel="prev"
        nextLabel="next"
        breakLabel="..."
        pageCount={totalPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
}

export default function ViewStats() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const events = useQuery("filterEvents", { startTime: startTime, endTime: endTime });

    return (
        <div>
            <div>
                <h1>View Stats</h1>
            </div>
            <div className='center-view-stats'>
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
                <br />
                <button type="submit" className="center-btn">Submit</button>
            </form>
            </div>
            <br></br> <br></br>
            {events && events.length > 0 && (
                <TableWithPagination data={events} itemsPerPage={3} />
            )}
        </div>
    );
}
