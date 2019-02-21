import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

const SearchBar = props => {
    return (
        <div className="search-bar">
            <div className="logo">
                <img src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="instagram logo" />
                <span>Instagram</span>
            </div>
            <div className="search-field">
                <input
                type="text"
                placeholder="search"
                />
            </div>
            <div className="menu-icons">
                <FontAwesomeIcon icon={faCompass} className="icon" />
                <FontAwesomeIcon icon={faHeart} className="icon" />
                <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
        </div>
    )
}

export default SearchBar;