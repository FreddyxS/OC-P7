import arrowRight from "../assets/ARROW_RIGHT.png"
import arrowLeft from "../assets/ARROW_LEFT.png"
import arrowLeftM from "../assets/ARROW_LEFT_M.png"
import arrowRightM from "../assets/ARROW_RIGHT_M.png"
import { useState } from "react";

export default function Carousel(props) {
    const [currentIndex, setCurrentIndex] = useState(0); /*useState permet de re-render le composant selon l'index de l'image dans le carousel afin d'avoir un affichage dynamique*/
    const goToPrevious = () => { /*ces deux fonctions contrôlent le changement d'index selon la flêche suivante ou précédente*/
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? props.index.pictures.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === props.index.pictures.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex)
    }
    const carouselStyle = {
        width:"100%",
        height:"100%",
        borderRadius:"10px",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundImage: `url(${props.index.pictures[currentIndex]})` /*cette variable contrôle l'image affichée*/
    }

    if (props.index.pictures.length > 1 ) { /*vérifie le nombre d'image afin de ne pas affiché de flèches lorsqu'il n'y a qu'une seule image*/
        return (
            <div className="carousel__container">
                <div className="arrow__container">
                    <picture className="arrow__left" onClick={goToPrevious}>
                        <source media="(min-width:992px)" srcSet={arrowLeft}></source>
                        <img src={arrowLeftM} alt="Flêche gauche"></img>
                    </picture>
                    <picture className="arrow__right" onClick={goToNext}>
                        <source media="(min-width:992px)" srcSet={arrowRight}></source>
                        <img src={arrowRightM} alt="Flêche droite"></img>
                    </picture>
                </div>
                {/*<img className="arrow__left" src={arrowLeft} alt="Flêche gauche" onClick={goToPrevious}></img>
                <img className="arrow__right" src={arrowRight} alt="Flêche droite" onClick={goToNext}></img>*/}
                <div style={carouselStyle}></div>
                <div className="carousel__index">
                    {currentIndex+1}/{props.index.pictures.length}
                </div>
            </div>
        )
    } else {
        return (
            <div className="carousel__container">
                <div style={carouselStyle}></div>
            </div>
        )
    }
    
}