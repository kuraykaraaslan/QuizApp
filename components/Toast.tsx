'use client';
/*
* Toast message component
*/

import React, { useEffect, useState } from 'react';

const Toast = ({ message , show }: { message: string, show: boolean }) => {

    return (
        <div className={"fixed bottom-24 right-12 p-4 bg-green-500 text-white rounded-md shadow-md transition-opacity duration-300" + (show ? " opacity-100" : " opacity-0")}>
            <p>{message}</p>
        </div>
    );
}

export default Toast;