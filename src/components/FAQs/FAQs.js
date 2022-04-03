import React from 'react'
import './FAQsStyles.css'
import { SRLWrapper } from "simple-react-lightbox";
import cert1 from '../../images/certificate-Academy_of_Traditional_Chinese_Medicine.jpg'
import cert2 from '../../images/certificate-Acupuncturist_Registration_Certificate.jpg'
import cert3 from '../../images/The_Traditional_Chinese_Medicine_Practitioners_Act.jpg'

// For translation
import { useTranslation } from 'react-i18next';

const lightboxOptions = {
  settings: {
    disableKeyboardControls: true,
    disableWheelControls: true,
  },
  buttons: {
    showAutoplayButton: false,
    showDownloadButton: false,
    showFullscreenButton: false,
    showThumbnailsButton: false,
    size: "60px"
  },
  thumbnails: {
    showThumbnails: false
  }
};

const AboutInfo = () => {
  // For translation
  const { t } = useTranslation();

  return (
    <section>
      <div className='container page-container'>
        <h1>FAQs</h1>
        <div className='question-wrapper'>
          <h2 className='question-title'>Who am I</h2>        
          <p className='question-answer'>
              My name is Master Liu, and I have been working in this industry for over 40 years to provide Infant Buddhist Ceremonial Services. I am also a Licensed Traditional Chinese Medicine practitioner and a registered Acupuncturist with over 20 years of experience. Please take a look at some of my certifications below!
          </p>
        </div>
        
        <SRLWrapper options={lightboxOptions} >
          <div className='row certificate-gallery'>
            <div className='col-lg-4' id='about-img-wrapper'>
              <a href={cert1}>
                  <img src={cert1} alt="Certificate from Academy of Traditional Chinese Medicine" className='img-fluid'/>
              </a>
            </div>
            <div className='col-lg-4' id='about-img-wrapper'>
              <a href={cert2}>
                  <img src={cert2} alt="Certificate from Acupuncturist Registration Certificate" className='img-fluid'/>
              </a>
            </div>
            <div className='col-lg-4' id='about-img-wrapper'>
              <a href={cert3}>
                  <img src={cert3} alt="The Traditional Chinese Medicine Practitioners Act" className='img-fluid'/>
              </a>
            </div>
          </div>
        </SRLWrapper>

        <div className='question-wrapper'>
          <h2 className='question-title'>What is Infants Buddhist Ceremonial Services?</h2>        
          <p className='question-answer'>
            When an unborn baby full of life had to be put to death, either by surgery or induced abortion, his right to live has been robbed and is abandoned into the darkness of the spiritual world. 
            <br /><br />
            These babies that were killed without any proper after death service will be unable to be reincarnated in rebirth, and as time goes on will be formed as a "kinless spirit" of strong hatred or also known as "infant spirit", which tends to lurk around their family members. When the family members are in low spirits, these infant spirits will retaliate and seek revenge, by inflicting various kinds of psychological and physiological disturbances. Such attacks include business failures, anxiety, excessive drinking, aggressiveness, and even deadly incidents like traffic accidents.
          </p>
        </div>

        <div className='question-wrapper pb-5'>
          <h2 className='question-title'>Who is it for?</h2>        
          <p className='question-answer pb-5'>
          If you have been unfortunate enough to have gone through an abortion, please reach out to me so that I am able to help you and your unborn child find closure and part ways peacefully. This will allow the soul to transcend and be released from suffering, and let it be reborn. Not only that, it will also surely give you a peace of mind knowing that you have done what you could to help your unborn child as well as helping improve your own karma.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutInfo

/* Greetings everyone! My name is Master Liu. I am a licensed Traditional Chinese Medicine practitioner and a registered Acupuncturist with over 20 years of experience. However, my main expertise is in providing Infant Buddhist Ceremonial Services, in which I have had over 50 years of experience. Please, feel free to read on to find out more about my services and do not hesitate to contact me for more information! Greetings everyone! Thank you visiting my page. I mainly provide Infant Buddhist Ceremonial Services, in which I have over 40 years of experience, as I want to help the unfortunate victims of miscarriage and abortion. On the side, I also practice and am a Licensed Traditional Chinese Medicine Practitioner, as well as a registered Acupuncturist with around 20 years of experience. */