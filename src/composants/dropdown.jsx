import {useState} from "react";
import arrowDown from "../assets/ARROW_DOWN.png"
import arrowDownM from "../assets/ARROW_DOWN_M.png"
import arrowUp from "../assets/ARROW_UP.png"
import arrowUpM from "../assets/ARROW_UP_M.png"

export default function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false) /*useState permet de re-render le composant selon son état (ouvert ou fermé) afin d'avoir un affichage dynamique après un clic sur celui-ci*/
    if (isOpen === true) {
        if (typeof props.texte === "string") { /* vérifie si la prop est un string pour gérer la manière d'afficher les donnés (dans le deuxième cas nous avons une liste et nous itérons donc dessus avec la fonction map)*/
            return (
                <div className="dropdown__enclose">
                <button className="dropdown__opened" onClick={() => setIsOpen(false)}>
                    <div className="dropdown__align">
                        <p>{props.title}</p>
                        <picture className="arrow__up">
                            <source media="(min-width:992px)" srcSet={arrowUp}></source>
                            <img src={arrowUpM} alt="Flêche haut"></img>
                        </picture>  
                    </div>
                </button>
                <div className="dropdown__background">
                    <p>{props.texte}</p>
                </div>
                </div>
            )
        } else {
          return (
            <div className="dropdown__enclose">
            <button className="dropdown__opened" onClick={() => setIsOpen(false)}>
                <div className="dropdown__align">
                    <p>{props.title}</p>
                    <picture className="arrow__up">
                        <source media="(min-width:992px)" srcSet={arrowUp}></source>
                        <img src={arrowUpM} alt="Flêche haut"></img>
                    </picture>
                </div>
            </button>
            <div className="dropdown__background">
            {props.texte.map((data) =>
                    <p key={data}>{data}</p>
                    )}
            </div>
            </div>
          )
        }
    } else {
        return (
            <button className="dropdown__closed" onClick={() => setIsOpen(true)}>
                <div className="dropdown__align">
                    <p>{props.title}</p>
                    <picture className="arrow__down">
                        <source media="(min-width:992px)" srcSet={arrowDown}></source>
                        <img src={arrowDownM} alt="Flêche haut"></img>
                    </picture> 
                </div> 
            </button> 
        )
    }
}