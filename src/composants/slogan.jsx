import reefM from "../assets/IMG_M.png"
import reef from "../assets/IMG.png"

export default function Slogan() {
    return(
    <div className="slogan__container">
        <picture>
            <source media="(min-width:992px)" srcSet={reef}></source>
            <img className="reef" src={reefM} alt="Recif"></img>
        </picture>
        <div className="slogan__texte__container">
            <p className="slogan__texte">
                Chez vous,
            </p>
            <p className="slogan__texte">
                partout et ailleurs
            </p>
        </div>
    </div>
    );
}