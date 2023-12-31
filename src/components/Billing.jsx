import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt='billing'
          className='w-[50%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-center max-w-[550px] mt-5`}>Ready when you are</h2>
        <p className={`${styles.paragraph} text-center max-w-[550px] mt-5`}>
        Creativity has no bounds! Pincel is designed to provide an intuitive editing
        experience on all mobile devices, so you can also get things done on the go.
        Productivity is not a destination, it's a lifestyle.
        </p>
        {/* <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img
            src={apple}
            alt='app-store'
            className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
          />
          <img
            src={google}
            alt='google-play'
            className='w-[128px] h-[42px] object-contain cursor-pointer'
          />
        </div> */}
      </div>  
    </section>
  )
}

export default Billing
