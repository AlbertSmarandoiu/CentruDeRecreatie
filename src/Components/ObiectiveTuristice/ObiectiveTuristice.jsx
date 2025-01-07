

import React from "react"; 

import ObiectiveTuristiceCSS from './../ObiectiveTuristice/ObiectiveTuristice.module.css';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import img1 from './../../assets/muierii1.png';
import img2 from './../../assets/casutele1.png';
import img3 from './../../assets/transalpina1.png';
import img4 from './../../assets/pesterapolovragi.png';
import img5 from './../../assets/padure1.png';
import img6 from './../../assets/brancusi.png';
import { Autoplay } from "swiper/modules";

function ObiectiveTuristice() {
    return (
        <div className={`${ObiectiveTuristiceCSS.ObiectiveTuristice_container} section`}>
            <small style={{ fontSize: 30 }} className="secxtion_Heading"></small>
            <h2 className="section_Title">Cateva obiective <span>turistice</span> din zona noastra:</h2>     

            <Swiper 
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                }}
                speed={2000}
                modules={[Autoplay]}
                className={ObiectiveTuristiceCSS.swiper}
            >
                <SwiperSlide>
                    <div id="PesteraMuierii" className={ObiectiveTuristiceCSS.obiective_item}>
                        <img src={img1} alt="ObiectivaTuristice-img" className={ObiectiveTuristiceCSS.image}/>
                        <div className={ObiectiveTuristiceCSS.content}>
                            <h2>Pestera Muierii</h2>
                            <p>Peștera Muierii, situată în comuna Baia de Fier, județul Gorj, este una dintre cele mai remarcabile atracții naturale din România. Această peșteră impresionează prin frumusețea formațiunilor sale carstice, dar și prin importanța sa arheologică și istorică. Descoperirile din peșteră, inclusiv relicve din perioade preistorice, o transformă într-un loc de mare interes pentru vizitatori și cercetători deopotrivă. Accesibilă și bine amenajată pentru turiști, Peștera Muierii oferă o experiență fascinantă, completată de peisajele spectaculoase și atracțiile din zona Baia de Fier.</p>
                            <button onClick={() => window.open('https://www.libertatea.ro/lifestyle/pestera-muierii-cum-ajungi-legenda-obiective-turistice-3601397', '_blank')}>
                                Vezi site-pestera
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="Casutele" className={ObiectiveTuristiceCSS.obiective_item}>
                        <img src={img2} alt="ObiectivaTuristice-img" className={ObiectiveTuristiceCSS.image}/>
                        <div className={ObiectiveTuristiceCSS.content}>
                            <h2>Casutele Rasturnate</h2>
                            <p>Te-ai gândit vreodată cum ar fi să locuiești într-o casă complet răsturnată, unde podeaua devine tavan și totul pare desprins dintr-un vis? Noi am transformat această idee în realitate, construind o locuință cu susul în jos! Este o experiență unică și fascinantă, care provoacă percepțiile și aduce un strop de magie în viața de zi cu zi.</p>
                            <button onClick={() => window.open('https://www.casutarasturnata.com/', '_blank')}>
                                Vize Casutele
                                </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ObiectiveTuristiceCSS.obiective_item}>
                        <img src={img3} alt="ObiectivaTuristice-img" className={ObiectiveTuristiceCSS.image}/>
                        <div className={ObiectiveTuristiceCSS.content}>
                            <h2>Transalpina</h2>
                            <p>Transalpina, cunoscută și sub numele de "Drumul Regelui," este cel mai înalt drum rutier din România și din întregul lanț al Munților Carpați. Ajunge la o altitudine impresionantă de 2145 metri în Pasul Urdele, oferind peisaje spectaculoase și o experiență de neuitat pentru iubitorii de natură și aventură. Această șosea legendară îmbină măreția munților cu farmecul serpentinelor, fiind o destinație de neratat pentru turiști și pasionații de condus.</p>
                            <button onClick={() => window.open('https://coltisorderomania.ro/2019/04/11/transalpina-drumul-regelui-cel-mai-inalt-si-mai-frumos-drum-din-romania/', '_blank')}> 
                                Vezi Transalpina
                                </button>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div id="Padurea" className={ObiectiveTuristiceCSS.obiective_item}>
                        <img src={img5} alt="ObiectivaTuristice-img" className={ObiectiveTuristiceCSS.image}/>
                        <div className={ObiectiveTuristiceCSS.content}>
                            <h2>Padurea Colorata</h2>
                            <p>Mihai Țopescu, prin proiectul său, a dorit să atragă atenția asupra defrișărilor ilegale, care duc la dispariția pădurilor. Mesajul său este un apel puternic pentru protejarea naturii.</p>
                            <button onClick={() => window.open('https://limbimoderne.blogspot.com/2018/02/padurea-colorata-manifest-artistic.html', '_blank')}> 
                                Vezi Padurea Colorata
                                </button>
                        </div>
                    </div>
                </SwiperSlide>
               
                
            </Swiper> 
        </div>
    );
}

export default ObiectiveTuristice;