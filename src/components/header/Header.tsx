import React, { useState } from "react";

import { Button, Grid, TextField } from "@material-ui/core";
import Popover from '@material-ui/core/Popover';
import { useHistory } from 'react-router-dom';

import HeaderStyled from './HeaderStyled';
import logo from "../../img/logo.png";
import { useUserContext } from './../../providers/user-provider';
import iconCart from "../../img/icon-cart.svg";
import { useProductContext } from "../../providers/product-provider";



const Header = () => {

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const { fetchProduct } = useProductContext();


    const { logout, login, isUserLogged, userLogged } = useUserContext()


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const requestLoginLogout = () => {
        if (isUserLogged()) {
            logout();
        } else {
            login(email, password);
            setEmail("");
            setPassword("");
        }
    }

    const goToCart = () => {
        history.push('/cart')
    }
    
    const goToHome = () => {
        history.push('/')
        fetchProduct(1);
    }



    return (
        <HeaderStyled>
            <Grid direction="row" justify="space-between" container>
                <Grid>
                    <img onClick={() => goToHome()} className="logo" src={logo} alt="Logo" />
                    <p className="title">
                        Marketplace/E-commerce
                    </p>
                </Grid>

                <Grid style={{marginTop : "-19px"}}>
                    {
                        isUserLogged() &&
                        <p className="welcome">
                            Welcome {userLogged.name}
                        </p>
                    }
                    {
                        isUserLogged() &&
                        <img onClick={() => goToCart()} className="iconCart" src={iconCart} alt="cart" />
                    }
                    <Button aria-describedby={id} variant="contained" className={`btn-login-logout ${isUserLogged() ? ' btn-logout' : ''}`}
                        onClick={(event: any) => { isUserLogged() ? requestLoginLogout() : handleClick(event) }}>
                        {isUserLogged() ? 'Logout' : 'Login'}
                    </Button>
                    {
                        !isUserLogged() &&

                        <Popover
                            className="login-dropdown"
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <form noValidate autoComplete="off">
                                <TextField value={email} onChange={(event) => setEmail(event.target.value)} className="text-field" id="email" label="E-mail" variant="outlined" />
                                <TextField value={password} onChange={(event) => setPassword(event.target.value)} className="text-field" type="password" id="password" label="Password" variant="outlined" />

                                <Button aria-describedby={id} variant="contained" className="btn-login-logout" onClick={requestLoginLogout}>
                                    Login
                                </Button>
                            </form>
                        </Popover>
                    }
                </Grid>
            </Grid>
        </HeaderStyled>
    );
};

export default Header;
