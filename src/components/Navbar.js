import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white p-8 shadow-md">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="font-extrabold text-3xl">
                        <span>SellerKin</span>
                    </div>
                    <div className="flex items-center space-x-8">
                        <button className='font-semibold'>Home</button>
                        <button className='font-semibold'>About us</button>
                        <button className='font-semibold'>Contact us</button>
                        <button className='font-semibold text-sky-600'>Login</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;