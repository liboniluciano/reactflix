import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  return(
   <PageDefault>
     <h1>Cadastro de Categoria</h1>
     
     <Link to="/">
      Ir para a home
     </Link>
   </PageDefault>
  )
}

export default CadastroCategoria;