import React from 'react';
import {Link} from 'react-router-dom';

// import { Container } from './styles';

import PageDefault from '../../../components/PageDefault';

function Video() {
  return(
   <PageDefault>
     <h1>Cadastro de Vídeo</h1>
     <Link to="/cadastro/categoria">
      Cadastrar Categoria
     </Link>
   </PageDefault>
  )
}

export default Video;