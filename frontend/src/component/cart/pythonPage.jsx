import React from 'react';

const PythonPage = () => {
    return (
       <div className=' bg-slate-700 flex flex-col '>
           <div className=' h-20 w-screen  bg-orange-400'>
                      <p className=' text-4xl  text-center mt-5 align-middle font-mono font-bold text-black items-center'> PYTHON</p>
           </div>
           <div className=' bg-slate-800 w-screen flex flex-row flex-wrap justify-evenly '>
                    <div className=' overflow-hidden my-10 ml-10 bg-orange-400 h-1/4 w-1/4 rounded-3xl hover:shadow-2xl hover:shadow-cyan-700'>
                                <div className=' bg-cyan-700 h-12'>
                                    <p className='text-black ml-5 font-mono text-3xl font-bold'>
                                            D3.JS
                                    </p>
                                </div>
                                <div className=''>
                                      <p className=' mx-2 my-2'>
                                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cum maxime ea molestiae. Cum nobis consectetur impedit quod porro, explicabo voluptatibus
                                                voluptatem cumque architecto consequuntur excepturi eligendi a placeat saepe culpa iusto, eum omnis quisquam velit! Consequatur laboriosam fugit quaerat sint ratione.
                                      </p>
                                </div>
                    </div>
           </div>
       </div>
    );
}

export default PythonPage;
