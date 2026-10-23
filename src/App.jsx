import { useState, useEffect } from "react";
import { fetchProducts } from "./api/productsApi";
import { SummaryBar } from "./components/SummaryBar";
import { CategoryTabs } from "./components/CategoryTabs";
import { Toolbar } from "./components/Toolbar";
import { ProductCard } from "./components/ProductCard";

const categories = ["All", "Savings", "Credit Card", "Loan", "Wealth"];

function App() {
  const [customer, setCustomer] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [message, setMessage] = useState("");

  async function loadProducts() {
    setLoading(true);
    setError("");

    try {
      const data = await fetchProducts();
      setCustomer(data.customer);
      setProducts(data.products);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const visibleProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;

    const statusMatch =
      selectedStatus === "All" || product.status === selectedStatus;

    const text = searchText.toLowerCase();
    const searchMatch =
      product.name.toLowerCase().includes(text) ||
      product.category.toLowerCase().includes(text);

    return categoryMatch && statusMatch && searchMatch;
  });

  function handleButtonClick(product) {
    setMessage(product.cta + " clicked for " + product.name);
    setTimeout(() => setMessage(""), 2500);
  }

  function clearFilters() {
    setSelectedCategory("All");
    setSelectedStatus("All");
    setSearchText("");
  }

  if (loading) {
    return <p className="info-text">Loading products...</p>;
  }

  if (error) {
    return (
      <div className="info-text">
        <p>{error}</p>
        <button className="card-button" onClick={loadProducts}>
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="header">
        <h1>Banking Products</h1>
        <p>Welcome back, {customer.name}</p>
      </div>

      <SummaryBar products={products} />

      <CategoryTabs
        categories={categories}
        products={products}
        selected={selectedCategory}
        onChange={setSelectedCategory}
      />

      <Toolbar
        searchText={searchText}
        onSearchChange={setSearchText}
        status={selectedStatus}
        onStatusChange={setSelectedStatus}
      />

      <p className="count-text">
        Showing {visibleProducts.length} of {products.length} products
      </p>

      {visibleProducts.length === 0 ? (
        <div className="info-text">
          <p>No products found.</p>
          <button className="card-button" onClick={clearFilters}>
            Clear filters
          </button>
        </div>
      ) : (
        <div className="cards">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onButtonClick={handleButtonClick}
            />
          ))}
        </div>
      )}

      {message !== "" && <div className="message">{message}</div>}
    </div>
  );
}

export { App };
