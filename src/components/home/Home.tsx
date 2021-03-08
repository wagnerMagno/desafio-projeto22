import React, {useState} from "react";
import { Button, Grid } from "@material-ui/core";

import HomeStyled from './HomeStyled';

import { useUserContext } from './../../providers/user-provider';
import { useProductContext } from './../../providers/product-provider';
import { toast } from 'react-toastify';


const Home = () => {

    const { isUserLogged, userLogged, addProductToCart } = useUserContext();
    const { listProduct, selectSizeProduct, fetchProduct } = useProductContext();
    const [page, setPage] = useState(1);


    const addToCart = (obj: any) => {
        if (obj.sizeSelect) {
            let odbFind = userLogged.listProducts.find((p: any) => p.name === obj.name && p.sizeSelect.size === obj.sizeSelect.size);
            if (!odbFind) {
                addProductToCart(obj);
            } else {
                toast.error("Item already added to cart", { autoClose: 2500 });
            }
        } else {
            toast.error("Select the size", { autoClose: 2500 });
        }
    }

    const selectSize = (obj: any, objSize: any) => {
        if (objSize.available) {
            selectSizeProduct(obj, objSize)
        }
    }


    const isItemSelect = (obj: any, objSize: any) => {
        let retorno = false;

        if (obj.sizeSelect) {
            retorno = obj.sizeSelect.size == objSize.size;
        }

        return retorno;
    }

    const getPageList = (pageIncrement: number) => {
        let newPage = page + pageIncrement;
        setPage(newPage);
        fetchProduct(newPage);
    }


    return (
        <HomeStyled>
            <Grid container>
                {
                    listProduct.map((obj: any) => {
                        return (

                            <Grid className="card-product" key={obj.id} xs={3}>
                                <div style={{ width: "90%" }}>

                                    <Grid className="grid-img" container>
                                        <img className="img-product" src={obj.image} alt="product" />
                                    </Grid>
                                    <Grid direction="row" justify="center" container>
                                        <Grid >
                                            <p className="title-product">
                                                {obj.name}
                                            </p>
                                        </Grid>
                                    </Grid>
                                    <Grid direction="row" justify="center" container>
                                        <Grid className={`grid-price`} >
                                            <p>
                                                {
                                                    obj.on_sale &&
                                                    <>
                                                        De {obj.regular_price} {" "}
                                                    </>
                                                }
                                                Por {obj.actual_price}
                                            </p>
                                            <p>
                                                Em Até {obj.installments}
                                            </p>
                                        </Grid>
                                    </Grid>
                                    <Grid container direction="row" justify="center" >
                                        {
                                            obj.sizes.map((objSize: any, i: number) => {
                                                return (
                                                    <span onClick={() => { selectSize(obj, objSize) }}
                                                        className={`span-size ${objSize.available ? `${isItemSelect(obj, objSize) ? ' size-selected' : ''}` : ' size-unavailable'} `} key={`size_${i}`}>
                                                        {objSize.size}
                                                    </span>
                                                )
                                            })
                                        }
                                    </Grid>

                                    <Grid className="grid-button" container>
                                        <Button disabled={!isUserLogged()} onClick={() => { addToCart(obj) }}
                                            variant="contained" className={`btn-add-remove`}>
                                            Add to cart
                                        </Button>
                                    </Grid>
                                </div>

                            </Grid>
                        )
                    })
                }

                <Grid className="paginacao" container>
                    <Button disabled={page == 1} onClick={() => getPageList(-1)} variant="contained">ANTERIOR</Button>
                    <span className="page">
                        {page}
                    </span>
                    <Button disabled={listProduct.length < 8 } onClick={() => getPageList(1)} variant="contained">PRÓXIMO</Button>
                </Grid>

            </Grid>
        </HomeStyled>
    );
};

export default Home;
