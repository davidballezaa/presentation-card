import davidImage from "../images/david.jpg"
import "../styles/Info.css"

export default function Info() {
  return (
    <>
    <img src={davidImage} className="card__image"/>
    <div className="card__info">
      <h1>David Balleza</h1>
      <h2>Full Stack Web Developer</h2>
      <p>davidballezaa.github.io</p>
      <div className="card__info--buttons">
        <a href="" target="_blank">
          <img src="" />
          Email
        </a>
        <a href="" target="_blank">
          <img src="" />
         LinkedIn 
        </a>
      </div>
    </div>
    </>
  )
}