import React from 'react'
import './ContactStyles.css'
import { FaPhoneAlt } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact'>
        <div className='container contact-container'>
            <h1 className='contact-header text-center'>Contact us now!</h1>
            <div className='row pb-5'>
                <div className='col-lg-6 text-center'>
                    <h3 className='contact-category-header'><FaPhoneAlt /> Call / Whatsapp </h3>
                    <h5> +65 8123 4567</h5>
                    <h5> +65 9876 5432</h5>
                </div>
                <div className='col-lg-6 text-center timings-section'>
                    <h3 className='contact-category-header'><FaClock /> Opening hours </h3>
                    <h5> Monday to Sunday: 7:30am to 10pm</h5>
                </div>
            </div>
            <div className='google-maps text-center'>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.154746173062!2d103.8544208!3d1.3017027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c1578f671d25a1f!2sFu%20Lu%20Shou%20Complex!5e0!3m2!1sen!2ssg!4v1648998701467!5m2!1sen!2ssg" 
                    width="80%" 
                    height="450" 
                    style={{border:"0"}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    </section>
  )
}

export default Contact