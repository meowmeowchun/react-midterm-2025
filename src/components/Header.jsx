import { Link } from "react-router-dom";

function Header() {
    return <header className =" bg-[#242424] h-[100vh]">
        <Link to = "/"><img src="./img/icon choas 4.png"/></Link>
        <nav>
            <ul>
                <li><Link to="/fullart">Full Art</Link></li>
                <li><Link to="/fanart">Fan Art</Link></li>
                <li><Link to="/yamato">Yamato</Link></li>
                <li><Link to="/sketch">Sketch</Link></li>
            </ul>
        </nav>
        </header>
  }
  
  export default Header;