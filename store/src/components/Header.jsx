import logo from "../assets/images/logo.svg";
import imageAvatar from "../assets/images/image-avatar.png";
import iconCart from "../assets/images/icon-cart.svg";
import CartList from "./CartList";
import { OpenCartContext } from "../contexts/OpenCartContext";
import { useContext } from "react";
import { AmountContext } from "../contexts/AmountContext";
import { AddToCartContext } from "../contexts/AddToCartContext";
import { MenuContext } from "../contexts/MenuContext";
import MobileNav from "./MobileNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  {
    /** Import the OpenCartContext and AmountContext to access the values of isCartOpen and amount and function of showcart **/
  }
  const { amount } = useContext(AmountContext);
  const { showCart, isCartOpen } = useContext(OpenCartContext);
  const { isAddedToCart } = useContext(AddToCartContext);
  const { isMenuOpen, openMenu, closeMenu } = useContext(MenuContext);

  return (
    <>
      <header>
        <div className="menu-bar" onClick={openMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        {/** Display the mobile menu only when isMenuOpen is true **/}
        {isMenuOpen && <MobileNav openMenu={openMenu} closeMenu={closeMenu} />}
        {/** Display the desktop menu **/}
        <div className="logo-and-nav-links">
          <div className="logo">
            <img src={logo} alt="Logo for sneakers store" />
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="user-and-cart">
          <div className="cart">
            {/** Display the cart count only when the amount is greater than 0 */}
            {amount > 0 && isAddedToCart ? (
              <div className="cart-count">
                <p>{amount}</p>
              </div>
            ) : null}
            {/** Onclick it toggles the value of isCartOpen to display CartList component or not **/}
            <img src={iconCart} alt="cart icon" onClick={showCart} />
          </div>
          <div className="user-avatar">
            <img src={imageAvatar} alt="user avatar" />
          </div>
        </div>
        {/** Display the CartList component only when isCartOpen is true **/}
        {isCartOpen && <CartList />}
      </header>
    </>
  );
};

export default Header;
