import Header from "../composants/header";
import Dropdown from "../composants/dropdown";
import background from "../assets/BACKGROUND.png";
import backgroundM from "../assets/BACKGROUND_M.png";
import Footer from "../composants/footer";

const texteFiabilite ="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
const texteRespect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
const texteService = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
const texteSecurite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

export default function About() {
    return (
      <>
       <Header/>
       <picture>
            <source media="(min-width:992px)" srcSet={background}></source>
            <img className="background" src={backgroundM} alt="Arrière-Plan"></img>
        </picture>
        <div className="dropdown__container__about">
            <Dropdown title="Fiabilité" texte={texteFiabilite}/> {/*le composant prend en paramètre un string de texte défini précédemment*/}
            <Dropdown title="Respect" texte={texteRespect}/>
            <Dropdown title="Service" texte={texteService}/>
            <Dropdown title="Securité" texte={texteSecurite}/>
        </div>
        <Footer/>
      </>
    );
  }