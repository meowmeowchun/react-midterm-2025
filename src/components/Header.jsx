import { Link, useLocation } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md"; // Importing the shopping cart icon from react-icons
function Header() {
  const location = useLocation();

  const links = [
    { to: "/fullart", label: "FULL ART" },
    { to: "/fanart", label: "FAN ART" },
    { to: "/yamato", label: "YAMATO" },
    { to: "/sketch", label: "SKETCH" },
  ]; // navbar links

  return (
      <header className="sticky top-0 z-50 light:bg-[linear-gradient(182.7deg,#000000_2.25%,rgba(0,0,0,0.94)_41.74%,rgba(0,0,0,0.91)_62.85%,rgba(0,0,0,0.76)_83.97%,rgba(0,0,0,0)_96.37%)] 
    dark:bg-[linear-gradient(182.7deg,#ffffff_2.25%,#ffffff_41.74%,#ffffff_62.85%,#ffffff_83.97%,#ffffff_96.37%)]">
        <div className="flex justify-center py-4">
          <Link to="/">
            <img src="/img/icon choas 4.png" className="h-20" alt="Logo" />
          </Link>
        </div>
        <div>
          {/* Cart Icon：右上角 */}
          <Link
            to="/cart"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-red-600 text-3xl hover:text-primary"
          >
            <MdShoppingCart></MdShoppingCart>
          </Link>
        </div>
        <nav className="shadow-md">
          <ul className="flex justify-center gap-8 py-4">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`text-primary dark:font-[Girassol] light:font-[Lexend_Tera] font-weight-400 text-2xl transition-all duration-300
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
