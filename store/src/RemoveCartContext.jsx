import {createContext} from 'react'
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AmountContext } from "./AmountContext";
import { AddToCartContext } from "./AddToCartContext";

const RemoveCartContext = createContext()

const RemoveCartProvider = ({children}) => {
    const {setAmount} = useContext(AmountContext);

    const {setIsAddedToCart} = useContext(AddToCartContext);

    const removeOrder = () => {
        setAmount(0);
        setIsAddedToCart(false);
    }

  return (
    <RemoveCartContext.Provider value={{removeOrder}}>
      {children}
    </RemoveCartContext.Provider>)
}

RemoveCartProvider.propTypes = {children: PropTypes.node.isRequired};

export  {RemoveCartProvider, RemoveCartContext,}