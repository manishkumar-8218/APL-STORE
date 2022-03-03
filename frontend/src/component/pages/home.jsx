import React from 'react';
import Library from '../../images/home library.png'
const Home = () => {
    return (
        <div className='bg-cyan-700 w-screen h-screen flex flex-row'>
            <div className='w-1/2 flex justify-center  '>
                <div  className=' '>
                        <h1 className=' text-7xl font-mono font-extrabold mt-48 italic'>APL Librarys</h1>
                        <p className=' font-sans font-semibold  mt-6'>This is the website which is try to fullfill your information</p>
                        <p className=' font-sans font-semibold'>This is the website which is try to fullfill your information</p>
                        <p className=' font-sans font-semibold'>This is the website which is try to fullfill your information</p>
                </div>
            </div>
            <div className='w-1/2 flex justify-center items-center'>
                 <img className=' w-9/12 h-9/12'  src={Library} alt="Home" />
            </div>
        </div>
    );
}

export default Home;
