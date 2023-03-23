import './Clicavel.css'

const Clicavel = (props) => {
    return (
        <button className='Clicavel'>{props.children}</button>
    )
}

export default Clicavel