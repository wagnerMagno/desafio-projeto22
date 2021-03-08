import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';

import ContentStyled from './ContentStyled';
import Home from './../home/Home';
import Cart from "../cart/Cart";


const Content = () => {

    return (
        <ContentStyled>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/cart" exact component={Cart} />
                    <Route exact path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
        </ContentStyled>
    );
};

export default Content;
