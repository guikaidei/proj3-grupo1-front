import { useEffect, useState, Fragment } from "react"
import { Button, Grid, IconButton, Snackbar } from '@mui/material';
import { ItemForm } from "./ItemForm";


export function GetStatusBicicleta() {

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
    fetch('http://localhost:8080/bicicleta', {
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
                    <td>Status</td>
                    </tr>            
                    {
                    records.map((bicicleta, index) => {
                        return <tr key={index}>
                        <td>{bicicleta.id}</td>
                        <td>{bicicleta.status}</td>
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