import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image, {StaticImageData} from 'next/image'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import { GithubIcon } from '@/components/Icons'
import Project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import Inapp from "../../public/images/projects/j1food.png";
import lms from "../../public/images/projects/lms.png";
import wpf from "../../public/images/projects/wpf.png";
import ecomm from '../../public/images/projects/ecomm.jpg';
import xinu from '../../public/images/projects/xinu.jpg';

interface ProjectProps {
    type:string;
    title:string;
    summary?:string;
    img:StaticImageData;
    link:string;
    github:string;
}

const FeaturedProject : React.FC<ProjectProps> = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center jusitfy-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]'/>   
           <Link href={link} target='_blank'
           className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
           >
                <Image src={img} alt={title} className="w-full h-auto border-2 border-dark dark:border-light"
                priority
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw
                '
                />
            </Link>

        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
            <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
            <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className="w-10 md:w-6"> <GithubIcon /></Link>
                <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 
                px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>Visit</Link>
            </div>
            </div> 
        </article>
    )
}

const Project : React.FC<ProjectProps> = ({type, title, img, link, github}) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
        '>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            <Link href={link} target='_blank'
           className='w-full cursor-pointer overflow-hidden rounded-lg'
           >
                <Image src={img} alt={title} className="w-full h-auto border-2 border-dark dark:border-light"/>
            </Link>

        <div className='w-full flex flex-col items-start justify-between mt-4'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
            <Link href={link} 
                  target='_blank' 
                  className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl '>{title}</h2>
            </Link>
            
            <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className="w-8 bg-light rounded-full dark:bg-dark"> <GithubIcon /></Link>
                <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 
                 text-lg font-semibold dark:bg-light dark:text-dark md:text-base'>Visit</Link>
            </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>Shankssc | Projects</title>
            <meta name="description" content='any description'/>
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center jusitfy-center'>
            <Layout className='pt-16'>
                <AnimatedText text="A glimpse into My Work"
                className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'

                />

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                        title="Ryze learning management system"
                        img={lms}
                        summary="A feature-rich learning management system built using React, MongoDB, Flask, and Google OAuth. 
                        It not only operates on roles such as instructor, student and administrator but also comes with features
                        like Localization, inter-user chat, two factor authentication, and commenting."
                        link="/"
                        github='https://github.com/shankssc/Ryze'
                        type='Featured Project'
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title="WPF Image play Canvas"
                        img={wpf}
                        link="/"
                        github='https://github.com/shankssc/ImagePlay'
                        type='Project'
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title="Ecommerce App Indigolist"
                        img={ecomm}
                        link="/"
                        github='https://github.com/Hack-Weekly/indigo-turtle-ecommerce'
                        type='Project'
                        />
                    </div>
                    <div className='col-span-12'>
                    <FeaturedProject 
                        title="J1"
                        img={Inapp}
                        summary="A full stack food delivery app"
                        link="/"
                        github='https://github.com/shankssc/J1_TSVer'
                        type='Featured Project'
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title="XINU Embedded OS"
                        img={xinu}
                        link="/"
                        github='https://github.iu.edu/suschaud/xinu-S22'
                        type='Project'
                        />
                    </div>
                    
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects