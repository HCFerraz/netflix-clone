import styled from 'styled-components'

const Container = styled.div`
    height: 475px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #000000;
`
const TextWrapper = styled.div`
    margin-left: 7%;
    margin-right: 10px;
`
const Title = styled.h1`
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 20px;
`
const Description = styled.p`
    font-size: 26px;
    line-height: 120%;
`
const AnimationContainer = styled.div`
    position: relative;
    min-width: 528px;
    display: flex;
    flex-direction: column;
    margin-right: 75px;
    margin-bottom: 20px;
`
const AnimationImage = styled.img`
    width: 100%;
    z-index: 1;
`
const AnimationVideo = styled.div`
    position: absolute;
    width: 73%;
    top: 82px;
    left: 70px;
`
const RowReverseContainer = styled(Container)`
    flex-direction: row-reverse;
    height: 465px;
    justify-content: start
`
const Download = styled.div`
    border: 2px solid #404040;
    display: flex;
    align-items: center;
    max-width: 327px;
    max-height: 94px;
    border-radius: 12px;
    min-width: 325px;
    min-height: 95px;
    justify-content: space-around;
    background-color: #000000;
    position: absolute;
    z-index: 2;
    top: 335px;
    left: 105px;
` 
const TextSecond = styled(TextWrapper)`
    margin-top: 80px;
    margin-left: 0px;
    margin-right: 0px;
    max-width: 500px;
    margin-bottom: 50px
`
const AnimationContSecond = styled(AnimationContainer)`
    margin-bottom: 95px;
    margin-right: 0px
`
const AnimationThird = styled(AnimationVideo)`
    width: 61%;
    top: 43px;
    left: 100px
`
const TextThird = styled(TextWrapper)`
    margin-right: 18px
`
const ThirdAniCont = styled(AnimationContainer)`
    min-width: 545px
`
const ThirdContainer = styled(Container)`
    height: 500px
`
export {
    Container,
    TextWrapper,
    Title,
    Description,
    AnimationContainer,
    AnimationImage,
    AnimationVideo,
    RowReverseContainer,
    Download,
    TextSecond,
    AnimationContSecond,
    AnimationThird,
    TextThird,
    ThirdAniCont,
    ThirdContainer
}