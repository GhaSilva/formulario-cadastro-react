import React, { useState } from "react";
import { Button, TextField, FormControlLabel, Switch } from "@material-ui/core";

function DadosPessoais({aoEnviar, validarCPF}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}})
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
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
        type="text"
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
        type="text"
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
        onBlur={(event) => {
          const isValido = validarCPF(cpf)
          setErros({cpf: isValido})
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        type="number"
        id="CPF"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            
            color="primary"
          />
        }
        label="Promoções"
      />
      <FormControlLabel
        onChange={(event) => {
          setNovidades(event.target.checked);
        }}
        control={<Switch checked={novidades}  />}
        label="Novidades"
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
