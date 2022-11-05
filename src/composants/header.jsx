import logo from "../assets/LOGO.png";
import logoM from "../assets/LOGO_M.png";
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function Header() {
    let location = useLocation().pathname;
    if (location === "/about") {
        return (
            <header>
        <picture>
            <source media="(min-width:992px)" srcSet={logo}></source>
            <img className="logo" src={logoM} alt="Kasa"></img>
        </picture>
       <nav>
            <ul>
                <li>
                    <Link to ={`/`}>Accueil</Link> {/*le composant Link to nous permet une redirection vers l'url désiré lorsque l'on clique dessus*/}
                </li>
                <li>
                    <Link to={`/about`} id="underline">À propos</Link>
                </li>
            </ul>
        </nav>
    </header>
        )
    } else if (location ==="/") {
        return (
            <header>
            <picture>
                <source media="(min-width:992px)" srcSet={logo}></source>
                <img className="logo" src={logoM} alt="Kasa"></img>
            </picture>
            <nav>
                <ul>
                    <li>
                        <Link to ={`/`} id="underline">Accueil</Link> {/*le composant Link to nous permet une redirection vers l'url désiré lorsque l'on clique dessus*/}
                    </li>
                    <li>
                        <Link to={`/about`}>À propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
        )
    } else return (
        <header>
        <picture>
            <source media="(min-width:992px)" srcSet={logo}></source>
            <img className="logo" src={logoM} alt="Kasa"></img>
        </picture>
       <nav>
            <ul>
                <li>
                    <Link to ={`/`}>Accueil</Link> {/*le composant Link to nous permet une redirection vers l'url désiré lorsque l'on clique dessus*/}
                </li>
                <li>
                    <Link to={`/about`}>À propos</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}