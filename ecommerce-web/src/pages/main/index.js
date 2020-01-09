import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    /*executa qndo componente aparece em tela init() angular*/
    componentDidMount(){
        this.loadProducts();
        
    }

    /*arrow functions para acessar o this*/
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data; /* ... REST operation */
        
        this.setState({ products: docs, productInfo, page }); /*object short syntax */
    };

    prevPage = () => {
        const { page } = this.state; /*desestruturação*/

        if (page === 1) return; /*EXIT*/

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfo} = this.state; /*desestruturação*/

        if (page === productInfo.pages) return; /*EXIT*/

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    render() {
        const { products, page, productInfo } = this.state; /*desestruturação*/

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <Link to={`products/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page===1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page===productInfo.pages} onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        )
    }
}