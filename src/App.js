import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import '@fontsource/roboto/300.css'
import {validarCPF, validarNome, validarSenha} from './models/cadastro'


function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography marginBottom="20px" variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{cpf:validarCPF, senha:validarSenha, nome:validarNome}}/>
    </Container>
    
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}



export default App;
