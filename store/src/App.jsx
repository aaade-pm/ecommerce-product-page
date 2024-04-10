import { AddToCartProvider } from './AddToCartContext';
import { AmountProvider } from './AmountContext';
import { MenuProvider } from './MenuContext';
import { OpenCartProvider } from './OpenCartContext';
import { RemoveCartProvider } from './RemoveCartContext';
import { TotalProvider } from './TotalContext';
// import CartList from './components/CartList';
import Header from './components/Header';
import ProductDisplay from './components/productDisplay'; // Fix the casing of the import statement
function App() {
  return (
    <>
      <AmountProvider>
        <TotalProvider>
        <OpenCartProvider>
          <AddToCartProvider>
            <RemoveCartProvider>
              <MenuProvider>
          <Header/>
          <ProductDisplay />
          </MenuProvider>
          </RemoveCartProvider>          
          </AddToCartProvider>
          </OpenCartProvider>
        </TotalProvider>
      </AmountProvider>
    </>
  );
}


export default App
