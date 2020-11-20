import { useState } from 'react'
import { HiOutlinePlus, HiOutlineX } from 'react-icons/hi'
import { Button, Paragraph, Icon, AnswerOpened, AnswerSpan } from './QuestionJSXStyle'

function QuestionButton(props) {
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
            {click ? <AnswerOpened>{props.answer.split('\n').map(str => <AnswerSpan>{str}</AnswerSpan>)}</AnswerOpened> : null}
        </>
    )
}
export default QuestionButton