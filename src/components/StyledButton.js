import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${props => props.marginTop};
    z-index: ${props => props.ZIndex};
    margin-bottom: ${props => props.marginBottom};
    background-color: ${props => props.BColor}
`
const Input = styled.input`
    width: 450px;
    height: 60px;
    font-size: 16.5px;
`
const Icon = styled.div`
    margin-top: 8px;
    margin-left: 8px;
`
const Button = styled.button`
    height: 60px;
    width: 182px;
    background-color: #E50914; 
    color: white;
    border: 0;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
        background-color: #F40612;
    }
`

export {
    Container,
    Input,
    Icon,
    Button
}

