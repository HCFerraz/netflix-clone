import FeaturesScreen from '../screens/Features'
import Informations from '../screens/Informations'
import Presentation from '../screens/Presentation'
import Questions from '../screens/Questions'

function LandingPage() {
    return (
        <>
            <Presentation />
            <FeaturesScreen />
            <Questions />
            <Informations />
        </>
    )
}

export default LandingPage