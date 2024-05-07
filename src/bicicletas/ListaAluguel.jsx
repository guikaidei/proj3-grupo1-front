import { useEffect, useState } from "react"


export function ListaAluguelBicicletas() {

  const [data, setData] = useState([])


  useEffect(() => {
    load()
  }, [])

  const [records, setRecords] = useState([])

    const Filter = (event) => { 
        let value = event.target.value
        let result = []
        result = data.filter((data) => {
            return data.id === parseInt(value)
        })
        setRecords(result)
    }

  function load() {
    fetch('http://localhost:8080/aluguel', {
      method: 'GET'
    }).then(response => {
      return response.json()
    }).then(data => {
      setData(data)
      setRecords(data)
    }).catch(response => {
      alert('Erro ao listar bicicletas!')
      alert(response.status)
    })
  }

  return(
    <>
        <div className="card">
            <table>
                <tbody>
                    <tr>
                    <td>Id</td>
                    <td>Modelo</td>
                    <td>Tipo</td>
                    <td>Preço</td>
                    <td>Status</td>
                    </tr>            
                    {
                    records.map((aluguel, index) => {
                        return <tr key={index}>
                        <td>{aluguel.id}</td>
                        <td>{aluguel.dataInicio}</td>
                        <td>{aluguel.duracaoViagem}</td>
                        <td>{aluguel.origem}</td>
                        <td>{aluguel.destino}</td>
                        <td>{aluguel.kmPercorridos}</td>
                        <td>{aluguel.precoTotal}</td>
                        <td>{aluguel.status}</td>
                        <td>{aluguel.bicicleta}</td>
                        </tr>
                    })

                    }
                </tbody>
            </table>

        </div>

        <div className="card">
            <input type="text" className="form-control" onChange={Filter} /> 
        </div>
      </>
  )


}