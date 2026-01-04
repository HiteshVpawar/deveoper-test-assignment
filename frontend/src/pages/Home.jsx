import { useEffect, useState } from "react";
import API from "../api/api";
import ProductCard from "../components/ProductCard";

export default function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Debounce effect
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProducts();
    }, 500); // ⏱ 500ms pause

    return () => clearTimeout(timer);
  }, [search, sort]);

  const fetchProducts = async () => {
    setLoading(true);
    const res = await API.get(
      `/products?search=${search}&sort=${sort}`
    );
    setProducts(res.data);
    setLoading(false);
  };

  return (
    <div className="p-4">
      <div className="flex gap-3 mb-4">
        <input
          className="border p-2 w-full"
          placeholder="Search innerwear..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      {/* 🔹 No Data Found */}
      {!loading && products.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          ❌ Data not found
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
