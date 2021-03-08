import React from "react";
import { Button, Grid } from "@material-ui/core";

import CartStyled from './CartStyled';
import { useUserContext } from './../../providers/user-provider';


const Cart = () => {

    const { isUserLogged, userLogged, addAmmountProductToCart, subAmmountProductToCart } = useUserContext()

    const addAmmount = (obj: any) => {
        addAmmountProductToCart(obj);
    }

    const subAmmount = (obj: any) => {
        subAmmountProductToCart(obj);
    }

    const getValueTotal = () => {
        let soma = 0;

        userLogged.listProducts.forEach((p: any) => {

            let value = p.actual_price.replace("R$ ", "");
            value = value.replace(",", ".");
            soma = soma +  Number(p.ammount * Number(value));
        });

        return soma.toFixed(2);
    }

    const getValue = (obj: any) => {
        let soma: any = "";
        let value = obj.actual_price.replace("R$ ", "");
        value = value.replace(",", ".");
        soma = Number(obj.ammount * Number(value)).toFixed(2);
        soma = String(soma).replace(".", ",")
        return soma;
    }

    return (
        <CartStyled>
            <Grid direction="row" justify="space-between" container>
                <p className="title">
                    Cart
                    </p>
            </Grid>
            {
                isUserLogged() && userLogged.listProducts.length > 0 ?
                    <div >
                        {
                            userLogged.listProducts.map((obj: any) => {
                                return (
                                    <Grid style={{ marginBottom: "15px" }} key={obj.id} container>
                                        <Grid xs={1}>
                                            <img className="img-product" src={obj.image} alt="product" />
                                        </Grid>
                                        <Grid xs={4}>
                                            <p className="item-cart">
                                                {obj.name}
                                            </p>
                                        </Grid>
                                        <Grid xs={1}>
                                            <p className="item-cart">
                                                {obj.sizeSelect.size}
                                            </p>
                                        </Grid>
                                        <Grid xs={2}>
                                            <p className="item-cart">
                                                {obj.actual_price}
                                            </p>
                                        </Grid>
                                        <Grid xs={2}>
                                            <span className="button-increment-decrement" onClick={() => subAmmount(obj)}>
                                                -
                                            </span>
                                            <p className="ammount" >
                                                {obj.ammount}
                                            </p>
                                            <span className="button-increment-decrement" onClick={() => addAmmount(obj)}>
                                                +
                                            </span>
                                        </Grid>
                                        <Grid xs={2}>
                                            <p className="item-cart">
                                                R$ {getValue(obj)}
                                            </p>
                                        </Grid>

                                    </Grid>
                                )
                            })
                        }

                        <Grid direction="row" justify="flex-end" container>

                            <Grid xs={1}>
                                <p className="price-total">
                                    Total
                                </p>
                            </Grid>
                            <Grid xs={2}>
                                <p className="price-total">
                                    R$ {getValueTotal()}
                                </p>
                            </Grid>
                        </Grid>
                    </div>

                    :
                    <p>
                        Cart with no product added
                    </p>
            }
        </CartStyled>
    );
};

export default Cart;
