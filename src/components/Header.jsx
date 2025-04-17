import { Link, useLocation } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { useCartContext } from "../redux/CartContext";

function Header() {
  const location = useLocation();
  const { state } = useCartContext();
  const cartCount = state.cartItems.length;

  const links = [
    { to: "/fullart", label: "FULL ART" },
    { to: "/fanart", label: "FAN ART" },
    { to: "/yamato", label: "YAMATO" },
    { to: "/sketch", label: "SKETCH" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-neutral text-accent">
      <div className="flex justify-center py-4">
        <Link to="/">
          <img src="/img/icon choas 4.png" className="h-20" alt="Logo" />
        </Link>
      </div>
      <div>
        <Link
          to="/cart"
          className="absolute right-6 top-1/2 -translate-y-1/2 text-primary text-3xl hover:text-secondary"
        >
          <MdShoppingCart />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-neutral text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
      <nav className="shadow-md">
        <ul className="flex justify-center gap-8 py-4">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-primary font-[Girassol] text-2xl transition-all duration-300
                ${location.pathname === link.to ? "text-neutral" : "hover:text-secondary"}
              `}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
