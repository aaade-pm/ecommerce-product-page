import { AmountProvider } from "./contexts/AmountContext";
import { TotalProvider } from "./contexts/TotalContext";
import { OpenCartProvider } from "./contexts/OpenCartContext";
import { AddToCartProvider } from "./contexts/AddToCartContext";
import { RemoveCartProvider } from "./contexts/RemoveCartContext";
import { MenuProvider } from "./contexts/MenuContext";
import Header from "./components/Header";
import ProductDisplay from "./components/productDisplay";
function App() {
  return (
    <>
      <AmountProvider>
        <TotalProvider>
          <OpenCartProvider>
            <AddToCartProvider>
              <RemoveCartProvider>
                <MenuProvider>
                  <Header />
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

export default App;
