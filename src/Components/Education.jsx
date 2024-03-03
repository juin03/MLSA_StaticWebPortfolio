import React from 'react';

const Education = () => {
    return (
        <div id="Education" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://apicms.thestar.com.my/uploads/images/2020/10/02/882975.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            textShadow: '8px 8px 16px rgba(0, 0, 0, 0.5)', 
        }}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', textDecoration: 'underline', textOutline: '2px solid black', textShadow: '8px 8px 16px rgba(0, 0, 0, 0.5)', color: 'white' }}>My Education</h1>
                <p style={{ fontSize: '24px', fontWeight: 'bold', textOutline: '2px solid black', textShadow: '8px 8px 16px rgba(0, 0, 0, 0.5)', color: 'white' }}>I studied Computer Science at ABC University.</p>
                <p style={{ fontSize: '24px', fontWeight: 'bold', textOutline: '2px solid black', textShadow: '8px 8px 16px rgba(0, 0, 0, 0.5)', color: 'white' }}>I graduated with a Master's degree in Computer Science.</p>
            </div>
        </div>
    );
};

export default Education;
