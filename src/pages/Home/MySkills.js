import React from 'react';
import "./Style.css"
const MySkills = () => {
    return (
        <div className='relative before:bg-gradient-to-t via-[#79203864] to-[#141618] from-[#141618] banner mt-80'>
            <h1 className='hidden md:block skill-text'>Skills</h1>
            <div class="min-h-screen w-10/12 mx-auto">
                <div class="hero-content grid grid-cols-1 md:grid-cols-2">
                    <div className='text-white xl:px-16 lg:px-8 lg:ml-8 py-28 lg:w-[60%] rounded-lg bg-gradient-to-t via-[#79203864] to-[#141618] from-[#141618]'>
                        <div>
                            <h2 className='text-7xl mb-4 font-bold text-primary'>MERN</h2>
                            <p className='text-xl font-semibold'>FAST</p>
                            <p className='text-xl font-semibold'>SECURE</p>
                            <p className='text-xl font-semibold'>QUALITY</p>
                        </div>

                        <div className='bg-primary relative lg:left-[80%] top-16 rounded-lg px-1 py-1 '>
                            <div className='bg-[#363429] px-2 py-1 items-center grid grid-cols-2 rounded-lg'>
                                <h2 className='text-4xl font-bold w-[50%] text-primary'>100%</h2>
                                <p className='text-base w-[50%]'>Client <br /> Satisfaction</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 class="lg:text-5xl text-4xl text-white font-bold">My Advantage</h1>
                        <p class="py-6 text-md capitalize tracking-[1.5px] text-white">Some Skills I'm still polishing by working through and some skills I have mastered.</p>
                        <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
                            <div className='skills1'>
                                <div className='skill'>
                                    <h2 className='text-white text-3xl font-bold'>90%</h2>
                                    <p className='text-white text-lg mt-2 light-effect font-bold'>Figma</p>
                                </div>
                            </div>
                            <div className='skills2'>
                                <div className='skill'>
                                    <h2 className='text-white text-3xl font-bold  '>80%</h2>
                                    <p className='text-white light-effect text-lg mt-2 font-bold'>MongoDB</p>
                                </div>
                            </div>
                            <div className='skills3'>
                                <div className='skill'>
                                    <h2 className='text-white text-3xl font-bold  '>80%</h2>
                                    <p className='text-white text-lg mt-2 light-effect font-bold'>ExpressJs</p>
                                </div>
                            </div>
                            <div className='skills4'>
                                <div className='skill'>
                                    <h2 className='text-white text-3xl font-bold  '>90%</h2>
                                    <p className='text-white text-lg mt-2 light-effect font-bold'>ReactJs</p>
                                </div>
                            </div>
                            <div className='skills5'>
                                <div className='skill'>
                                    <h2 className='text-white text-3xl font-bold  '>85%</h2>
                                    <p className='text-white text-lg mt-2 light-effect font-bold'>NodeJs</p>
                                </div>
                            </div>
                            <div className='skills6'>
                                <div className='skill'>
                                    <h2 className='text-white text-3xl font-bold  '>90%</h2>
                                    <p className='text-white text-lg mt-2 light-effect font-bold'>Firebase</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;