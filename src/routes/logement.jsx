import Header from "../composants/header";
import Carousel from "../composants/carousel"
import data from "../data.json";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Dropdown from "../composants/dropdown";
import Footer from "../composants/footer";

export default function Logement() {
    const {id} = useParams();
    for (let i in data) {
        if (id === data[i].id) {
            return (
                <>
                 <Header/>
                 <Carousel index={data[i]} />
                 <div className="informations">
                    <div>{data[i].title}</div>
                    <div>{data[i].location}</div>
                    <div className="tag__container">
                        {data[i].tags.map((data) => (
                            <div className="tag" key={data}>
                                {data}
                            </div>
                        ))}
                    </div>
                 </div>
                 <div className="host">
                    <div>{data[i].host.name}</div>
                    <img className="host__img" src={`${data[i].host.picture}`} alt="Hôte"></img>
                 </div>
                 <Dropdown title="Description" texte={data[i].description} />
                 <Dropdown title="Équipements" texte={data[i].equipments} />
                 <Footer/>
                </>
              );
        } else {
            if (i == data.length -1) {
                return (
                    <Navigate to="/error"/>
                )
            } else {
                i++;
            }
        }
    }
  }