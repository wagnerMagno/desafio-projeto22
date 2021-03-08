import { createContext } from "react";

interface UserContextProps {
  login: Function,
  logout: Function,
  isUserLogged: Function,
  addProductToCart: Function,
  removeProductToCart: Function,
  addAmmountProductToCart: Function,
  subAmmountProductToCart: Function,
  userLogged : any
}

const UserValue = {
  userLogged: [],
  login: () => {},
  logout: () => {},
  isUserLogged: () => {},
  removeProductToCart: () => {},
  addAmmountProductToCart: () => {},
  subAmmountProductToCart: () => {},
  addProductToCart: () => {},
}

export const UserContext = createContext<UserContextProps>(UserValue)