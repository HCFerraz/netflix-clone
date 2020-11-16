import { HiOutlineChevronRight } from 'react-icons/hi'
import NetflixLogo from '../assets/icons8-netflix2.svg'
import "../styles/PresentationScreen.css"

function Presentation() {
  return (
    <>
      <div className="container">
        <div className="text-wrapper">
          <div>
            <img src={NetflixLogo} alt="Netflix" />
            <button>Entrar</button>
          </div>
          <section>
            <h1 style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: "48px", lineHeight: "90%" }}>Filmes, séries e muito mais.</h1>
            <h1 style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: "48px" }}>Sem limites.</h1>
            <h2 style={{ textAlign: "center", color: "white", fontSize: "24px", paddingTop: "20px", paddingBottom: "42px" }}>Assista onde quiser. Cancele quando quiser.</h2>
            <p style={{ textAlign: "center", color: "white", fontSize: "19px" }}>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
            <div className="search-box">
              <input placeholder="Email" />
              <button>Vamos lá <HiOutlineChevronRight /></button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Presentation
