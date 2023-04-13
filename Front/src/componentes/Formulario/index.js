import { useState } from 'react'
import AreaLogin from '../AreaLogin'
import Botao from '../Botao'
import './Formulario.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Formulario = (props) => {
  
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    const novoCadastro = async (evento) => {
        evento.preventDefault();
        if (!email || !senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        } 
        
        try {
            const response = await axios.post('http://localhost:5000/cadastro', {
                email: email,
                senha: senha
            })
            console.log(response.data);
        } catch {
            alert("Erro ao cadastrar usuário.")
        }
        
        props.cadastros({
            email,
            senha
        })
        setEmail('')
        setSenha('')
    }

    const Logou = async (evento) => {
        evento.preventDefault()
        const credenciais = {
            email: email,
            password: senha
        }
    
        try {
            const response = await axios.post('http://localhost:5000/login', credenciais)
            console.log(response.data);
            navigate("/Perfil")
        } catch {
            alert("Credenciais invalidas")
        }
    }

    return (
        <section className='formulario'>
            <form>
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
                    placeholder="Digite seu e-mail"/>
                <AreaLogin
                    valor={senha}
                    cadastro={valor => setSenha(valor)}
                    label="Senha"
                    type="password"
                    placeholder="Digite sua senha" />
                <div className='botaoFooter'>
                <Botao onClick={Logou}>Login</Botao>
                <Botao onClick={novoCadastro}>Cadastrar</Botao>
                </div>

            </form>
        </section>
    )
}

export default Formulario