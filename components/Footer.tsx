/*
* fixed footer
*/

import React from 'react';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full h-12 bg-gray-800 text-white flex items-center justify-center">
            <p>© {new Date().getFullYear()} developed for patika+ by <a href="https://kuray.dev" target="_blank" rel="noreferrer">Kuray Karaaslan</a></p>
        </footer>
    );
}

export default Footer;