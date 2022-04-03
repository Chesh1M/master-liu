import React from 'react'
import './ServicesStyles.css'
import baby from '../../images/baby.jpg'
import { Button, BtnWrap } from '../ButtonElements'
import { FaHandPointRight } from 'react-icons/fa';

// For translation
import { useTranslation } from 'react-i18next';
import { SRLWrapper } from 'simple-react-lightbox';

const lightboxOptions = {
    settings: {
      disableKeyboardControls: true,
      disableWheelControls: true,
      disablePanzoom: true
    },
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
      showNextButton: false,
      showPrevButton: false
    },
    thumbnails: {
      showThumbnails: false
    }
};

const Services = () => {
    // For translation
    const { t } = useTranslation();

    return (
        <section id='services'>
            <div className='container services-container'>
                <h1 className='services-header'>Infants Buddhist Ceremonial Services</h1>

                <div className='row'>
                    <div className='col-lg-8 services-description-wrapper'>              
                        <p className='services-para'>
                            I provide this for all who have been unfortunate enough to have gone through the sadness and sorrows of miscarriage or abortion. The aim of this service is to help the soul of an unborn child seek peace and gives it the ability to be reborn. The parent of the unborn child will also finally be able to seek closure knowing that they have been able to depart to a better place. Please click on the "Learn More" button below to find out more about this service.
                        </p>
                        <br />
                        <BtnWrap>
                            <Button to='/FAQs'
                            >Learn More &nbsp;<FaHandPointRight /></Button>
                        </BtnWrap>                        
                    </div>
                    <div className='col-lg-4' id='services-img-wrapper'>
                        <img src={baby} alt="Fetus" className='img-fluid'/>
                    </div>
                </div>                
            </div>
        </section>
    )
}

export default Services