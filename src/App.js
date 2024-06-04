import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completion_date, setCompletionDate] = useState('');
  const [priority, setPriority] = useState('');

  const setTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const setDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const setCompletionDateChange = (e) => {
    setCompletionDate(e.target.value);
  }

  const setPriorityChange = (e) => {
    setPriority(e.target.value);
  }

  const salvar= async()=>{
    console.log({title,description,completion_date,priority})
    let api = await fetch('http://127.0.0.1:8003/tarefas/inserir',{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        "title": title,
        "description": description,
        "completion_date": completion_date,
        "priority": priority
      })
    })
    
    if(api.ok){
      return alert("Cadastro ok")
    }else{
      return alert("Erro ao cadastrar")
    }
  }
 
  return (
    <div className="App">
      <div>
        Titulo: <input type='text' name='title' 
        value={title} onChange={setTitleChange} /><br/>

        Descrição: <input type='text' name='description' 
        value={description} onChange={setDescriptionChange} /><br/>

        Data: <input type='text' name='completion_date' 
        value={completion_date} onChange={setCompletionDateChange} /><br/>
        
        Prioridade: <input type='text' name='priority' 
        value={priority} onChange={setPriorityChange} /><br/>

        <button onClick={salvar}>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
