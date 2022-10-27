import logo from "../assets/LOGO.png"
import logoM from "../assets/LOGO_M.png"
import {Link} from "react-router-dom";

export default function Header() {
    return (
    <header>
        <picture>
            <source media="(min-width:992px)" srcSet={logo}></source>
            <img className="logo" src={logoM} alt="Kasa"></img>
        </picture>
       <nav>
            <ul>
                <li>
                    <Link to ={`/`}>Acceuil</Link>
                </li>
                <li>
                    <Link to={`/about`}>À propos</Link>
                </li>
            </ul>
        </nav>
    </header>
      
    );
  }