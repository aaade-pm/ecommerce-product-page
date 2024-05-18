import { createContext, useState } from "react";
import PropTypes from "prop-types";

const OpenCartContext = createContext();

const OpenCartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  {/* A function to toggle the value of isCartOpen */}
  const showCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <OpenCartContext.Provider value={{ isCartOpen, showCart }}>
      {children}
    </OpenCartContext.Provider>
  );
};

OpenCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { OpenCartProvider, OpenCartContext };