import React from 'react'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll/modules'

import brand_logo from '../../images/brand_logo.jpg'
import './NavStyles.css';
// For translation
import { useTranslation } from 'react-i18next';

const Header = () => {
    // For translation
    const { t } = useTranslation();

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top' id="navbar-wrapper">
            <div className="container">
                {/* Brand Logo */}
                <LinkS className="navbar-brand" to="/" onClick={toggleHome}>
                    <img src={brand_logo} alt="Brand Logo" id='brand-logo'></img>
                </LinkS>

                {/* Hamburger */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu Items */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item text-center">
                            <LinkS className="nav-link active" to="/" onClick={toggleHome}>
                                {t('about')}
                            </LinkS>
                        </li>
                        <li className="nav-item text-center">
                            <LinkS className="nav-link" to="services" smooth={true}>
                                {t('services')}
                            </LinkS>
                        </li>
                        <li className="nav-item text-center">
                            <LinkS className="nav-link" to="articles" smooth={true}>
                                {t('articles')}
                            </LinkS>
                        </li>
                        <li className="nav-item text-center">
                            <LinkS className="nav-link" to="contact" smooth={true}>
                                {t('contact')}
                            </LinkS>
                        </li>
                        <li className="nav-item text-center">
                            <LinkR className="nav-link" to="/FAQs">
                                {t('faq')}
                            </LinkR>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>    
    )
}

export default Header