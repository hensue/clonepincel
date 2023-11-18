import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import Feedback from './Feedback'

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40' />
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <div className='w-full text-center md:mt-0 mt-6'>
          <h2 className={styles.heading2}>Save valuable time <br className='sm:block hidden' />with practical features</h2>
          <p className={`${styles.paragraph}`}>
            Unlock the power of innovation with our versatile AI tools,<br />
            designed to take your visual creations to the next level.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-contrainer relative z-[1]'>
        {feedback.map((card) => (
          <Feedback key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
