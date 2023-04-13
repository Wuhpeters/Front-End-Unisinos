import { useState } from "react";
import Formulario from "./componentes/Formulario";

function App() {

  const [Usuarios, setUsuarios] = useState([])

  const adicionaNovoUsuario = (novoUsuario) => {
    setUsuarios([...Usuarios, novoUsuario])
    console.log(Usuarios)
  }

  return (
    <div className="App">
    <Formulario cadastros={novoUsuario => adicionaNovoUsuario(novoUsuario)} />
    </div>
  );
}

export default App;
