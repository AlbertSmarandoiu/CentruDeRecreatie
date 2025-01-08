import React, { useState } from "react";
import galerieCSS from "./../Galerie/Galerie.module.css";

import img1 from "./../../assets/casa.jpg";
// import img2 from "./../../assets/galerie2.jpg";
import img3 from "./../../assets/casa1.jpg";
import img4 from "./../../assets/casa2.jpg";
import img5 from "./../../assets/pozav5.jpg";
import img6 from "./../../assets/pozav2.jpg";
import img7 from "./../../assets/pozav1.jpg";
import img8 from "./../../assets/casa6.jpg";
import img9 from "./../../assets/pozav10.jpg";
import img10 from "./../../assets/pozav12.jpg";
import img11 from "./../../assets/pozav13.jpg";
import img12 from "./../../assets/pozav14.jpg";
import img13 from "./../../assets/pozav15.jpg"
// import img12 from "./../../assets/galerie12.jpg";
// import img13 from "./../../assets/IMG-20241117-WA0015.jpg";
// import img14 from "./../../assets/IMG-20241117-WA0016.jpg";
// import img15 from "./../../assets/IMG-20241117-WA0017.jpg";
// import img16 from "./../../assets/IMG-20241117-WA0018.jpg";
// import img17 from "./../../assets/IMG-20241117-WA0019.jpg";

// import img18 from "./../../assets/gratar.png";

const images = [
    img1, img3, img4,img5 , img6 , 
    img7 , img8 , img9 , 
    img10,img11,img12,img13
];

function Galerie() {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [showAll, setShowAll] = useState(false); // Starea pentru a afișa toate imaginile
    const [touchStartX, setTouchStartX] = useState(0);

    const openLightbox = (index) => {
        setCurrentIndex(index);
    };

    const closeLightbox = () => {
        setCurrentIndex(null);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        const touchEndX = e.touches[0].clientX;
        const touchDelta = touchEndX - touchStartX;

        // Dacă deplasarea este suficient de mare, navigăm
        if (touchDelta > 50) {
            goToPrevious();
            setTouchStartX(0); // Resetăm poziția de început
        } else if (touchDelta < -50) {
            goToNext();
            setTouchStartX(0); // Resetăm poziția de început
        }
    };

    return (
        <div id="galerieFoto" className={galerieCSS.galerie_Wrapper}>
            <h2 className="section_Title">
                Galerie <span>Foto</span>
            </h2>

            <div className={galerieCSS.galleryGrid}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Photo ${index + 1}`}
                        onClick={() => openLightbox(index)}
                        className={galerieCSS.thumbnail}
                    />
                ))}
            </div>

            {currentIndex !== null && (
                <div
                    className={galerieCSS.lightbox}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <button className={galerieCSS.closeButton} onClick={closeLightbox}>
                        ✖
                    </button>
                    <button className={galerieCSS.prevButton} onClick={goToPrevious}>
                        ◀
                    </button>
                    <img
                        src={images[currentIndex]}
                        alt={`Photo ${currentIndex + 1}`}
                        className={galerieCSS.lightboxImage}
                    />
                    <button className={galerieCSS.nextButton} onClick={goToNext}>
                        ▶
                    </button>
                </div>
            )}
        </div>
    );
}


export default Galerie;