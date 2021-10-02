import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosUsuario({aoEnviar}) {
  return (
    <form
    onSubmit={(event) => {
      event.preventDefault()
      aoEnviar()
    }}>
      <TextField
        required
        margin="normal"
        fullWidth
        id="email"
        label="Email"
        type="email"
      ></TextField>
      <TextField
        margin="normal"
        required
        fullWidth
        id="senha"
        label="Senha"
        type="password"
      ></TextField>
      <Button variant="contained" color="primary" type="submit">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
