import { useNavigate } from "react-router-dom";

export default function Cart({ cart }) {
  const navigate = useNavigate();

  const total = cart.reduce((sum, p) => sum + p.price, 0);
  const gst = total * 0.18;

  return (
    <div className="p-4">
      {/* 🔹 Back Arrow */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 font-semibold"
      >
        ← Back
      </button>

      <h2 className="text-xl font-bold mb-4">Cart</h2>

      {cart.length === 0 && (
        <p className="text-gray-500">Your cart is empty</p>
      )}

      {cart.map((c, i) => (
        <p key={i}>{c.name} - ₹{c.price}</p>
      ))}

      <hr className="my-4" />

      <p>Total: ₹{total}</p>
      <p>GST (18%): ₹{gst}</p>
      <p className="font-bold">Grand Total: ₹{total + gst}</p>
    </div>
  );
}
