import { useState } from "react"
//DELETE
export default function Remover(){
    const [id, setID]=useState('')

    const setIDChange=(e)=>{
        setID(e.target.value)
    }

    const removerID = async()=>{
        let api=await fetch('http://127.0.0.1:8003/usuarios/apagar/'+id,{
            method:"DELETE",
            headers:{
              "Content-Type": "application/json"
            },
          })
          if(api.ok){
            return alert("Registro deletado")
          }else if(api.status===404){
            return alert("Registro não encontrado")
          }else{
            return alert("Erro ao deletar")
          }
    }

    return(
        <>
        <div>
            ID:<input type='text' value ={id} onChange={setIDChange}></input>
            <button onClick={removerID}>Remover ID</button>
        </div>
        </>
    )
}