import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {
    state = {
        categories: []
    }

    /*executa qndo componente aparece em tela init() angular*/
    componentDidMount(){
        this.loadCategories();
        
    }

    /*arrow functions para acessar o this*/
    loadCategories = async () => {
        const response = await api.get('/categories');

        this.setState({ categories: response.data }); /*object short syntax */
    };

    render() {
        const { categories } = this.state; /*desestruturação*/

        return (
            <div className="product-list">
                {categories.map(category => (
                    <article key={category._id}>
                        <strong>{category.title}</strong>
                        <p>{category.description}</p>
                        <div className="product-img">
                            <header style={{ backgroundImage: `url(${category.thumbnail_url})` }} />
                            <Link to={`categories/${category._id}`}>Acessar</Link>
                        </div>
                    </article>
                ))}
            </div>
        )
    }
}