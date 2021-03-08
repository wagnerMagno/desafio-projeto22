import React, { useState, useMemo, useContext , useEffect} from "react"
import { ProductContext } from './../contexts/ProductContext';



const ProductProvider = (props: any) => {
    const productMock: any[] = require('../json/db.json').products;
    
    const [listProduct , setListProduct] = useState<any[]>([]);
    

    useEffect(() => {
        if(listProduct.length == 0){
            fetchProduct(1);
        }
    })

    const fetchProduct = (page : number) => {
        let indexInit = (page -1 ) * 8;
        let indexEnd = page * 8;
        setListProduct(productMock.slice(indexInit, indexEnd));
    }
    const selectSizeProduct = (objProduct : any, objSize : any) => {
        let listAux = [...listProduct];
        let objFind = listAux.find((obj : any) => obj.name === objProduct.name );
        objFind.sizeSelect = objSize;
        setListProduct(listAux);
    }
    
    const cleanSelectSizeProduct = (objProduct : any) => {
        console.log("objFind wag chamou ");
        let listAux = [...listProduct];
        let objFind = listAux.find((obj : any) => obj.name === objProduct.name );
        objFind.sizeSelect = null;
        setListProduct(listAux);
    }


    

    const ProductData = useMemo(() => {
        return {
            fetchProduct, listProduct, selectSizeProduct, cleanSelectSizeProduct
        }
    }, [listProduct]);

    return <ProductContext.Provider value={ProductData} {...props} />;
};

export const useProductContext = () => useContext(ProductContext);

export default ProductProvider;
