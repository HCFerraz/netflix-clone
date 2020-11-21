import styled from 'styled-components'
import { useState } from 'react'
import { HiOutlinePlus, HiOutlineX } from 'react-icons/hi'

const Button = styled.button`
    background-color: #303030;
    color: #FFFFFF;
    border: 0;
    width: 815px;
    cursor: pointer;
    margin: 9px;
    height: 76px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Paragraph = styled.p`
    margin-left: 28px;
    font-size: 26px;
    letter-spacing: 0.5px
`
const Icon = styled.i`
    margin-right: 25px
`
const AnswerOpened = styled.div`
    background-color: #303030;
    width: 815px;
    margin-left: 9px;
    margin-top: -8px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px
`
const AnswerSpan = styled.span`
    font-size: 26px;
    letter-spacing: 0.5px;
    color: white;
    padding: 10px
`

export const Question = (props) => {
    const [click, setClick] = useState(false)
    function HandleClick() {
        if (click) {
            setClick(false)
            return
        }
        setClick(true)
    }
    return (
        <>
            <Button onClick={HandleClick}>
                <Paragraph>{props.question}</Paragraph>
                <Icon>
                    {click ? <HiOutlineX size="35px" color="#CCCCCC"></HiOutlineX> : <HiOutlinePlus size="35px" color="#CCCCCC" />}
                </Icon>
            </Button>
            {click ? <AnswerOpened>{props.answer.split('\n').map(answer => <AnswerSpan>{answer}</AnswerSpan>)}</AnswerOpened> : null}
        </>
    )
}