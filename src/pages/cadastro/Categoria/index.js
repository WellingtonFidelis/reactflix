/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '#005522',
  };

  // prettier-ignore
  const { values, handleChange, clearForm } = useForm(initialValues);
  const [categorias, setCategorias] = useState([]);

  // ============

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://reactwellflix.herokuapp.com/categorias';
      fetch(URL).then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias([...resposta]);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
    }
  }, []);

  return (
    // prettier-ignore
    <PageDefault>
      <h1 style={{ textAlign: 'center' }}>
        {' '}
        Cadastro de Categoria:
        {' '}
        {values.name}
      </h1>

      <form
        onSubmit={function handleSubmit(event) {
          // prettier-ignore
          event.preventDefault();
          // console.log('Try send form');
          setCategorias([
            ...categorias,
            values,
          ]);
          // console.log(setCategorias([...categorias, values]));
          // console.log(values);
          // console.log(categorias);
          clearForm();
        }}
      >
        <FormField
          label="Nome da Categoria"
          // type="text"
          value={values.name}
          name="name"
          onChange={handleChange}
          placeholder="Insira um nome para a categoria"
          classInput="form-control"
        />
        {/*
          <div>
            <label>
              Nome da Categoria:
              <input
                type="text"
                value={values.name}
                name="name"
                onChange={handleChange}
              />
            </label>
          </div>
        */}
        <FormField
          label="Descrição"
          type="textarea"
          value={values.description}
          name="description"
          onChange={handleChange}
          placeholder="Insira uma breve descrição"
          classInput="form-control"
        />
        {/*
          <div>
            <label>
              Descrição:
              <textarea
                type="text"
                value={values.description}
                name="description"
                onChange={handleChange}
              />
            </label>
          </div>
        */}
        <FormField
          label="Cor"
          type="color"
          value={values.color}
          name="color"
          onChange={handleChange}
          classInput="form-control form-control-lg col-md-3"
        />
        {/*
          <div>
            <label>
              Cor:
              <input
                type="color"
                value={values.color}
                name="color"
                onChange={handleChange}
              />
            </label>
          </div>
        */}
        <Button
          className="btn col-md-5 btn-danger"
          style={{
            marginBottom: '25px',
            display: 'block',
            margin: '0 auto',
          }}
        >
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && <div>Loading...</div>}

      <ul>
        {categorias.map((categoria, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${categoria.titulo}${index}`}>{categoria.titulo}</li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
/*
  function handleInputCategoria(event) {
                //console.log(values);
                //console.log(event.target.value);
                //setNomeDaCategoria(event.target.value);
                //setValue(event.target.getAttribute('name'), event.target.value);
                }
*/
