import Link from '../components/pInformation'
import "../styles/test.css"
import { IoIosGlobe } from 'react-icons/io'

function Informations() {
    return (
        <div style={{ height: "440px", backgroundColor: "#000000", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ marginLeft: "190px", height: "82%" }}>
                <p style={{ color: "#757575", marginTop: "34px" }}>Dúvidas? Ligue <a>0800-761-4631</a></p>
                <div style={{ height: "170px", width: "868px", display: "flex", justifyContent: 'center', marginTop: "16px" }}>
                    <ul className="saas" style={{ listStyleType: "none", margin: "0", padding: "0" }}>
                        <Link text="Perguntas frequentes" />
                        <Link text="Centro de ajuda" />
                        <Link text="Conta" />
                        <Link text="Imprensa" />
                        <Link text="Relações com investidores" />
                        <Link text="Carreiras" />
                        <Link text="Resgatar cartão pré-pago" />
                        <Link text="Comprar cartão pré-pago" />
                        <Link text="Formas de assistir" />
                        <Link text="Termos de uso" />
                        <Link text="Privacidade" />
                        <Link text="Preferências de cookies" />
                        <Link text="Informações corporativas" />
                        <Link text="Entre em contato" />
                        <Link text="Teste de velocidade" />
                        <Link text="Avisos legais" />
                        <Link text="Originais Netflix" />
                    </ul>
                </div>
                <div className="select">
                    <i><IoIosGlobe size="19px" color="#999999" /></i>
                    <select>
                        <option value="Portuguese">Português</option>
                        <option value="English">English</option>
                    </select>
                </div>
                <p style={{ fontSize: "13px", color: "#757575", marginTop: "27px" }}>Netflix Brasil</p>
            </div>
        </div>
    )
}

export default Informations