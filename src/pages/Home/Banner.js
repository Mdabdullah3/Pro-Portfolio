import React from 'react';
import "./Style.css"
const Banner = () => {

    let mystyle1 = {
        '--i': '0'
    }
    let mystyle2 = {
        '--i': '1'
    }
    let mystyle0 = {
        '--i': '2'
    }
    let mystyle3 = {
        '--i': '3'
    }
    return (
        <div className="flex w-9/12 md:mt-48 mt-10 mx-auto justify-between items-center">
            <div className=''>
                <h1 className='title hidden md:block'>Hello</h1>
                <h2 className='text-white text-6xl'>I' m</h2>
                <h3 className='text-white text-7xl mt-4 border-style'>Mohamed <span className='font-bold light-effect'>Abdullah</span></h3>
                <div className="border"> </div>
                <p className='text-xl text-white tracking-[2px] mt-4 w-9/12 capitalize'>professional frontend and backend developer with 1 year experience</p>
                <div className='banner before:bg-gradient-to-b from-[#792037] via-[#130203da] to-[#141618]'></div>
                <div>
                    <button>Hire Now</button>
                </div>
            </div>
            <div>
                <div className='cube mr-10'>
                    <div class="top"></div>
                    <div>
                        <span style={mystyle0}></span>
                        <span style={mystyle1}></span>
                        <span style={mystyle2}></span>
                        <span style={mystyle3}></span>
                    </div>
                </div>
                <div className='banner-left before:bg-gradient-to-t from-[#792037] via-[#130203da] to-[#141618]'></div>
            </div>
        </div>
    );
};

export default Banner;