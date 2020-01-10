import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Product from './pages/Product';
import Category from './pages/Category';
import Categories from './pages/Category';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            
            <Route path="/categories" component={Categories} />
            <Route path="/categories/:id" component={Category} />

            <Route path="/products/:id" component={Product} />
            
            
        </Switch>
    </BrowserRouter>
);

export default Routes;
