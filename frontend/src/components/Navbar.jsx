import { Link } from "react-router-dom";

export default function Navbar({ count }) {
  return (
    <nav className="flex justify-between p-4 shadow">
      <h1 className="font-bold text-xl">Innerwear Store</h1>
      <Link to="/cart">🛒 Cart ({count})</Link>
    </nav>
  );
}
