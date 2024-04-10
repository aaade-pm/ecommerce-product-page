import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

const MobileNav = ({closeMenu}) => {
  return (
    <>
        <div className="mobile-nav">
            <button className="mobile-nav-icon" onClick={closeMenu}>
                <FontAwesomeIcon icon={faXmark} />
            </button>

            <div className='mobile-nav-links'>
                <ul>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

MobileNav.propTypes = {
    closeMenu: PropTypes.func.isRequired,
}

export default MobileNav