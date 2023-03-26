import { useState } from 'react'
import AreaLogin from '../AreaLogin'
import Botao from '../Botao'
import './Formulario.css'

const Formulario = (props) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const novoCadastro = (evento) => {
        evento.preventDefault();
        props.cadastros({
            email,
            senha
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={novoCadastro}>
                <div className='textoHeader'>
                    <h1>Economigo</h1>
                    <h2>Seu dinheiro em boas mãos: economize com Economigo!</h2>
                    <h2>Area de cadastro do cliente!</h2>
                </div>

                <AreaLogin
                    valor={email}
                    cadastro={valor => setEmail(valor)}
                    label="E-mail"
                    type="email"
                    placeholder="Digite seu e-mail"
                    permissao={true} />

                <AreaLogin
                    valor={senha}
                    cadastro={valor => setSenha(valor)}
                    label="Senha"
                    type="password"
                    placeholder="Digite sua senha"
                    permissao={true} />

                <Botao>Cadastrar</Botao>

            </form>
        </section>
    )
}

export default Formulario