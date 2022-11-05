import StarRedM from "../assets/STAR_RED_M.png";
import StarGreyM from "../assets/STAR_GREY_M.png";
import StarRed from "../assets/STAR_RED.png";
import StarGrey from "../assets/STAR_GREY.png";

export default function Stars(props) { // Ce composant vérifie le rating de l'hôte et renvoie les bonnes couleurs d'étoiles à l'aide d'une expression switch 
    switch(props.rating) {
        case "1":
            return (
                <div className="star__container">
                    <picture>
                        <source media="(min-width:992px)" srcSet={StarRed}></source>
                        <img className="star" src={StarRedM} alt="étoile rouge"></img>
                    </picture>
                    <picture>
                        <source media="(min-width:992px)" srcSet={StarGrey}></source>
                        <img className="star" src={StarGreyM} alt="étoile grise"></img>
                    </picture>
                    <picture>
                        <source media="(min-width:992px)" srcSet={StarGrey}></source>
                        <img className="star" src={StarGreyM} alt="étoile grise"></img>
                    </picture>
                    <picture>
                        <source media="(min-width:992px)" srcSet={StarGrey}></source>
                        <img className="star" src={StarGreyM} alt="étoile grise"></img>
                    </picture>
                    <picture>
                        <source media="(min-width:992px)" srcSet={StarGrey}></source>
                        <img className="star" src={StarGreyM} alt="étoile grise"></img>
                    </picture>
                </div>
            );
        case "2":
            return (
                <div className="star__container">
                    <picture>
                        <source media="(min-width:992px)" srcSet={StarRed}></source>
                        <img className="star" src={StarRedM} alt="étoile rouge"></img>
                    </picture>
                    <picture>
                        <source media="(min-width:992px)" srcSet={StarRed}></source>
                        <img className="star" src={StarRedM} alt="étoile rouge"></img>
                    </picture>
                    <picture>
                        <source media="(min-width:992px)" srcSet={StarGrey}></source>
                        <img className="star" src={StarGreyM} alt="étoile grise"></img>
                    </picture>
                    <picture>
                        <source media="(min-width:992px)" srcSet={StarGrey}></source>
                        <img className="star" src={StarGreyM} alt="étoile grise"></img>
                    </picture>
                    <picture>
                        <source media="(min-width:992px)" srcSet={StarGrey}></source>
                        <img className="star" src={StarGreyM} alt="étoile grise"></img>
                    </picture>
                </div>
            )
        case "3":
            return (
                <div className="star__container">
                    <picture>
                        <source media="(min-width:992px)" srcSet={StarRed}></source>
                        <img className="star" src={StarRedM} alt="étoile rouge"></img>
                    </picture>
                    <picture>
                        <source media="(min-width:992px)" srcSet={StarRed}></source>
                        <img className="star" src={StarRedM} alt="étoile rouge"></img>
                    </picture>
                    <picture>
                        <source media="(min-width:992px)" srcSet={StarRed}></source>
                        <img className="star" src={StarRedM} alt="étoile rouge"></img>
                    </picture>
                    <picture>
                        <source media="(min-width:992px)" srcSet={StarGrey}></source>
                        <img className="star" src={StarGreyM} alt="étoile grise"></img>
                    </picture>
                    <picture>
                        <source media="(min-width:992px)" srcSet={StarGrey}></source>
                        <img className="star" src={StarGreyM} alt="étoile grise"></img>
                    </picture>
                </div>
            )
        case "4":
            return (
                <div className="star__container">
                <picture>
                    <source media="(min-width:992px)" srcSet={StarRed}></source>
                    <img className="star" src={StarRedM} alt="étoile rouge"></img>
                </picture>
                <picture>
                    <source media="(min-width:992px)" srcSet={StarRed}></source>
                    <img className="star" src={StarRedM} alt="étoile rouge"></img>
                </picture>
                <picture>
                    <source media="(min-width:992px)" srcSet={StarRed}></source>
                    <img className="star" src={StarRedM} alt="étoile rouge"></img>
                </picture>
                <picture>
                    <source media="(min-width:992px)" srcSet={StarRed}></source>
                    <img className="star" src={StarRedM} alt="étoile rouge"></img>
                </picture>
                <picture>
                    <source media="(min-width:992px)" srcSet={StarGrey}></source>
                    <img className="star" src={StarGreyM} alt="étoile grise"></img>
                </picture>
            </div>
            )
        case "5":
            return (
                <div className="star__container">
                <picture>
                    <source media="(min-width:992px)" srcSet={StarRed}></source>
                    <img className="star" src={StarRedM} alt="étoile rouge"></img>
                </picture>
                <picture>
                    <source media="(min-width:992px)" srcSet={StarRed}></source>
                    <img className="star" src={StarRedM} alt="étoile rouge"></img>
                </picture>
                <picture>
                    <source media="(min-width:992px)" srcSet={StarRed}></source>
                    <img className="star" src={StarRedM} alt="étoile rouge"></img>
                </picture>
                <picture>
                    <source media="(min-width:992px)" srcSet={StarRed}></source>
                    <img className="star" src={StarRedM} alt="étoile rouge"></img>
                </picture>
                <picture>
                    <source media="(min-width:992px)" srcSet={StarRed}></source>
                    <img className="star" src={StarRedM} alt="étoile rouge"></img>
                </picture>
            </div>
            )
        default :
            return (
                console.log("Error : no rating specified")
            )
    }
}