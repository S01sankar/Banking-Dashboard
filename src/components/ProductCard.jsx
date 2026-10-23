import { formatMetric } from "../utils/format";

function ProductCard({ product, onButtonClick }) {
  return (
    <div className="card">
      <div className="card-top">
        <span className="card-category">{product.category}</span>
        <span className={"badge badge-" + product.status.toLowerCase()}>
          {product.status}
        </span>
      </div>

      <h3 className="card-title">{product.name}</h3>

      <div className="card-metrics">
        {product.metrics.map((metric) => (
          <div key={metric.label} className="metric">
            <p className="metric-label">{metric.label}</p>
            <p className="metric-value">{formatMetric(metric)}</p>
          </div>
        ))}
      </div>

      <button className="card-button" onClick={() => onButtonClick(product)}>
        {product.cta}
      </button>
    </div>
  );
}

export { ProductCard };
