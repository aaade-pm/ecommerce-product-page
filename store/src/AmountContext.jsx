// AmountContext.js
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';


const AmountContext = createContext();

const AmountProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);

  return (
    <AmountContext.Provider value={{ amount, setAmount }}>
      {children}
    </AmountContext.Provider>
  );
};

AmountProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  

export { AmountContext, AmountProvider };
