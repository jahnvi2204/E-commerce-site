import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard"; // Import ProductCard
import "../styles/productGrid.css"; // Styling for ProductGrid

const ProductGrid = () => {
  const [products, setProducts] = useState([]); // State to store product data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [productsPerPage] = useState(12); // Products per page
  const [filter, setFilter] = useState("all"); // Filter state (e.g., category, price range)
  const [sort, setSort] = useState("priceLowToHigh"); // Sorting state

  // Fetch products from an API or a mock data
  const fetchProducts = async () => {
    try {
      const response = await fetch(`/api/products?page=${currentPage}&limit=${productsPerPage}&filter=${filter}&sort=${sort}`);
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    } catch (err) {
      setError("Failed to load products.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when component mounts or when page/filter/sort changes
  }, [currentPage, filter, sort]);

  // Handling page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Rendering loading, error, or product grid
  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  // Calculate the total number of pages based on the products
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="product-grid">
      <div className="product-grid-header">
        <div className="filters">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Products</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
            {/* Add more categories as needed */}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="product-grid-cards">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
