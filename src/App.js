import { useState } from "react";
import Formulario from "./componentes/Formulario";

function App() {

  const [Usuarios, setUsuarios] = useState([])

  const adicionaNovoUsuario = (novoUsuario) => {
    console.log(novoUsuario)
    setUsuarios([...Usuarios, Usuarios])
  }

  return (
    <div className="App">
        <Formulario cadastros={novoUsuario => adicionaNovoUsuario(novoUsuario)}/>
    </div>
  );
}

export default App;
