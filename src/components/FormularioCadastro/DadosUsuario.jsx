import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosUsuario() {
  return (
    <form>
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label="Email"
        type="email"
      ></TextField>
      <TextField
        margin="normal"
        fullWidth
        id="senha"
        label="Senha"
        type="password"
      ></TextField>
      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
