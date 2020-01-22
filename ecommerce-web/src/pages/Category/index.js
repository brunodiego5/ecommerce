import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import icon from '../../assets/icon-buttons.png';
import * as S from './styles';

import api from '../../services/api';
import history from '../../services/history';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadCategories = async () => {
        const response = await api.get('/categories');

        setCategories(response.data);
    };

    loadCategories();
  }, [search]);

  const handleDelete = async category => {
    try {
      if (window.confirm(`Confirma a exclusão da categoria ${category.title}`)) {
        await api.delete(`category/${category._id}`);

        const newCategoriesList = categories.filter(
          categoryParam => categoryParam._id !== category.id
        );

        setCategories(newCategoriesList);

        toast.success(`Categoria ${category.title} apagado com sucesso!`);
      }
    } catch (error) {
      toast.error(`Erro ao deletar categoria ${category.title}, verifique...`);
    }
  };

  const handleSearch = event => {
    const { value } = event.target;

    if (value.length >= 2 || value.length === 0) {
      setSearch(event.target.value);
    }
  };

  const handleNewCategory = () => {
    history.push('/categories/new');
  };

  return (
    <S.Container>
      <header>
        <strong>Gerenciando categorias</strong>
        <div>
          <button type="button" onClick={handleNewCategory}>
            <img src={icon} alt="" />
            <span>CADASTRAR</span>
          </button>
          <input placeholder="Buscar categoria" onChange={handleSearch} />
        </div>
      </header>

      <table>
        <thead>
          <tr>
            <th className="title">TÍTULO</th>
            <th className="description">DESCRIÇÃO</th>
            <th className="thumbnail_url">IMAGEM</th>
            <th className="edit"> </th>
          </tr>
        </thead>

        <tbody>
          {categories.map(category => (
            <tr key={category._id}>
              <td className="title">{category.title}</td>
              <td className="description">{category.description}</td>
              <td>
                <span className="thumbnail_url" style={{ backgroundImage: `url(${category.thumbnail_url})` }}></span>
              </td>
              <td className="edit">
                <Link
                  to={{
                    pathname: `/categories/${category._id}`,
                    state: { categoryLocated: category },
                  }}
                >
                  editar
                </Link>
                <button type="button" onClick={() => handleDelete(category)}>
                  apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Container>
  );
}
