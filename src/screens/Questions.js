import { HiOutlineChevronRight } from 'react-icons/hi'
import DivisionBar from '../components/DivisionBar'
import QuestionButton from '../components/QuestionButton'
import '../styles/PresentationScreen.css'

function Questions() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "column", alignItems: "center", minHeight: "850px" }}>
                <p style={{ fontSize: "48.5px", fontWeight: "bold", marginTop: "32px" }}>Perguntas frequentes</p>
                <div>
                    <QuestionButton
                        question="O que é a Netflix?" answer={`A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet. 
                        \n Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.`} />
                    <QuestionButton 
                        question="Quanto custa a Netflix?" answer="Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$21,90 a R$45,90 por mês. Sem contrato nem taxas extras." />
                    <QuestionButton 
                        question="Onde posso assistir?" answer={`Assista onde quiser, o quanto quiser e em um número ilimitado de aparelhos. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames. 
                        \n Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar.`} />
                    <QuestionButton question="Como faço para cancelar?" answer="A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques.
                        Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento." />
                    <QuestionButton question="O que eu posso assistir na Netflix?" answer="A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser." />
                </div>
                <p style={{ fontSize: "19px", letterSpacing: "0.5px", marginTop: "30px" }}>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "-5px", marginBottom: "40px" }}>
                    <input style={{ width: "450px", height: "60px", fontSize: "16.5px" }} placeholder="Email" />
                    <button style={{ height: '60px', width: '182px', backgroundColor: '#E50914', color: 'white', border: '0', fontSize: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Vamos lá <i style={{ marginTop: "8px", marginLeft: "8px" }}><HiOutlineChevronRight size="22px" /></i></button>
                </div>
            </div>
            <DivisionBar />
        </>
    )
}

export default Questions