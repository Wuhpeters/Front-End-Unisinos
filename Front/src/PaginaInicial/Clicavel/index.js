const Clicavel = (props) => {
    return (
        <button className="botao-redondo" onClick={props.onClick}> 
            {props.children}
        </button>
    )
}

export default Clicavel