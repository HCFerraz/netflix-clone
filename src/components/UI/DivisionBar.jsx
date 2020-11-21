import styled from 'styled-components'

const GrayBar = styled.hr`
    height: 8px; 
    color: #222222; 
    background-color: #222222
`

function DivisionBar() {
    return (
        <GrayBar></GrayBar>
    )
}

export default DivisionBar