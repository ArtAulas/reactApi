import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//POST
export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dt_nasc,setDtNasc]=useState('')

  const setNomeChange = (e) => {
    setNome(e.target.value);
  }

  const setEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const setTelefoneChange = (e) => {
    setTelefone(e.target.value);
  }

  const setDtNascChange=(e)=>{
    setDtNasc(e.target.value)
  }

  const salvar= async()=>{
    let api = await fetch('http://127.0.0.1:8003/usuarios/inserir',{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        "nome": nome,
        "email": email,
        "telefone": telefone,
        "dt_nasc":dt_nasc
      })
    })
    
    let data = await api.json();
    console.log(data)
    if(api.ok){
      return alert("Cadastro ok")
    }else{
      return alert("Erro ao cadastrar")
    }
  }
  
  return (
    <div className="App">
      <div>
        Nome: <input type='text' name='nome' 
        value={nome} onChange={setNomeChange} /><br/>

        Email: <input type='text' name='email' 
        value={email} onChange={setEmailChange} /><br/>

        Telefone: <input type='text' name='telefone' 
        value={telefone} onChange={setTelefoneChange} /><br/>

        Data de Nascimento: <input type='text' name='dt_nasc' 
        value={dt_nasc} onChange={setDtNascChange} placeholder='AAAA-MM-DD'/><br/>

        <button onClick={salvar}>Cadastrar</button>
      </div>
    </div>
  );
}