import arrowLeft from "../assets/ARROW_LEFT.png"
import arrowRight from "../assets/ARROW_RIGHT.png"
import data from "../data.json";
import { useState } from "react";

export default function Carousel(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
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
        backgroundImage: `url(${props.index.pictures[currentIndex]})`
    }

    if (props.index.pictures.length > 1 ) {
        return (
            <div className="carousel__container">
                <img className="arrow__left" src={arrowLeft} alt="Flêche gauche" onClick={goToPrevious}></img>
                <img className="arrow__right" src={arrowRight} alt="Flêche droite" onClick={goToNext}></img>
                <div style={carouselStyle}></div>
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