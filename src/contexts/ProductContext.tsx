import { createContext } from "react";

interface ProductContextProps {
  fetchProduct: Function,
  selectSizeProduct: Function,
  cleanSelectSizeProduct: Function,
  listProduct : any[]
}

const ProductValue = {
  fetchProduct: () => {},
  selectSizeProduct: () => {},
  cleanSelectSizeProduct: () => {},
  listProduct : []
}

export const ProductContext = createContext<ProductContextProps>(ProductValue)