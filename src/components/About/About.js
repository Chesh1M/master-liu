import React from 'react'
import './AboutStyles.css'
import master_liu from '../../images/master_liu.jpg'
import { SRLWrapper } from "simple-react-lightbox"
import { Button, BtnWrap } from '../ButtonElements'
import { FaHandPointRight } from 'react-icons/fa'

// For translation
import { useTranslation } from 'react-i18next';

const About = () => {
    // For translation
    const { t } = useTranslation();

    return (
        <section id='about'>
            <div className='container about-container'>
                <h1 className='about-header'>A word from Master Liu</h1>
                
                <div className='row'>
                    <div className='col-lg-8 about-description-wrapper'>                        
                        <p className='about-para'>
                            Greetings everyone! Thank you visiting my page. My name is Master Liu, and I mainly provide Infant Buddhist Ceremonial Services in which I have over 40 years of experience helping unfortunate victims of miscarriage and abortion. If you are interested and would like to know more about me, click on the "Learn More" button below. On the other hand, you can continue reading below to find out more about the service I provide!
                        </p>
                        <br />
                        <BtnWrap>
                            <Button to='/FAQs'
                            >Learn More &nbsp;<FaHandPointRight /></Button>
                        </BtnWrap>                        
                    </div>
                    <div className='col-lg-4' id='about-img-wrapper'>
                        <img src={master_liu} alt="Master Liu" className='img-fluid'/>                   
                    </div>
                </div>                
            </div>
        </section>
    )
}

export default About