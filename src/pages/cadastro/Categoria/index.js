import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infoEvent) {
    setValue(
      infoEvent.target.getAttribute('name'),
      infoEvent.target.value,
    );
  }

  useEffect(() => {
    const url = 'http://localhost:8080/categorias';
    fetch(url).then(async (response) => {
      const r = await response.json();
      setCategorias([
        ...r,
      ]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Castro de Categoria:
        {' '}
        {values.nome}
      </h1>
      <form onSubmit={function handleSubmit(i) {
        i.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        setValues(valoresIniciais);
      }}
      >
        <div>
          <FormField
            label="Nome da Categoria"
            value={values.nome}
            type="text"
            name="nome"
            onChange={handleChange}
          />
        </div>
        <div>
          <FormField
            label="Descrição"
            type="textarea"
            value={values.descricao}
            name="descricao"
            onChange={handleChange}
          />
        </div>
        <div>
          <FormField
            label="Cor"
            value={values.cor}
            type="color"
            name="cor"
            onChange={handleChange}
          />
        </div>
        <div>
          <Button>
            Cadastrar
          </Button>
        </div>
      </form>
      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
