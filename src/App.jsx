import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'

const App = () => {

  const [showContent, setShowContent] = useState(false);

  useGSAP(() =>{

    if(!showContent) return;

    gsap.to('.main',{
      scale:1,
      rotate:0,
      duration:2,
      delay:-0.5,
      ease:'Expo.easeInOut'
    });

    gsap.to('.sky',{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:-0.8,
      ease:'Expo.easeInOut'
    });

    gsap.to('.bg',{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:-0.8,
      ease:'Expo.easeInOut'
    });

    gsap.to('.character',{
      scale:1.4,
      rotate:0,
      x:'-50%',
      bottom:'-35%',
      duration:2,
      delay:-0.6,
      ease:'Expo.easeInOut'
    });

    gsap.to('.text',{
      scale:1,
      rotate:0,
      duration:2,
      delay:-0.6,
      ease:'Expo.easeInOut'
    });

    const main = document.querySelector('.main');

    main?.addEventListener('mousemove', function(e){
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to('.main .text',{
        x: `${xMove}%`,
      });

      gsap.to('.sky',{
        x: xMove,
      });

      gsap.to('.bg',{
        x: xMove * 1.7,
      });
      
    });
    
  },[showContent]);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to('.vi-mask-group', {
      rotate: 20,
      duration: 2,
      ease: 'Power4.easeInOut',
      transformOrigin: '50% 50%',
    }).to('.vi-mask-group', {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: 'Expo.easeInOut',
      transformOrigin: '50% 50%',
      opacity: 0,
      onUpdate: function(){
        if(this.progress() >= .9){
          document.querySelector('.svg').remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  });

  return (
    <>
      <div className='svg flex items-center justify-center fixed top-0 left-0 z-[100] 
      w-full h-screen overflow-hidden bg-black'>
        <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>    {/*It's a tag*/}
          <defs>      {/*It's a tag*/}
            <mask id='viMask'>      {/*mask*/}
              <rect width='100%' height='100%' fill='black' />  {/*rectangle*/}
              <g className='vi-mask-group'>  {/*group*/}
                <text
                  x='50%'
                  y='50%'
                  fontSize='250'
                  textAnchor='middle'
                  fill='white'
                  dominantBaseline='middle'
                  fontFamily='Arial Black'
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href='./bg.png'
            width='100%'
            height='100%'
            preserveAspectRatio='xMidYMid slice'
            mask='url(#viMask)'
          />
        </svg>
      </div>

      {showContent && (
        <div className='main w-full rotate-[-10deg] scale-[1.7]'>
        <div className='landing overflow-hidden relative w-full h-screen bg-black'>
          <div className='navbar absolute top-0 left-0 z-[10] w-full py-5 px-10'>
            <div className='logo flex gap-4'>
              <div className='lines flex flex-col gap-[4px]'>
                <div className='line w-14 h-1 bg-white'></div>
                <div className='line w-10 h-1 bg-white'></div>
                <div className='line w-6 h-1 bg-white'></div>
              </div>
              <h3 className='text-3xl text-white -mt-[9px] leading-none'>Rockstar</h3>
            </div>
          </div>
          <div className='imagesdiv overflow-hidden relative w-full h-screen'>
            <img className='absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover' src='./sky.png'/>

            <img className='absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-full object-cover' src='./bg.png' />

            <div className='text absolute top-0 flex flex-col gap-1 left-1/2 -translate-x-1/2 
            text-white scale-[1.4] rotate-[-10deg] mt-5'>
              <h1 className='text-[6rem] -ml-30 leading-none'>grand</h1>       {/* needs to change height */}
              <h1 className='text-[6rem] ml-3 leading-none'>theft</h1>       {/* needs to change height */}
              <h1 className='text-[6rem] -ml-30 leading-none'>auto</h1>        {/* needs to change height */}
          </div>

            <img className='absolute character -bottom-[150%] left-1/2 -translate-x-1/2 h-full scale-[3] rotate-[-20deg]' 
            src='./girlbg.png' />    
            
          </div>
          <div className='btmbar text-white absolute w-full py-10 px-10 bottom-0 left-0 
          bg-gradient-to-t from-black to-transparent'>
            <div className='flex gap-2 items-center'>
                <i className="ri-arrow-down-line text-xl"></i>
                <h3 className='font-[Helvetica_Now_Display] text-md'>Scroll Down</h3>
            </div>

            <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[35px] mt-2' 
            src='./ps5.png' />
          </div>
        </div>
        <div className='w-full h-screen bg-black flex items-center justify-center px-10'>
          <div className='cntnr w-full h-[80%] flex text-white'>
            <div className='limg relative w-130 h-150 ml-15'>
            <img className='absolute top-1/2 left-1/2 -translate-x-1/2
            -translate-y-1/2 ' src='./imag.png' alt=''/>
            </div>
            <div className='rg w-[38%] mt-20 ml-25'>
              <h1 className='text-6xl'>Lucia Caminos</h1>
              <h1 className='text-6xl'>A life with Jason could be her way out.</h1>
              <p className='mt-7 text-md font-[Helvetica_Now_Display]'>
                The only thing that matters is who you know and what you got.</p>
              <p className='mt-3 text-md font-[Helvetica_Now_Display]'>
                Fresh out of prison and ready to change the odds in her favor, Lucia’s committed to her plan — no matter what it takes.
              </p>
              <p className='mt-5 text-md font-[Helvetica_Now_Display]'>
                When the sun fades and the neon glows, everyone has something to gain — and more to lose.
              </p>

              <button className='bg-yellow-500 px-8 py-8 text-3xl text-black
              mt-8 cursor-pointer'>Download Now</button>
            </div>
          </div>
          
        </div>
        </div>
        )}
    </>
  );
}

export default App