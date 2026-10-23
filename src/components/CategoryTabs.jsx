import react from "react";

function CategoryTabs({ categories, products, selected, onChange }) {
  function getCount(category) {
    if (category === "All") {
      return products.length;
    }
    return products.filter((p) => p.category === category).length;
  }

  return (
    <div className="tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={selected === category ? "tab tab-active" : "tab"}
          onClick={() => onChange(category)}
        >
          {category} ({getCount(category)})
        </button>
      ))}
    </div>
  );
}

export { CategoryTabs };
