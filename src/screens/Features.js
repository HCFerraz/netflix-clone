import FeatureContainer from '../components/Features/Container/index'
import DivisionBar from '../components/UI/DivisionBar'
import HomeDisplay from '../assets/HomeDisplay.png'
import Home from '../assets/Home.m4v'
import StrangerThingsDownloadCellphone from '../assets/StrangerThingsDownloadCellphone.jpg'
import WatchAnywhereDisplay from '../assets/WatchAnywhereDisplay.png'
import StrangerThingsVideo from '../assets/StrangerThings.m4v'
import DownloadGif from '../assets/Download.gif'
import StrangerThingsWallpaper from '../assets/StrangerThingsWallpaper.png'

function FeaturesScreen() {
    return (
        <>
            <DivisionBar />
            <FeatureContainer
                title="Aproveite na TV."
                description="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros aparelhos."
                display={HomeDisplay}
                screen={Home}
                container="First"/>
            <DivisionBar />
            <FeatureContainer
                title="Baixe séries para assistir offline."
                description="Salve seus títulos favoritos e sempre tenha algo para assistir."
                display={StrangerThingsDownloadCellphone}
                gif={DownloadGif}
                wallpaper={StrangerThingsWallpaper}
                container="Second"/>
            <DivisionBar />
            <FeatureContainer
                title="Assista quando quiser."
                description="Assista no celular, tablet, smart TV ou notebook sem pagar a mais por isso." 
                display={WatchAnywhereDisplay}
                screen={StrangerThingsVideo}
                container="Third"
                />
            <DivisionBar />
        </>
    )
}

export default FeaturesScreen