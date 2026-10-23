import react from "react";

function SummaryBar({ products }) {
  const activeCount = products.filter((p) => p.status === "Active").length;
  const pendingCount = products.filter((p) => p.status === "Pending").length;
  const availableCount = products.filter((p) => p.status === "Available").length;

  return (
    <div className="summary">
      <div className="summary-box">
        <h2>{activeCount}</h2>
        <p>Active products</p>
      </div>
      <div className="summary-box">
        <h2>{pendingCount}</h2>
        <p>Pending applications</p>
      </div>
      <div className="summary-box">
        <h2>{availableCount}</h2>
        <p>Available to apply</p>
      </div>
    </div>
  );
}

export { SummaryBar };
