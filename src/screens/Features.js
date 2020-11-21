import Feature from '../components/Feature'
import DivisionBar from '../components/UI/DivisionBar'
import TV from '../assets/tv.png'
import FVid from '../assets/firstVideo.m4v'
import Eleven from '../assets/secondScreen.jpg'
import Mac from '../assets/thirdDisplay.png'
import SVid from '../assets/secondVideo.m4v'
import Icon from '../assets/downloadIcon.gif'
import Stranger from '../assets/strangerThingsWallpaper.png'

function FeaturesScreen() {
    return (
        <>
            <DivisionBar />
            <Feature
                title="Aproveite na TV."
                description="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros aparelhos."
                display={TV}
                screen={FVid}
                first/>
            <DivisionBar />
            <Feature
                title="Baixe séries para assistir offline."
                description="Salve seus títulos favoritos e sempre tenha algo para assistir."
                display={Eleven}
                icon={Icon}
                stranger={Stranger}
                second/>
            <DivisionBar />
            <Feature
                title="Assista quando quiser."
                description="Assista no celular, tablet, smart TV ou notebook sem pagar a mais por isso." 
                display={Mac}
                screen={SVid}
                />
            <DivisionBar />
        </>
    )
}

export default FeaturesScreen