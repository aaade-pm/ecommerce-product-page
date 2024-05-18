import { createContext } from "react";
import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import { AmountContext } from "./AmountContext";

const TotalContext = createContext();

const TotalProvider = ({ children }) => {
  {
    /* Access the amount from the AmountContext index */
  }
  const { amount } = useContext(AmountContext);

  const [total, setTotal] = useState(0);

  {
    /* Calculate the total amount using useEffect since is an external data, total and amount also have to re-render if amount change  */
  }
  useEffect(() => {
    setTotal(amount * 125);
  }, [total, amount]);
  return (
    <TotalContext.Provider value={{ total, setTotal }}>
      {children}
    </TotalContext.Provider>
  );
};

TotalProvider.propTypes = { children: PropTypes.node.isRequired };

export { TotalProvider, TotalContext };
