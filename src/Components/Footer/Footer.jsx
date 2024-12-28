
import React from "react";
import footerCSS from './../Footer/Footer.module.css'

function Footer(){
    return(
        <footer id="contact" className={`${footerCSS.footer_wrapper} section`}>
            <div className={footerCSS.FooterLinks}>
                <div className={footerCSS.logo}></div>
                <h2>Centru de Agrement Yanis & Luyza</h2>
                <p>Un refugiu unde armonia naturii se împletește cu eleganța confortului, unde zâmbetele și liniștea se contopesc, creând o experiență de neuitat. Aici, fiecare moment devine o poveste, iar fiecare vizitator pleacă cu amintiri prețioase pentru suflet.</p>
            </div>
            <div className={footerCSS.FooterLinks}>
                <h3>Cateva Linkuri:</h3>
                {/* <p >Despre</p> */}
                <li><a href="#despre-noi">Despre Noi</a></li>
                {/* <p>Contact us</p> */}
                <li><a href="#contact">Contact</a></li>
                {/* <p>Camere</p> */}
                <li><a href="#camere">Camere</a></li>
            </div>
            <div className={footerCSS.FooterLinks}>
            <h3>Locatia</h3>
                <p>Romania, Judetul Gorj ,Novaci </p>
            </div>
            <div className={footerCSS.FooterLinks}>
            <h3>Contact Us</h3>
            <p>
                    Adresa: 
                    <a
                        href="45°09'16.0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={footerCSS.link}
                    >
                        Baia de Fier , 
                    </a>
                </p>
                <p>
                    Email: 
                    <a
                        href="mailto:adrian.cirtina@yahoo.com"
                        className={footerCSS.link}
                    >
                        lilianateo03@yahoo.com
                    </a>
                </p>   <p>
                    Telefon: 
                    <a
                        href="tel:0757741699"
                        className={footerCSS.link}
                    >
                        0762439377
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
