import React, { ReactNode } from 'react';

export default function CardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 w-full">
            <div className="w-full md:w-1/2 h-full md:h-2/3 bg-white p-4 items-center justify-center flex flex-col md:shadow-lg rounded-lg">
                {/* Card content */}
                {children}
            </div>
        </div>
    );

}


