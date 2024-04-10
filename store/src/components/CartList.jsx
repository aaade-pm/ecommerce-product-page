import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useContext} from "react";
import { AmountContext } from "../AmountContext";
import { TotalContext } from "../TotalContext";
import { AddToCartContext } from "../AddToCartContext";
import { RemoveCartContext } from "../RemoveCartContext";

const CartList = () => {
    const {amount} = useContext(AmountContext);
    const {total} = useContext(TotalContext);
    const {isAddedToCart} = useContext(AddToCartContext);
    const {removeOrder} = useContext(RemoveCartContext);


return (
    <>
    <div className="cart-container">
            <h2>Cart</h2>
            <hr />
            {amount > 0 && isAddedToCart ? (
                <>
                    <div className="order">
                    <div className="order-item">
                            <div className="order-item-image">
                                    <img src={thumbnail1} alt="" />
                            </div>
                            <div className="order-item-details">
                                    <p>Fall Limited Edition Sneakers</p>
                                    <p> $125.00 {amount > 1 && <span>x {amount}</span> } <span className="total-span">${total}.00</span></p>
                            </div>
                    </div>
                    <div className="remove-button">
                            <button onClick={removeOrder}><FontAwesomeIcon icon={faTrashCan} /></button>
                    </div>
                    </div>

                    <button className="checkout-button">Checkout</button>
                </>
            ) : (
                <h3>Your cart is empty</h3>
                )
            } 
            
    </div>
    </>
)
}

export default CartList