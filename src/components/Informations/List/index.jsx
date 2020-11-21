import styled from 'styled-components'

const Item = styled.li`
    float: left; 
    list-style: none;
    margin-left: 43px;
    margin-top: 15px;
    text-align: initial;
    width: 180px;
`
const Hyperlink = styled.a`
    font-size: 12.5px;
    color: #757575;
    letter-spacing: 0.5px;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

function ListItem(props) {
    return (
        <Item>
            <Hyperlink href={props.link}>{props.text}</Hyperlink>
        </Item>
    )
}

export {
    ListItem
}