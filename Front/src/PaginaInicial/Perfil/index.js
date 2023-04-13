import { Navigate, useNavigate } from 'react-router-dom'
import Clicavel from '../Clicavel'
import './Perfil.css'



const PaginaInicial = () => {

    const navigate = useNavigate()

    const fnRegistroDespesas = () => {
        navigate("/RegistroDespesas")
    }

    const fnCategorizacaoGastos = () => {
        navigate("/CategorizacaoGastos")
    }

    const fnImportacaoDados = () => {
        navigate("/ImportacaoDados")
    }

    return (
        <header className='header'>
            <section className='container header-container'>
                <input type="checkbox" id="menu-control" className='menu-control' />
                <ul className='menu'>
                    <li>
                        <Clicavel className="botao-redondo" onClick={fnRegistroDespesas}>
                            
                                <img src='https://previews.123rf.com/images/urfandadashov/urfandadashov1808/urfandadashov180819621/108292219-pen-vector-icon-isolated-on-transparent-background-pen-logo-concept.jpg' alt='Registro de Despesas' />
                            
                            <p>Registro de Despesas</p>
                        </Clicavel>
                    </li>
                    <li>
                        <Clicavel className="botao-redondo" onClick={fnCategorizacaoGastos}>
                            
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIaWJmIJS466Pzj-FxbhjA-7rLUXCcb1D3Z6YLF4DSn9j5C1Sw64d3eXg4UkChdct8QfQ&usqp=CAU' alt='Categorizacao de Gastos' />
                            
                            <p>Categorização de Gastos</p>
                        </Clicavel>
                    </li>
                    <li>
                        <Clicavel className="botao-redondo" onClick={fnImportacaoDados}>
                            <a href=''>
                                <img src='https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-down-arrow-icon-png-image_956681.jpg' alt='Importacao de Dados' />
                            </a>
                            <p>Importação de Dados</p>
                        </Clicavel>
                    </li>
                    <li>
                        <Clicavel className="botao-redondo">
                            <a href=''>
                                <img src='https://pbs.twimg.com/profile_images/1277597037278699520/jLF9PnOE_400x400.jpg' alt='Foto Perfil' />
                            </a>
                            <p>Perfil</p>
                        </Clicavel>
                    </li>
                </ul>
                <label htmlFor='menu-control' className='dots-icon'>
                    <img src='https://pbs.twimg.com/profile_images/1277597037278699520/jLF9PnOE_400x400.jpg' alt="Perfil" className='dots-icon' />
                </label>
            </section>
        </header>
    )
}

export default PaginaInicial