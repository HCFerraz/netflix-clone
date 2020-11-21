import "../styles/InformationScreen.css"
import { ListItem } from '../components/Informations/List/index'
import { IoIosGlobe } from 'react-icons/io'

function Informations() {
    return (
        <div className="information-screen-container">
            <div className="informations-container">
                <p>Dúvidas? Ligue <a href="tel:0800-761-4631">0800-761-4631</a></p>
                <div className="informations-list-container">
                    <ul>
                        <ListItem link="https://help.netflix.com/support/412" text="Perguntas frequentes" />
                        <ListItem link="https://help.netflix.com" text="Centro de ajuda" />
                        <ListItem link="/youraccount" text="Conta" />
                        <ListItem link="https://media.netflix.com/" text="Imprensa" />
                        <ListItem link="http://ir.netflix.com/" text="Relações com investidores" />
                        <ListItem link="https://jobs.netflix.com/jobs" text="Carreiras" />
                        <ListItem link="/redeem" text="Resgatar cartão pré-pago" />
                        <ListItem link="/gift-cards" text="Comprar cartão pré-pago" />
                        <ListItem link="/watch" text="Formas de assistir" />
                        <ListItem link="https://help.netflix.com/legal/termsofuse" text="Termos de uso" />
                        <ListItem link="https://help.netflix.com/legal/privacy" text="Privacidade" />
                        <ListItem link="https://help.netflix.com/legal/privacy#cookies" text="Preferências de cookies" />
                        <ListItem link="https://help.netflix.com/legal/corpinfo" text="Informações corporativas" />
                        <ListItem link="https://help.netflix.com/contactus" text="Entre em contato" />
                        <ListItem link="https://fast.com" text="Teste de velocidade" />
                        <ListItem link="https://help.netflix.com/legal/notices" text="Avisos legais" />
                        <ListItem link="https://www.netflix.com/br/browse/genre/839338" text="Originais Netflix" />
                    </ul>
                </div>
                <div className="select-language-container">
                    <i><IoIosGlobe size="19px" color="#999999" /></i>
                    <select>
                        <option value="Português">Português</option>
                        <option value="English">English</option>
                    </select>
                </div>
                <p>Netflix Brasil</p>
            </div>
        </div>
    )
}

export default Informations