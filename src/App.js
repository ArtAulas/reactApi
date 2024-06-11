import logo from './logo.svg';
import './App.css';
import Cadastro from './cadastro';
import Consulta from './consulta';
import Remover from './remover';
import Update from './atualizar';

function App() {
  return (
    <div className="App">
      Cadastrar:<br/>
      <Cadastro/>
      Consultar:<br/>
      <Consulta/>
      Remover:<br/>
      <Remover/>
      Atualizar:<br/>
      <Update/>
    </div>
  );
}

export default App;
