import react from "react";

function Toolbar({ searchText, onSearchChange, status, onStatusChange }) {
  return (
    <div className="toolbar">
      <input
        type="text"
        className="search-box"
        placeholder="Search products"
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        className="status-select"
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="All">All statuses</option>
        <option value="Active">Active</option>
        <option value="Pending">Pending</option>
        <option value="Available">Available</option>
        <option value="Closed">Closed</option>
      </select>
    </div>
  );
}

export { Toolbar };
