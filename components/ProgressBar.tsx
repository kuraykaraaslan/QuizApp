/*
 * ProgressBar component that top on the page
    */

import React from 'react';

const ProgressBar = ({ progress = 0 }: { progress: number }) => {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-4 bg-gradient-to-r from-gray-500 to-gray-700">
            </div>
            <div className="fixed top-0 left-0 w-full h-4 bg-green-300" style={{ width: `${progress}%` }}>
            </div>
        </>
    );
}

export default ProgressBar;