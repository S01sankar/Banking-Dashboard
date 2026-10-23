async function fetchProducts() {
  const response = await fetch("/api/products.json");

  if (!response.ok) {
    throw new Error("Could not load products. Please try again.");
  }

  return response.json();
}

export { fetchProducts };
