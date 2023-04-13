import './AreaLogin.css'

const AreaLogin = (props) => {

    const preenchimento = (evento) => {
        props.cadastro(evento.target.value)
    }

    return (
        <div className="login-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={preenchimento} type={props.type} placeholder={props.placeholder} />
        </div>
    )
}

export default AreaLogin