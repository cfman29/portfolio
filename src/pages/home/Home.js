import React, {useState} from 'react'

import { Link} from 'react-scroll'
import emailjs from 'emailjs-com';
import ReactTooltip from 'react-tooltip';

import Irl from '../../img/irl.jpg'
import Arrow from '@material-ui/icons/ArrowDownward';
import GitHubIcon from '@material-ui/icons/GitHub';

import Work from '../../components/work'
import './Home.scss';

import MyCV from './ChrisFarrellCV.docx'


function Home() {

    const Bar =({ percent, text })=>{
        const [style, setStyle] = useState({})
        setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${percent}%`
            }
            setStyle(newStyle);
        }, 200);

        function comment(){
            if(percent<30){return "Ive got the basics down"}
            if(percent>29 && percent<50){return "I getting there"}
            if(percent>49 && percent<70){return "I know my stuff"}
            if(percent>69){return "I know this"}
        }

        return(
            <div className="home__about__info__bottom__skill__bar">
                <div className="home__about__info__bottom__skill__bar__fill" style={style}>
                    <h6 className="home__about__info__bottom__skill__bar__fill__text">{text}</h6>
                </div>              
                <h6 className="home__about__info__bottom__skill__bar__fill__tool" data-tooltip={comment(percent)}></h6>
            </div>
        )
    }

    function sendEmail(e) {
        const {REACT_APP_SERVICE, REACT_APP_TEMPLATE, REACT_APP_USER} = process.env;
        e.preventDefault()
        emailjs.sendForm(REACT_APP_SERVICE, REACT_APP_TEMPLATE, e.target, REACT_APP_USER)
        .then((result) => {console.log(result.text)}, (error) => {console.log(error.text)})
        alert('The form was submitted successfully')
    }

    const cvdownload =()=>{
        console.log('Error with CV download')
    }

    return (
        <div className="home">
            <ReactTooltip />
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
                        <p>I’m a web developer from <span>Scotland</span>. I have Graduated from <span>Edinburgh Napier University</span> with a Degree in Web Development.</p>
                        <p>Currently, I run a <span>web development company</span> with my business partner, <span>Ultroniq</span>. We founded Ultroniq in 2018 and has been on the go ever since</p>
                        <p>I am currently searching for an opportunity to <span>join a company</span> that will help me grow not just my <span>skills in web development</span>, but as a person as well</p>
                        <h4>Speaking of <span>coding</span>, have I told you what I know?</h4>
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
                <Work />
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
            <div className="home__footer">
                <div className="home__footer__cv">
                    <a href={MyCV} download="Chris Farrell CV.docx">Download my CV</a> 
                </div>
                <div className="home__footer__social">
                    <a href="https://github.com/cfman29"><GitHubIcon /></a>
                </div>
            </div>
        </div>
    )
}
export default Home