import davidImage from "../images/david.jpg"
import mailIcon from "../images/mail-icon.png"
import linkedinIcon from "../images/linkedin-icon.png"
import "../styles/Info.css"

export default function Info() {
  return (
    <>
    <img src={davidImage} className="card__image" alt="david balleza"/>
    <div className="card__info">
      <h1 className="card__info--name">David Balleza</h1>
      <h2 className="card__info--role">Full Stack Web Developer</h2>
      <small className="card__info--site">
        <a href="https://davidballezaa.github.io/portfolio/" target="_blank" rel="noreferrer">davidballezaa.github.io</a>
      </small>
      <div className="card__info--buttons">
        <a href="mailto:davidballezaa@gmail.com" target="_blank" rel="noreferrer" className="buttons--email">
          <img src={mailIcon} alt="mail icon"/>
          <span>Email</span>
        </a>
        <a href="https://www.linkedin.com/in/davidballezaa/" target="_blank" rel="noreferrer" className="buttons--linkedin">
          <img src={linkedinIcon} alt="linkedin logo" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
    </>
  )
}