import whats from '../../img/whatsapp.png';
import linkedin from '../../img/lin.png';
import gmail from '../../img/gmail.png';
import git from '../../img/github.png';
import yo from '../../img/yo4.jpeg';
import './About.scss'
export const AboutMe = () => {
    return(
        <>
        <div>

                <h2 className="section-name">About Me</h2>
        <div className='todo-about'>
            <div className="container-about">
            <div className="base_imagen">
            <img className="imagen-mia" src={yo} alt="" />
            </div>
            <p className='parrafo'>Hello! <br/> 
            My name is Gonzalo Juarez and  <br/>I am a Full-Stack developer graduated from the SoyHenry academy.
            I love programming <br/>and computing.
            </p>
            </div>
        </div>
        <section >
        <h2 className="section-name" >Contact Me</h2>
        <div id="redes">
            <div className="redes">
                <a href="https://api.whatsapp.com/send?phone=1130449589" target="_BLANK">
                    <img className='imagenSocial' src={whats} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/gonzalo-juarez-o2/" target='_BLANK'class="home__social-icon">
                    <img className="imagenSocial" src={linkedin} alt=""/>
                </a>
                <a href="https://mail.google.com/a/?view=cm&fs=1&to=juarezgonzalo000@gmail.com" target="_BLANK">
                    <img className="imagenSocial"  src={gmail} alt=""/>
                </a>
                <a href="https://github.com/Gonzaloejuarez" target="_BLANK">
                    <img className="imagenSocial"  src={git} alt=""/>
                </a>
            </div>
        </div>
    </section>
    <section>
        <div className="porfolio">
            <h2 className='section-name'>Porfolio</h2>
            <p> please look at my website</p>
            <a href="https://gonzalo-juarez-portoflio.vercel.app/" target='_BLANK'>Click Here</a>
        </div>

    </section>
        </div>
        </>
    )
}

export default AboutMe