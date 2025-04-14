import { Link, useLocation } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";

function Header() {
  const location = useLocation();

  const links = [
    { to: "/fullart", label: "FULL ART" },
    { to: "/fanart", label: "FAN ART" },
    { to: "/yamato", label: "YAMATO" },
    { to: "/sketch", label: "SKETCH" },
  ]; // navbar links

  return (
    <header className="bg-neutral px-4">
    {/* Logo + Cart */}
    <div className="relative py-4">
      {/* Logo：居中 */}
      <div className="flex justify-center">
        <Link to="/">
          <img src="./img/icon choas 4.png" className="h-20" alt="Logo" />
        </Link>
      </div>

      {/* Cart Icon：右上角 */}
      <Link
  to="/cart"
  className="absolute right-0 top-1/2 -translate-y-1/2 text-red-600 text-3xl hover:text-primary"
>
  <MdShoppingCart />
</Link>

    </div>


      <nav className="shadow-md">
        <ul className="flex justify-center gap-8 py-4">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`btn btn-outline btn-primary font-[Girassol] font-weight-400 btn-lg
                  ${location.pathname === link.to ? "btn-active btn-primary" : "hover:btn-secondary"}
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
