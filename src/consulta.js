import { useState } from "react"
//GET
export default function Consulta(){
    const [retorno, setRetorno]=useState([])
    const [retornolista, setRetornoLista]=useState([])
    const [id, setID]=useState('')

    const setIDChange=(e)=>{
        setID(e.target.value)
    }

    const busca=async()=>{
        let api=await fetch('http://127.0.0.1:8003/usuarios/buscar')
        let response=await api.json()
        
        setRetornoLista(response)
    }

    const buscaID = async()=>{
        let api=await fetch('http://127.0.0.1:8003/usuarios/buscar/'+id)
        if (api.status===404){
            setRetorno([])
            return alert('ID não encontrado')
        }
        let response=await api.json()
        setRetorno(response)
    }

    return(
        <>
        <div>
        <button onClick={busca}>Buscar</button>
        {retornolista.map(item=>{
            return(
            <ul key={item.id}>
                <li>{item.id}</li>
                <li>{item.nome}</li>
                <li>{item.email}</li>
                <li>{item.telefone}</li>
                <li>{item.dt_nasc}</li>
            </ul>
            )
        })}
        </div>
        <div>
            ID:<input onChange={setIDChange}></input>
            <button onClick={buscaID}>Buscar ID</button>
            <ul>
                <li>{retorno.nome}</li>
                <li>{retorno.email}</li>
                <li>{retorno.telefone}</li>
                <li>{retorno.dt_nasc}</li>
            </ul>
        </div>
        </>
    )
}