import logo from '../assets/images/logo.svg';
import imageAvatar from '../assets/images/image-avatar.png';
import iconCart from '../assets/images/icon-cart.svg';

const Header = () => {
  return (
    <>
        <header>
            <div className="logo-and-nav-links">
                <div className="logo">
                    <img src={logo} alt="Logo for sneakers store" />
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>

            <div className="user-and-cart">
                <div className="cart">
                    <img src={iconCart} alt="cart icon" />
                </div>
                <div className="user-avatar">
                    <img src={imageAvatar} alt="user avatar" />
                </div>
            </div>
        </header>
    </>
  )
}

export default Header