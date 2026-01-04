export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded p-4 hover:shadow-lg flex flex-col">
      
      {/* Image container */}
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center rounded">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <h3 className="font-semibold mt-3">{product.name}</h3>
      <p className="text-gray-700">₹{product.price}</p>
      <p className="text-sm text-gray-500 flex-grow">
        {product.description}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white w-full mt-3 py-2 rounded hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
