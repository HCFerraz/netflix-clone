import styled from 'styled-components'

const Select = styled.select`
    height: 50px;
    background-color: white;
    border: none;
    font-family: inherit;
    appearance: none;
    padding-left: 20px;
    grid-area: select;
}
`
const Div = styled.div`
margin-top: 35px;
    display: grid;
    grid-template-areas: "select";
    align-items: center;
    width: 160px;
    &::before {
        justify-self: end;
        content: "";
        width: 0.8em;
        height: 0.5em;
        background-color:gray;
        clip-path: polygon(100% 0%, 0 0%, 50% 100%);
        grid-area: select;
    }
`

export {
    Select,
    Div
}
// &::after {
//     justify-self: end;
// content: "";
// width: 0.8em;
// height: 0.5em;
// background-color:gray;
// clip-path: polygon(100% 0%, 0 0%, 50% 100%);
// grid-area: select;
// };