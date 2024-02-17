import React from 'react';

import {About, Header, Footer, Work, Skills, Testimonial} from "./container";

const App = () => {
    return (
        <div className='app'>
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default App;