import React, {useState} from 'react';

import './Footer.scss'
import {AppWrap, MotionWrap} from "../../wrapper";
import images from "../../constants/images";
import {client} from "../../client";

const Footer = () => {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const {name, email, message} = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        setFormData({...formData, [name]: value })
    }

    const handleSubmit = () => {
        setLoading(true);

        const context = {
            _type: 'contact',
            name: name,
            email: email,
            message: message
        }

        client.create(context)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
    }

    return (
        <>
            <h2 className='head-text'>
                Take a coffee & chat with me
            </h2>

            <div className='app__footer-cards'>
                <div className='app__footer-card'>
                    <img src={images.email} alt='email'/>
                    <a href={"malito:mdtonor@gmail.com"} className='p-text'>mdtonor@gmail.com</a>
                </div>
                <div className='app__footer-card'>
                    <img src={images.mobile} alt='mobile'/>
                    <a href={"tel: +989173623364"} className='p-text'>+98 917 362 3364</a>
                </div>
            </div>

            {!isFormSubmitted ?
                <div className='app__footer-form app__flex'>
                    <div className='app__flex'>
                        <input className='p-text' name='name' type='text' placeholder='Your name...' value={name} onChange={handleChangeInput}/>
                    </div>
                    <div className='app__flex'>
                        <input className='p-text' type='email' name='email' value={email} placeholder='Your email...' onChange={handleChangeInput}/>
                    </div>
                    <div>
                        <textarea
                            className='p-text'
                            placeholder='Your Message'
                            name='message'
                            value={message}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button className='p-text' onClick={handleSubmit}>{!loading ? 'Send message' : 'Sending...'}</button>
                </div>
            :   <div>
                    <h3 className='head-text'>Thank you for getting in touch</h3>
                </div>
            }
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg'
);