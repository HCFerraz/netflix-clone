import styled from 'styled-components'
import { HiOutlineChevronRight } from 'react-icons/hi'

const Span = styled.span`
    font-size: 19px;
    letter-spacing: 0.5px;
    text-align: center
`
const BoxContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -5px;
    margin-bottom: 40px
`
const Input = styled.input`
    width: 450px;
    height: 60px;
    font-size: 16.5px
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
const Icon = styled.i`
    margin-top: 8px;
    margin-left: 8px
`

export const LoginBoxContainer = () => {
    return (
        <>
            <Span>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</Span>
            <BoxContainer>
                <Input placeholder="Email"/>
                <Button>Vamos lá <Icon><HiOutlineChevronRight size="22px" /></Icon></Button>
            </BoxContainer>
        </>
    )
}