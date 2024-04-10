import PropTypes from 'prop-types'
import { createContext, useState, useContext } from 'react'
import { OpenCartContext } from './OpenCartContext'

const AddToCartContext = createContext()

const AddToCartProvider = ({children}) => {
    {/* Access the showCart function from the OpenCartContext import */}
    const{showCart} = useContext(OpenCartContext);
    const [isAddedToCart, setIsAddedToCart] = useState(false)

    {/* A function to toggle the value of isAddedToCart */}
    const addToCart = () => {
        setIsAddedToCart(!isAddedToCart);
        showCart();
    }

  return (
    <AddToCartContext.Provider value={{isAddedToCart, setIsAddedToCart, addToCart}}>
      {children}
    </AddToCartContext.Provider>
  )
}

AddToCartProvider.propTypes = {children: PropTypes.node.isRequired};

export  {AddToCartProvider, AddToCartContext, }