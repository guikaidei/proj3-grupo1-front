import { useEffect, useState } from "react"


export function ListaBicicletas() {

  const [data, setData] = useState([])


  useEffect(() => {
    load()
  }, [])

  function load() {
    fetch('http://localhost:8080/bicicleta', {
      method: 'GET'
    }).then(response => {
      return response.json()
    }).then(data => {
      setData(data)
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
                    data.map((bicicleta, index) => {
                        return <tr key={index}>
                        <td>{bicicleta.id}</td>
                        <td>{bicicleta.modelo}</td>
                        <td>{bicicleta.tipo}</td>
                        <td>{bicicleta.preco}</td>
                        <td>{bicicleta.status}</td>
                        </tr>
                    })

                    }
                </tbody>
            </table>

        </div>
      </>
  )


}