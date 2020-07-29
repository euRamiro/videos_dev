import React from 'react';
import {Link} from 'react-router-dom';

import PageDefault from '../../PageDefault'

function Videos() {
  return(
    <>
      <PageDefault>
        <h1>cadastro de vídeos...</h1>

        <Link to='/cadastro/categoria'>
            Cadastrar categoria
        </Link>
      </PageDefault>
    </>
  );
}

export default Videos;