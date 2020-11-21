import "../../../../../node_modules/video-react/dist/video-react.css"
import { Player, ControlBar } from 'video-react'
import {
    HomeContainer,
    HomeTextWrapper,
    Title,
    Description,
    HomeAnimationContainer,
    AnimationImage,
    HomeAnimationVideo,
    DownloadContainer,
    Download,
    DownloadTextWrapper,
    DownloadAnimationContainer,
    DownloadAnimationImage,
    WatchAnywhereContainer,
    WatchAnywhereAnimationContainer,
    WatchAnywhereAnimationVideo,
    WatchAnywhereTextWrapper
} from './styles'


export const RenderContainer = (props) => {
    switch (props.container) {
        case 'First':
            return (
                <HomeContainer>
                    <HomeTextWrapper>
                        <Title>{props.title}</Title>
                        <Description>{props.description}</Description>
                    </HomeTextWrapper>
                    <HomeAnimationContainer>
                        <AnimationImage src={props.display} />
                        <HomeAnimationVideo>
                            <Player src={props.screen} muted autoPlay loop fluid>
                                <ControlBar disableCompletely />
                            </Player>
                        </HomeAnimationVideo>
                    </HomeAnimationContainer>
                </HomeContainer>
            );
        case 'Second':
            return (
                <DownloadContainer>
                    <DownloadTextWrapper>
                        <Title>{props.title}</Title>
                        <Description>{props.description}</Description>
                    </DownloadTextWrapper>
                    <DownloadAnimationContainer>
                        <DownloadAnimationImage src={props.display} />
                        <Download>
                            <img style={{ maxWidth: "49px", marginLeft: "5px" }} src={props.wallpaper} />
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <p style={{ fontWeight: "bold" }} >Stranger Things</p>
                                <p style={{ fontSize: "14.5px", color: "#0071D4" }}>Download em andamento...</p>
                            </div>
                            <img style={{ maxWidth: "50px" }} src={props.gif} />
                        </Download>
                    </DownloadAnimationContainer>
                </DownloadContainer>
            );
        case 'Third':
            return (
                <WatchAnywhereContainer>
                    <WatchAnywhereTextWrapper>
                        <Title>{props.title}</Title>
                        <Description>{props.description}</Description>
                    </WatchAnywhereTextWrapper>
                    <WatchAnywhereAnimationContainer>
                        <AnimationImage src={props.display} />
                        <WatchAnywhereAnimationVideo>
                            <Player src={props.screen} muted autoPlay loop fluid>
                                <ControlBar disableCompletely />
                            </Player>
                        </WatchAnywhereAnimationVideo>
                    </WatchAnywhereAnimationContainer>
                </WatchAnywhereContainer>
            );
        default:
            return null;
    }
}