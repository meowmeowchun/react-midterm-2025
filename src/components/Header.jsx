import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const links = [
    { to: "/fullart", label: "Full Art" },
    { to: "/fanart", label: "Fan Art" },
    { to: "/yamato", label: "Yamato" },
    { to: "/sketch", label: "Sketch" },
  ]; // navbar links

  return (
    <header className="bg-[#242424]">
      <div className="flex justify-center py-4">
        <Link to="/">
          <img src="./img/icon choas 4.png" className="h-16" alt="Logo" />
        </Link>
      </div>

      <nav className="shadow-md">
        <ul className="flex justify-center gap-8 py-4 text-[#ff0000]">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={location.pathname === link.to
                  ? "text-blue-500 font-bold"
                  : "hover:text-blue-500"}
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
