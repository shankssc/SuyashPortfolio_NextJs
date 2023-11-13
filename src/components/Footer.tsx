import React from 'react'
import Layout from './Layout';
import Link from 'next/link';

const Footer : React.FC = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    '>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
            Developed with <span className='text-primary dark:primaryDark text-2xl px-1'>&#128293;</span> 
            by&nbsp;<Link href="/">Shankssc</Link>
            </div>
            <Link href="/">Say hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer;