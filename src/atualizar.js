import { useState } from "react";
//PUT
export default function Update(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [id, setID]=useState('')
    const [dt_nasc,setDtNasc]=useState('')

    const setIDChange=(e)=>{
        setID(e.target.value)
    }

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

     const update= async()=>{
     let api = await fetch('http://127.0.0.1:8003/usuarios/atualizar/'+id,{
      method:"PUT",
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
    
    if(api.ok){
      return alert("Registro atualizado")
    }else{
      return alert("Erro ao atualizar")
    }
  }

  return(
    <div className="App">
      <div>
    ID:<input type='text' name='id'value ={id} onChange={setIDChange}></input><br/>

    Nome: <input type='text' name='nome' value={nome} onChange={setNomeChange} /><br/>

    Email: <input type='text' name='email' value={email} onChange={setEmailChange} /><br/>

    Telefone: <input type='text' name='telefone' value={telefone} onChange={setTelefoneChange} /><br/>

    Data de Nascimento: <input type='text' name='dt_nasc' value={dt_nasc} onChange={setDtNascChange} placeholder='AAAA-MM-DD'/><br/>

    <button onClick={update}>Atualizar</button>
      </div>
    </div>
  )
}