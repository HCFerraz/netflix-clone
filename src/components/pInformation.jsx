function Link(props) {
    return (
        <>
            <li style={{ float: "left", listStyle: "none", marginLeft: "43px", marginTop: "15px", textAlign: "initial", width: "180px"}}>
                <a href={props.ref}
                    style={{ fontSize: "12.5px", color: "#757575", letterSpacing: "0.5px", cursor: "pointer"}}>
                    {props.text}
                </a>
            </li>
        </>
    )
}

export default Link