import React from 'react'
import './About.css'
import poza_despre from '../../assets/back.png'
import poza_profil from '../../assets/casa11.jpg'


const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>Despre noi:</h1>
        <img src = {poza_despre}/>
      </div>
      <div className="about-section">
        <div className="aboutLeft">
            <img src={poza_profil} alt="" />
        </div>
        <div className="aboutRight">
            <div className="about-paragraph"></div>
            <p>Posibilitatea de a petrece timpul liber in aerul curat al statiunii turistice Baia de Fier-Gorj</p>
            <p>    Centrul de Agrement este amplasat la 30 km de statiunea turistica Rânca Sky Resort.Din curtea Centrului de Agrement cât și din interiorul Centrului le vei privii pe geam, vei vedea muntele si statiunea Rânca in toata splendoarea ei.Ofera diverse facilitati, un mediu plăcut pentru petrecerea timpului liber prin activități sportive si recreative</p>
            <p>Centrul este un spatiu integral de distractie si voie buna ce se adreseaza unui  trafic extis de la copii tineri pana la adulti si familii</p>
            <p>Cu un design modern va pune la dispozitie o serie de jocuri pentru activitati recreative, atat in interior cat si in exeterior, de la cele mai clasice pana la cele mai moderne.</p>
        
        </div>
        <div className="about-services">
            <div style={{fontSize :32}}>Pricipalele Activitati</div>
            <div className="about-service"><p>masa pingpong</p><hr style={{width:"50%"}}/></div>
            <div className="about-service"><p>teren de volei</p><hr style={{width:"50%"}}/></div>
            <div className="about-service"><p>traseu de biciclete</p><hr style={{width:"50%"}}/></div>
            <div className="about-service"><p>loc de relaxare</p><hr style={{width:"50%"}}/></div>
        </div>
      </div>
    </div>
  )
}

export default About
