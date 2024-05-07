import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Grid } from '@mui/material'
import { ListaBicicletas } from './bicicletas/ListaBicicletas'
import { CadastraBicicleta } from './bicicletas/CadastraBicicletas'
import { EditaBicicleta } from './bicicletas/EditaBicicletas'
import { DeletaBicicleta } from './bicicletas/DeletaBicicletas'
import { GetStatusBicicleta } from './bicicletas/GetStatusBicicletas'
import { AtualizaBicicleta } from './bicicletas/AtualizaStatusBicicletas'
import { ListaAluguelBicicletas } from './bicicletas/ListaAluguel'

function App() {


  return (
    <>
      <h1>Rent-a-Bike</h1>
      <Grid container>
    
        <Grid item xs={4}>

          <Grid container>
            <Grid item xs={12}>
              <Link to='/'>Home</Link>   
            </Grid>
            <Grid item xs={12}>
              <Link to='/listarBicicletas'>Listar Bicicletas</Link>
            </Grid>
            <Grid item xs={12}>
              <Link to='/cadastrarBicicleta'>Cadastrar Bicicleta</Link>
            </Grid>
            <Grid item xs={12}>
              <Link to='/editarBicicleta'>Editar Bicicleta</Link>
            </Grid>
            <Grid item xs={12}>
              <Link to='/deletarBicicleta'>Deletar Bicicleta</Link>
            </Grid>
            <Grid item xs={12}>
              <Link to='/visualizarStatusBicicleta'>Visualizar Status Bicicleta</Link>
            </Grid>
            <Grid item xs={12}>
              <Link to='/atualizarStatusBicicleta'>Atualizar Status Bicicleta</Link>
            </Grid>
            <Grid item xs={12}>
              <Link to='/listarAluguelBicicleta'>Listar Aluguel Bicicleta</Link>
            </Grid>


            
          </Grid>


        </Grid>
        <Grid item xs={8}>
          <Routes>
            <Route path='/listarBicicletas' element={<ListaBicicletas/>} />
          </Routes>
          <Routes>
            <Route path='/cadastrarBicicleta' element={<CadastraBicicleta/>} />
          </Routes>
          <Routes>
            <Route path='/editarBicicleta' element={<EditaBicicleta/>} />
          </Routes>
          <Routes>
            <Route path='/deletarBicicleta' element={<DeletaBicicleta/>} />
          </Routes>
          <Routes>
            <Route path='/visualizarStatusBicicleta' element={<GetStatusBicicleta/>} />
          </Routes>
          <Routes>
            <Route path='/atualizarStatusBicicleta' element={<AtualizaBicicleta/>} />
          </Routes>
          <Routes>
            <Route path='/listarAluguelBicicleta' element={<ListaAluguelBicicletas/>} />
          </Routes>


        </Grid>
      </Grid>


    </>
  )
}

export default App
