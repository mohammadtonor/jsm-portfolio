import React from 'react';

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'contact', 'work','testimonials', 'skills'].map((item, index) => (
                <a
                    className='app__navigation-dot'
                    key={item + index}
                    href={`#${item}`}
                    style={active === item ? {backgroundColor: "#313BAC"} : {}}
                />
            ))}
        </div>
    );
};

export default NavigationDots;