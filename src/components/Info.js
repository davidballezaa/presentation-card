import davidImage from "../images/david.jpg"
import mailIcon from "../images/mail-icon.png"
import linkedinIcon from "../images/linkedin-icon.png"
import "../styles/Info.css"

export default function Info() {
  return (
    <>
    <img src={davidImage} className="card__image"/>
    <div className="card__info">
      <h1 className="card__info--name">David Balleza</h1>
      <h2 className="card__info--role">Full Stack Web Developer</h2>
      <small className="card__info--site">
        <a href="" target="_blank">davidballezaa.github.io</a>
      </small>
      <div className="card__info--buttons">
        <a href="" target="_blank" className="buttons--email">
          <img src={mailIcon} />
          <span>Email</span>
        </a>
        <a href="" target="_blank" className="buttons--linkedin">
          <img src={linkedinIcon} />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
    </>
  )
}