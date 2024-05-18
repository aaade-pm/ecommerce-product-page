import { createContext, useState } from "react";
import PropTypes from "prop-types";

const MenuContext = createContext();

const MenuProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
            
    {/** Function to open the mobile menu **/}
    const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    }
    {/** Function to close the mobile menu **/}
    const closeMenu = () => {
    setIsMenuOpen(false);
    }

  return (
    <MenuContext.Provider value={{isMenuOpen, setIsMenuOpen, openMenu, closeMenu}}>
      {children}
    </MenuContext.Provider>
  );
};

MenuProvider.propTypes = {
    children: PropTypes.node.isRequired,
    };

export { MenuContext, MenuProvider };

