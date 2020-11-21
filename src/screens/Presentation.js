import {LoginBoxContainer} from '../components/UI/LoginBox'
import Logo from '../assets/NetflixLogo.svg'
import "../styles/PresentationScreen.css"

function Presentation() {
  return (
    <>
      <div className="presentation-screen-container">
        <div className="presentation-wrapper">
          <div>
            <img src={Logo} alt="Netflix" />
            <button>Entrar</button>
          </div>
          <section>
            <h1>Filmes, séries e muito mais.</h1>
            <h1>Sem limites.</h1>
            <h2>Assista onde quiser. Cancele quando quiser.</h2>
            <LoginBoxContainer></LoginBoxContainer>
          </section>
        </div>
      </div>
    </>
  );
}

export default Presentation
