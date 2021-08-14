import React, {useState} from 'react'

import * as Scroll from 'react-scroll';
import { Link} from 'react-scroll'
import emailjs from 'emailjs-com';

import { NavLink } from 'react-router-dom';

import Irl from '../../img/irl.jpg'
import Arrow from '@material-ui/icons/ArrowDownward';

import Website from '../../components/work'
import './Home.scss';


function Home() {

    const [modal, setModal] = useState(false)

    const modalClick =(category)=>{
        console.log(category)
    }

    const Bar =({ percent, text })=>{
        const [style, setStyle] = useState({})
        setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${percent}%`
            }
            setStyle(newStyle);
        }, 200);

        const percentCal=(per)=>{
            let comment = "";
            if(per<=19){comment = "Im getting there"}
            if(per=>20 && per<=40){comment="I know my way around"}
            if(per=>41 && per<=70){comment="I know what im doing"}
            if(per=>71){comment="I know this"}
            return{comment}
        }

        return(
            <div className="home__about__info__bottom__skill__bar">
                <div className="home__about__info__bottom__skill__bar__fill" style={style}>
                    <p>{percentCal(percent)}</p>
                </div>
            </div>
        )
    }

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_utm91tl', 'template_xm5qune', e.target, 'user_NafpG0NIxGhxNGKEXwGb9')
        .then((result) => {console.log(result.text)}, (error) => {console.log(error.text)})
    }

    return (
        <div className="home">
            <div className="home__title">
                <h1 className="home__title__first">Hello, I'm Chris</h1>
                <h1>I am a web developer from Scotland</h1>
                <h1>Click the arrow to learn more about me</h1>
                <div className="home__title__arrow">
                    <Link to="about" spy={true} smooth={true} offset={50} duration={1000}>
                        <Arrow className="home__title__arrow__icon"/>
                    </Link>
                </div>
            </div>
            <div className="home__about" name="about">
                <div className="home__about__info">
                    <div className="home__about__info__top">
                        <h1>This is me:</h1>
                        <img src={Irl} alt="Chris Farrell" className="home__about__info__top__img" />
                        <h1>beautiful, aint I?</h1> 
                    </div>
                    <div className="home__about__info__bottom">
                        <p>I’m a web developer from <span onClick={()=>modalClick('scotland')}>Scotland</span> living near Glasgow. I have Graduated from <span onClick={()=>modalClick('college')}>City of Glasgow College</span> with an HND and from <span onClick={()=>modalClick('uni')}>Edinburgh Napier</span> with an Ordinary Degree, both in Web Development</p>
                        <p>Me and my friend currently own and run a web development business, <span>Ultroniq</span>.</p>
                        <p>I am currently searching for an opportunity to <span>join a company</span> that will help me grow not just my <span>skills in web development</span>, but as a person as well</p>
                        <h4>Specking of <span>coding</span>, have told you what I know?</h4>
                        <div className="home__about__info__bottom__skill">
                            <Bar percent="80" text="JavaScript (React)" />
                            <Bar percent="90" text="HTML / CSS / SCSS" />
                            <Bar percent="30" text="Python" />
                            <Bar percent="20" text="PHP" />
                            <Bar percent="25" text="MongoDB" />
                            <Bar percent="50" text="MySql" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__work">
                <h1>Portfolio</h1>
                <Website />
            </div>
            <div className="home__contact">
                <h1>Want to get in touch with me?</h1>
                
                <form className="home__contact__form" onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" placeholder="Christopher Farrell" required />
                    <label>Email</label>
                    <input type="email" name="user_email" placeholder="chrisFarrell@email.com" required />
                    <label>Message</label>
                    <textarea name="message" placeholder="Message..." required />
                    <button type="submit" value="Send">Send message</button>
                </form>
            </div>
        </div>
    )
}
export default Home