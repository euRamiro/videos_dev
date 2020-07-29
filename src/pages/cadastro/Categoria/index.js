import React from 'react';
import {Link} from 'react-router-dom';

import PageDefault from '../../PageDefault'

function Categoria() {
  return(
    <>
      <PageDefault>
        <h1>cadastro de categorias...</h1>
        <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>
        <Link to='/'>
            Ir para home
        </Link>
      </PageDefault>
    </>
  );
}

export default Categoria;