import React from 'react'
import { slide1, slide2, slide3 } from '../assets'
import { styles } from '../styles'
import { slideIn } from '../utils/motion'
import { motion } from "framer-motion";


const Carousel = () => {
    return (
      <>
      <div className='flex flex-row gap-10 lg:gap-28 overflow-hidden mt-3'>
                <motion.div
                    variants={slideIn("left", "tween", 0.2, 1)}
                    className='flex lg:w-[500px] w-[150px] flex-col'>
                    <h1 className={`${styles.heroHeadText}`}>Marvel <span className='text-primary'>Travel.</span></h1>
                        <h1 className='lg:text-[60px] sm:text-[30px] xs:text-[25px] text-[18px] lg:leading-[68px]'>Exploring the <br />magic of <br /> technology <br /> & travel</h1>
                    <p className={ `${styles.heroSubText}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita possimus id fuga, repudiandae, o
                  fficia perferendis odit consequuntur at eligendi exercitationem nulla incidunt? Quia quidem hic ipsam
                        nobis! Omnis, aspernatur est.</p>
                    <button className='button bg-primary w-[150px] mt-4'>Book Now</button>
          </motion.div>
                <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                >
              <img src={slide1} alt="slider image" className='mt-5'/>
          </motion.div>
      
        </div>
            
        {/* <div className='flex flex-row justify-between overflow-hidden'>
          <div className='flex w-[300px] flex-col'>
              <h1>Explore the world in style with <span className='text-primary'>Marvel</span> Travel</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita possimus id fuga, repudiandae, o
                  fficia perferendis odit consequuntur at eligendi exercitationem nulla incidunt? Quia quidem hic ipsam
                        nobis! Omnis, aspernatur est.</p>
                        <button className='button bg-primary'>Book Now</button>
          </div>
          <div>
              <img src={slide2} alt="slider image" className='h-full'/>
          </div>
      
      </div>
      
      <div className='flex flex-row justify-between overflow-hidden'>
          <div className='flex w-[300px] flex-col'>
              <h1>Easy and fun travel with <span className='text-primary'>Marvel</span></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita possimus id fuga, repudiandae, o
                  fficia perferendis odit consequuntur at eligendi exercitationem nulla incidunt? Quia quidem hic ipsam
                        nobis! Omnis, aspernatur est.</p>
                        <button className='button bg-primary'>Book Now</button>
          </div>
          <div>
              <img src={slide3} alt="slider image" className='h-full' />
          </div>
      
      </div> */}
     </> 
  )
}

export default Carousel
