import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '#550022',
  };

  // prettier-ignore

  const [values, setValues] = useState(initialValues);
  const [categorias, setCategorias] = useState([]);

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }
  // prettier-ignore
  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  return (
    <PageDefault>
      <h1>
        {' '}
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form
        onSubmit={function handleSubmit(event) {
          event.preventDefault();
          // console.log('Try send form');
          setCategorias([...categorias, values]);
          setValues(initialValues);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
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
          type="button"
          className="btn btn-secondary col-md-5"
          data-toggle="button"
          aria-pressed="false"
          autoComplete="off"
        >
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>{categoria.name}</li>
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
