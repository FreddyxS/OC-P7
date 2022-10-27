import logoFooter from "../assets/LOGO_FOOTER.png"
import logoFooterM from "../assets/LOGO_FOOTER_M.png"
import copyright from "../assets/COPYRIGHT.png"
import copyrightM from "../assets/COPYRIGHT_M.png"

export default function Footer() {
    return (
    <footer>
        <picture>
            <source media="(min-width:992px)" srcSet={logoFooter}></source>
            <img className="logo__footer" src={logoFooterM} alt="Kasa"></img>
        </picture>
        <picture>
            <source media="(min-width:992px)" srcSet={copyright}></source>
            <img className="copyright" src={copyrightM} alt="copyright"></img>
        </picture>
    </footer>
      
    );
  }