import React from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega() {
  return (
    <form>
      <TextField margin="normal" id="cep" label="CEP" type="number"></TextField>
      <TextField
        margin="normal"
        fullWidth
        id="endereco"
        label="Endereço"
        type="text" 
        required
      ></TextField>
      <TextField
        margin="normal"
        id="numero"
        label="Número"
        type="number"
        required
      ></TextField>
      <TextField
        margin="normal"
        id="estado"
        label="Estado"
        type="text"
        required
      ></TextField>
      <TextField
        margin="normal"
        id="cidade"
        label="Cidade"
        type="text"
        required
      ></TextField>
      <Button fullWidth variant="contained" color="primary" type="submit">
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
