import React, { useState, useMemo, useContext, useEffect } from "react"
import { UserContext } from './../contexts/UserContext';
import { useHistory } from 'react-router-dom';
import { useProductContext } from "./product-provider";
import { toast } from 'react-toastify';

interface UserModel {
    email: string;
    name: string;
    password: string;
    listProducts: any[];
};

const UserProvider = (props: any) => {

    const history = useHistory();
    const userLogout: UserModel = {
        email: "",
        name: "",
        password: "",
        listProducts: []
    }
    const [userLogged, setUserLogged] = useState<UserModel>(userLogout);
    const userMock: UserModel[] = require('../json/userMock.json')
    const { cleanSelectSizeProduct } = useProductContext();


    useEffect(() => {
        let obj = JSON.parse(localStorage.getItem("userLoggedProjeto22") || "null");
        if(obj){
            setUserLogged(obj);
        }
    }, [])


    const login = (email: string, password: string) => {
        let objUser = userMock.find(obj => obj.email === email.trim() && obj.password === password.trim());
        if (objUser) {
            setUserLogged(objUser);
            localStorage.setItem("userLoggedProjeto22" , JSON.stringify(objUser) );
            history.push('/')
        } else {
            //mensagem de erro aqui
        }
    }

    const isUserLogged = () => {
        return Boolean(userLogged.email);
    }

    const logout = () => {
        setUserLogged(userLogout);
        localStorage.removeItem("userLoggedProjeto22")
    }

    const addProductToCart = (obj: any) => {
        let userAux = {...userLogged};
        userAux.listProducts.push({ ...obj, ammount: 1 })
        setUserLogged(userAux);
        console.log("aqui askjdhakjhdkji wag");
        cleanSelectSizeProduct(obj)
        toast.success("Item added to cart", { autoClose : 2500 });
        localStorage.setItem("userLoggedProjeto22" , JSON.stringify(userAux) )
    }
    
    const addAmmountProductToCart = (obj: any) => {
        let userAux = {...userLogged};
        let objFind = userAux.listProducts.find((p : any) => p.name === obj.name && p.sizeSelect.size === obj.sizeSelect.size)
        objFind.ammount++;
        setUserLogged(userAux);
        localStorage.setItem("userLoggedProjeto22" , JSON.stringify(userAux) )
        
    }

    const subAmmountProductToCart = (obj: any) => {
        let userAux = {...userLogged};
        let objFind = userAux.listProducts.find((p : any) => p.name === obj.name && p.sizeSelect.size === obj.sizeSelect.size)
        if(objFind.ammount -1 === 0){
            removeProductToCart(obj)
        }else{
            objFind.ammount--;
            setUserLogged(userAux);
            localStorage.setItem("userLoggedProjeto22" , JSON.stringify(userAux) )
        }
    }

    const removeProductToCart = (obj : any) => {
        let userAux = {...userLogged};
        userAux.listProducts = userLogged.listProducts.filter((p : any) => obj.name !== p.name || p.sizeSelect.size !== obj.sizeSelect.size);
        setUserLogged(userAux);
        localStorage.setItem("userLoggedProjeto22" , JSON.stringify(userAux) )
        toast.success("Item removed from cart", { autoClose : 2500 });
    }

    const UserData = useMemo(() => {
        return {
            userLogged, logout, login, isUserLogged, addProductToCart, removeProductToCart, addAmmountProductToCart, subAmmountProductToCart
        }
    }, [userLogged]);

    return <UserContext.Provider value={UserData} {...props} />;
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
