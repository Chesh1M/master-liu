import React from 'react'
import './ArticlesStyles.css'

// Images
import article1 from '../../images/article-1.jpg'
import article2 from '../../images/article-2.jpg'
import article3 from '../../images/article-3.jpg'
import article4 from '../../images/article-4.jpg'
import article5 from '../../images/article-5.jpg'
import article6 from '../../images/article-6.jpg'
import article7 from '../../images/article-7.jpg'
import article8 from '../../images/article-8.jpg'

// Lightbox
import { SRLWrapper } from "simple-react-lightbox";

// For translation
//import { useTranslation } from 'react-i18next';

const lightboxOptions = {
    settings: {
      disableKeyboardControls: true,
      disableWheelControls: true,
      slideSpringValues: [300, 50],
      slideAnimationType: 'both'
    },
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
      size: "70px"
    },
    thumbnails: {
      showThumbnails: false
    },
    caption: {
        showCaption: false
    }
};

const Articles = () => {
    // For translation
    //const { t } = useTranslation();

    return (
        <section id='articles'>
            <div className='container articles-container'>
                <h1 className='articles-header'>Articles</h1>

                <SRLWrapper options={lightboxOptions}>
                    <div className='slider'>
                        <div className='slide-track'>                            
                            <div className='slide'>
                                <a href={article1}>
                                    <img src={article1} alt="Article 1" />
                                </a>                                
                            </div>
                            <div className='slide'>
                                <a href={article2}>
                                    <img src={article2} alt="Article 2" />
                                </a> 
                            </div>
                            <div className='slide'>
                                <a href={article3}>
                                    <img src={article3} alt="Article 3" />
                                </a> 
                            </div>
                            <div className='slide'>
                                <a href={article4}>
                                    <img src={article4} alt="Article 4" />
                                </a>
                            </div>
                            <div className='slide'>
                                <a href={article5}>
                                    <img src={article5} alt="Article 5" />
                                </a>
                            </div>
                            <div className='slide'>
                                <a href={article6}>
                                    <img src={article6} alt="Article 6" />
                                </a>
                            </div>
                            <div className='slide'>
                                <a href={article7}>
                                    <img src={article7} alt="Article 7" />
                                </a>
                            </div>
                            <div className='slide'>
                                <a href={article8}>
                                    <img src={article8} alt="Article 8" />
                                </a>
                            </div>
                            {/* SAME 9 SLIDES (DOUBLED) */}
                            <div className='slide'>
                                <a href={article1}>
                                    <img src={article1} alt="Article 1" />
                                </a>                                
                            </div>
                            <div className='slide'>
                                <a href={article2}>
                                    <img src={article2} alt="Article 2" />
                                </a> 
                            </div>
                            <div className='slide'>
                                <a href={article3}>
                                    <img src={article3} alt="Article 3" />
                                </a> 
                            </div>
                            <div className='slide'>
                                <a href={article4}>
                                    <img src={article4} alt="Article 4" />
                                </a>
                            </div>
                            <div className='slide'>
                                <a href={article5}>
                                    <img src={article5} alt="Article 5" />
                                </a>
                            </div>
                            <div className='slide'>
                                <a href={article6}>
                                    <img src={article6} alt="Article 6" />
                                </a>
                            </div>
                            <div className='slide'>
                                <a href={article7}>
                                    <img src={article7} alt="Article 7" />
                                </a>
                            </div>
                            <div className='slide'>
                                <a href={article8}>
                                    <img src={article8} alt="Article 8" />
                                </a>
                            </div>                                                 
                        </div>
                    </div>
                </SRLWrapper>   
            </div>
        </section>
    )
}

export default Articles