import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const links = [
    { to: "/fullart", label: "FULL ART" },
    { to: "/fanart", label: "FAN ART" },
    { to: "/yamato", label: "YAMATO" },
    { to: "/sketch", label: "SKETCH" },
  ]; // navbar links

  return (
    <header className="bg-neutral">
      <div className="flex justify-center py-4">
        <Link to="/">
          <img src="./img/icon choas 4.png" className="h-16" alt="Logo" />
        </Link>
      </div>

      <nav className="shadow-md">
        <ul className="flex justify-center gap-8 py-4">
          {links.map((link) => (
            <li key={link.to} className="font-[Girassol] font-weight-[400] text-[20px]">
              <Link
                to={link.to}
                className={`btn btn-outline btn-primary 
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
