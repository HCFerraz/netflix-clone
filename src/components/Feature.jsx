import "../../node_modules/video-react/dist/video-react.css"
import { Player, ControlBar } from 'video-react'
import {
    Container, TextWrapper, Title,
    Description, AnimationContainer, AnimationImage,
    AnimationVideo, RowReverseContainer, Download,
    TextSecond, AnimationContSecond, AnimationThird,
    ThirdAniCont, TextThird, ThirdContainer
} from '../components/FeatureJSXStyles'

function Feature(props) {
    const RenderContainer = () => {
        if (props.first) {
            return (
                <Container>
                    <TextWrapper>
                        <Title>{props.title}</Title>
                        <Description>{props.description}</Description>
                    </TextWrapper>
                    <AnimationContainer>
                        <AnimationImage src={props.display} />
                        <AnimationVideo>
                            <Player src={props.screen} muted autoPlay loop fluid>
                                <ControlBar disableCompletely />
                            </Player>
                        </AnimationVideo>
                    </AnimationContainer>
                </Container>
            )
        }
        else if (props.second) {
            return (
                <RowReverseContainer>
                    <TextSecond>
                        <Title>{props.title}</Title>
                        <Description>{props.description}</Description>
                    </TextSecond>
                    <AnimationContSecond>
                        <AnimationImage style={{ marginLeft: "12px", marginTop: "74px", width: "79%" }} src={props.display} />
                        <Download>
                            <img style={{ maxWidth: "49px", marginLeft: "5px" }} src={props.stranger} />
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <p style={{ fontWeight: "bold" }} >Stranger Things</p>
                                <p style={{ fontSize: "14.5px", color: "#0071D4" }}>Download em andamento...</p>
                            </div>
                            <img style={{ maxWidth: "50px" }} src={props.icon} />
                        </Download>
                    </AnimationContSecond>
                </RowReverseContainer>
            )
        }
        else {
            return (
                <ThirdContainer>
                    <TextThird>
                        <Title>{props.title}</Title>
                        <Description>{props.description}</Description>
                    </TextThird>
                    <ThirdAniCont>
                        <AnimationImage src={props.display} />
                        <AnimationThird>
                            <Player src={props.screen} muted autoPlay loop fluid>
                                <ControlBar disableCompletely />
                            </Player>
                        </AnimationThird>
                    </ThirdAniCont>
                </ThirdContainer>
            )
        }
    }
    return (
        <>
            {RenderContainer()}
        </>
    )
}
export default Feature