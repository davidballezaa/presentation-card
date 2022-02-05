import "../styles/Footer.css"
import twitterIcon from "../images/twitter-icon.png"
import facebookIcon from "../images/facebook-icon.png"
import instagramIcon from "../images/instagram-icon.png"
import githubIcon from "../images/github-icon.png"

export default function Footer() {
  return (
    <footer>
      <a href="https://twitter.com/DavidBallezaA" target="_blank" rel="noreferrer">
        <img src={twitterIcon} alt="twitter logo"/>
      </a>
      <a href="https://www.facebook.com/davidballezaa" target="_blank" rel="noreferrer">
        <img src={facebookIcon} alt="facebook logo"/>
      </a>
      <a href="https://www.instagram.com/davidballezaa/" target="_blank" rel="noreferrer">
        <img src={instagramIcon} alt="instagram logo"/>
      </a>
      <a href="https://github.com/davidballezaa" target="_blank" rel="noreferrer">
        <img src={githubIcon} alt="github logo"/>
      </a>
    </footer>
  )
}