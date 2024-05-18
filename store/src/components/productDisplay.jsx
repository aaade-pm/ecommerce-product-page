import imageProduct1 from "../assets/images/image-product-1.jpg";
import imageProduct2 from "../assets/images/image-product-2.jpg";
import imageProduct3 from "../assets/images/image-product-3.jpg";
import imageProduct4 from "../assets/images/image-product-4.jpg";
import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { AmountContext } from "../contexts/AmountContext";
import { AddToCartContext } from "../contexts/AddToCartContext";

const ProductDisplay = () => {
  const { addToCart } = useContext(AddToCartContext);
  const companyName = "SNEAKERS PLUG COMPANY";
  const { amount, setAmount } = useContext(AmountContext);
  // Initialize main image with the first thumbnail image
  const [mainImage, setMainImage] = useState(imageProduct1);

  // Function to handle thumbnail click
  const handleThumbnailClick = (image) => {
    // Update the main image with the clicked thumbnail image
    setMainImage(image);
  };

  const handleIncrease = () => {
    setAmount(amount + 1);
  };
  const handleDecrease = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  return (
    <div>
      <section className="product-display">
        {/* JSX responsible for holding the main image and the thumbnail*/}
        <div className="product-image">
          <div className="product-main-image">
            <img src={mainImage} alt="" />
          </div>
          <div className="product-thumbnails">
            <div className="product-thumbnail">
              <img
                src={thumbnail1}
                alt=""
                onClick={() => handleThumbnailClick(imageProduct1)}
              />
            </div>
            <div className="product-thumbnail">
              <img
                src={thumbnail2}
                alt=""
                onClick={() => handleThumbnailClick(imageProduct2)}
              />
            </div>
            <div className="product-thumbnail">
              <img
                src={thumbnail3}
                alt=""
                onClick={() => handleThumbnailClick(imageProduct3)}
              />
            </div>
            <div className="product-thumbnail">
              <img
                src={thumbnail4}
                alt=""
                onClick={() => handleThumbnailClick(imageProduct4)}
              />
            </div>
          </div>
        </div>
        {/* JSX responsible for holding the product details*/}
        <div className="product-details">
          <div className="product-details-info">
            <p className="company-name">{companyName}</p>
            <h1>
              Fall Limited Edition <br /> Sneakers
            </h1>
            <p className="description">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="price-discount">
              <p className="price">$125.00</p>
              <div className="discount-container">
                <p className="discount">50%</p>
              </div>
            </div>
            <p className="old-price">$250.00</p>
          </div>

          <div className="cart-button">
            <div className="quantity-buttons">
              <button onClick={handleDecrease}>-</button>
              <p>{amount}</p>
              <button onClick={handleIncrease}>+</button>
            </div>
            <button
              className="add-to-cart"
              onClick={amount > 0 ? addToCart : null}
            >
              <div className="add-cart-icon">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDisplay;
