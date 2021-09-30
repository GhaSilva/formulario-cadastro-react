import React, { useState } from "react";
import { Button, TextField, FormControlLabel, Switch } from "@material-ui/core";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome, sobrenome, cpf);
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          let tmpCpf = event.target.value;
          if (cpf.length >= 11) {
            tmpCpf = tmpCpf.substr(0, 11);
          }
          setCpf(tmpCpf);
        }}
        id="CPF"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        control={<Switch defaultChecked color="primary" />}
        label="Promoções"
      />
      <FormControlLabel control={<Switch defaultChecked />} label="Novidades" />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
