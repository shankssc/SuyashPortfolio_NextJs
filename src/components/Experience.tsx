import React, { AnchorHTMLAttributes, useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

interface detailProp {
    position: string;
    company: string;
    companyLink: string;
    time: string;
    address: string;
    work: string;
}

const Details : React.FC<detailProp>= ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);

    // Split the work string into an array of bullet points
    const workPoints = work.split('•').filter(point => point.trim() !== '');

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-column items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:'spring'}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {position}&nbsp;<a href={companyLink}
                target="_blank"
                className='text-primary dark:text-primaryDark capitalize'
                >@{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <ul className='list-disc ml-4'>
                {workPoints.map((point, index) => (
                    <li key={index} className='font-medium'>{point.trim()}</li>
                ))}
            </ul>
        </motion.div>
    </li>
}

const Experience : React.FC = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

        <motion.div 
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
        md:w-[2px] md:left-[30px] xs:left-[20px]
        '/>
            
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                position='Machine learning Intern'
                company = 'AI-Tech Systems'
                companyLink='https://education.indiana.edu/community/insite/index.html'
                time='07/2019-11/2019'
                address='Remote'
                work="• Applied Data Wrangling, Analysis, Machine learning and Deep learning skills to client’s business problems
                • Implemented popular Machine learning regression, classification, and ensemble models resulting in clients cutting
                almost 33 percent of their expenditures
                • Contributed in developing dNCC compiler that executed ML scripts successfully on Raspberry Pi through consistent
                brainstorming
                • Wrote a creative technical paper on the classification of machine learning techniques effective on imbalanced data for
                the intern technical paper showcasing event
                • Assisted 23 fellow interns through clear communication by monitoring their paper-writing progress"
                />

                <Details 
                position='Application Developer'
                company = 'Indiana University'
                companyLink='https://education.indiana.edu/community/insite/index.html'
                time='08/2022-Present'
                address='Bloomington, Indiana'
                work='• Pioneered Educational Data Dashboard that empowered students across Indiana and New Mexico school districts
                • Streamlined frontend with Storybook by developing modules in isolation boosting efficiency
                • Assembled a series of AG fusion graphs that assisted schools in bringing down truancy by 15%
                • Rescued server accessibility by debugging and remodeling dotnet code and writing fresh benchmark tests
                • Employed Webpack with Babel and Craco to optimize the frontend resulting in streamlined workflows'
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience