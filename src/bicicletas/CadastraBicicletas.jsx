import { Fragment, useState } from "react"
import { Button, Grid, IconButton, Snackbar } from '@mui/material';
import { ItemForm } from "./ItemForm";


export function CadastraBicicleta() {

    const [modelo, setModelo] = useState()
    const [tipo, setTipo] = useState()
    const [preco, setPreco] = useState()
    const [status, setStatus] = useState()

    const [open, setOpen] = useState(false)

    const [message, setMessage] = useState()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

    const action = (
        <Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
          </IconButton>
        </Fragment>
      );

    function click() {
        let data = {
          'modelo': modelo,
          'tipo': tipo,
          'preco': preco,
          'status': "disponivel"
        }
    
        fetch('http://localhost:8080/bicicleta', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
            if (!response.ok) {
                // error processing
                throw 'Error';
            }
          setOpen(true)
          setMessage("Bicicleta cadastrada com sucesso")
          //load()
        }).catch(response => {
            setOpen(true)
            setMessage('erro no cadastro da bicicleta!')
        })
    }

    return (
        <>
            <div className="card">

                <Grid container columnSpacing={2} rowSpacing={1}>
                    <ItemForm label={"Modelo:"} value={modelo} set={setModelo}></ItemForm>
                    <ItemForm label={"Tipo:"} value={tipo} set={setTipo}></ItemForm>
                    <ItemForm label={"Preço:"} value={preco} set={setPreco}></ItemForm>
                </Grid>
                <Button variant="outlined" onClick={() => click()}>Cadastrar</Button>

            </div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={message}
                action={action}
            ></Snackbar>
        </>
    )

}