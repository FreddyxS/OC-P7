import Header from "../composants/header";
import Carousel from "../composants/carousel";
import Stars from "../composants/stars";
import data from "../data.json";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Dropdown from "../composants/dropdown";
import Footer from "../composants/footer";

export default function Logement() {
    const {id} = useParams();
    for (let i in data) {
        if (id === data[i].id) { /* itère dans les id du json afin de trouver le bon ensemble de données*/
            return (
                <>
                 <Header/>
                 <Carousel index={data[i]} /> {/* le composant Carousel prend les donnés du logement selectionné en argument afin de pouvoir afficher les bonnes donnés*/}
                 <div className="info__host__align">
                    <div className="informations">
                        <div className="title">{data[i].title}</div>
                        <div className="adresse">{data[i].location}</div>
                        <div className="tag__container">
                            {data[i].tags.map((data) => ( /* affiche les différents tag du logement*/
                                <div className="tag" key={data}>
                                    {data}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="host">
                        <div className="host__container">
                            <div className="host__name">{data[i].host.name}</div>
                            <img className="host__img" src={`${data[i].host.picture}`} alt="Hôte"></img>
                        </div>
                        <Stars rating={data[i].rating} />
                    </div>
                 </div>
                 
                 <div className="dropdown__container">
                    <Dropdown title="Description" texte={data[i].description} />
                     <Dropdown title="Équipements" texte={data[i].equipments} />
                 </div>
                 
                 <Footer/>
                </>
              );
        } else {
            if (i == data.length -1) { /* si l'entièreté des données est parcouru et qu'aucun id ne correspond , alors l'id est invalide et le composant Navigate to redirige vers la page d'erreur */
                return (
                    <Navigate to="/error"/>
                )
            } else {
                i++;
            }
        }
    }
  }