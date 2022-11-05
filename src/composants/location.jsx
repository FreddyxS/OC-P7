import data from "../data.json";
import {Link} from "react-router-dom";

export default function Location() {
    return(
        <div className="location__container">
            {data.map((data) => ( /*itère sur toute les données afin d'afficher tout les logements disponibles*/
                <div className="card" key={data.id}>
                    <Link to ={`/logement/${data.id}`}>
                        <img src={data.cover} alt={data.title}></img>
                        <h2>{data.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}