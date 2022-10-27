import { useRouteError } from "react-router-dom";
import {Link} from "react-router-dom";
import Header from "../composants/header"
import Footer from "../composants/footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Header/>
      <p className="not__found">404</p>
      <p className="not__found__texte">Oups! La page que vous demandez n'existe pas.</p>
      <Link to ={`/`} className="not__found__return">Retourner sur la page d'accueil</Link>
      <Footer/>
    </div>
  );
}