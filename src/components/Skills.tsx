import React from 'react'
import {motion} from "framer-motion"
import Image, { StaticImageData } from 'next/image'
import Jira from '../../public/images/skills/jira.png'
import JavaScript from '../../public/images/skills/javascript.png'
import Python from '../../public/images/skills/python.png'
import TypeScript from '../../public/images/skills/typescript.png'
import Csharp from '../../public/images/skills/csharp.png'
import HTML from '../../public/images/skills/html.png'
import CSS from '../../public/images/skills/css.png'
import Git from '../../public/images/skills/git.png'
import GraphQL from '../../public/images/skills/graphql.png'
import Node from '../../public/images/skills/node.png'
import Reactjs from '../../public/images/skills/react.png'
import Figma from '../../public/images/skills/figma.png'
import Redux from '../../public/images/skills/redux.png'
import PostgreSQL from '../../public/images/skills/postgresql.png'
import Nextjs from '../../public/images/skills/Nextjs2.png'
import Dotnet from '../../public/images/skills/Dotnet.png'
import Mongo from '../../public/images/skills/Mongo2.png'
import Mssql from '../../public/images/skills/mssql2.png'
import Nodejs from '../../public/images/skills/node.png'
import ReactNative from '../../public/images/skills/reactnative.png'
import Storybook from '../../public/images/skills/storybook.png'
import Webpack from '../../public/images/skills/Webpack.png'
import Jenkins from '../../public/images/skills/jenkins2.png'
import Jest from '../../public/images/skills/Jest2.png'
import Flask from '../../public/images/skills/Flask.png'
import Tailwind from '../../public/images/skills/Tailwind2.png'
/*
interface SkillProps {
    pic: StaticImageData,
    name: string,
    x: string,
    y: string
}

const Skill : React.FC<SkillProps> = ({pic, name, x, y}) => {
    return (
        <motion.div className='flex items-center justify-center relative text-light py-3 px-6 shadow-dark cursor-pointer absolute
        '
            whileHover={{ scale: 1.05 }}
            initial={{x:0, y:0}}
            whileInView={{x:x, y:y, transition:{duration: 1.5}}}
            animate={{x:x, y:y}}
        >
            <div className='relative'>
                <Image
                    src={pic}
                    alt={name}
                    width={40} // Adjust the width as per your preference
                    height={40} // Adjust the height as per your preference
                    className="rounded-full border border-solid border-dark dark:border-light" // Apply rounded border
                />
                <div className="absolute top-[40px] left-1/2 transform translate-x-[-50%] bg-light p-1 rounded-full border border-solid border-dark">
                    <p className="text-xs font-semibold text-dark dark:bg-light">{name}</p>
                </div>
            </div>
        </motion.div>
    )
}

const Skills : React.FC = () => {
    
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>

        <Skill pic={Python} name="Python" x="0vw" y="0vw"/>
        <Skill pic={JavaScript} name="JavaScript" x="0vw" y="0vw"/>
        <Skill pic={TypeScript} name="TypeScript" x="0vw" y="0vw"/>
        <Skill pic={Csharp} name="C#" x="0vw" y="0vw"/>
        <Skill pic={HTML} name="HTML" x="0vw" y="0vw"/>
        <Skill pic={CSS} name="CSS" x="0vw" y="0vw"/>
        <Skill pic={Nextjs} name="Next.js" x="0vw" y="0vw"/>
        <Skill pic={Dotnet} name="ASP.NET" x="0vw" y="0vw"/>
        <Skill pic={Mssql} name="MSSQL" x="0vw" y="0vw"/>
        <Skill pic={Mongo} name="MongoDB" x="0vw" y="0vw"/>
        <Skill pic={PostgreSQL} name="PostgreSQL" x="0vw" y="0vw"/>
        <Skill pic={Nodejs} name="Node.js" x="0vw" y="0vw"/>
        <Skill pic={Reactjs} name="React.js" x="0vw" y="0vw"/>
        <Skill pic={GraphQL} name="GraphQL" x="0vw" y="0vw"/>
        <Skill pic={Redux} name="Redux" x="0vw" y="0vw"/>
        <Skill pic={Jira} name="Jira" x="0vw" y="0vw"/>
        <Skill pic={Git} name="Git" x="0vw" y="0vw"/>
        <Skill pic={ReactNative} name="React Native" x="0vw" y="0vw"/>
        <Skill pic={Storybook} name="Storybook" x="0vw" y="0vw"/>
        <Skill pic={Webpack} name="Webpack" x="0vw" y="0vw"/>
    </div>
    </>
  )
}
*/
interface SkillProps {
    pic: StaticImageData;
    name: string;
  }
  
  const Skill: React.FC<SkillProps> = ({ pic, name }) => {
    return (
      <div className='flex items-center justify-center relative text-light py-3 px-6 shadow-dark cursor-pointer relative'>
      <div className='relative'>
        <Image
          src={pic}
          alt={name}
          width={50} // Adjust the width as per your preference
          height={50} // Adjust the height as per your preference
          className='rounded-full border border-solid border-dark dark:border-light bg-skillPrimary dark:bg-primaryDark' // Apply rounded border
        />
        <div className='absolute top-[55px] left-1/2 transform translate-x-[-50%] bg-light p-1 rounded-full border border-solid border-dark'>
          <p className='text-xs font-semibold text-dark dark:bg-light'>{name}</p>
        </div>
      </div>
    </div>
    );
  };
  
  const Skills: React.FC = () => {
    
    return (
      <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
        <h3 className='py-4 font-bold pl-6 text-xl grid grid-cols-1'>Languages</h3>
        <div className='grid grid-cols-7 gap-0.5 mt-3'>
          <Skill pic={Python} name='Python'/>
          <Skill pic={JavaScript} name='JavaScript'/>
          <Skill pic={TypeScript} name='TypeScript'/>
          <Skill pic={Csharp} name='C#'/>
          <Skill pic={HTML} name='HTML5'/>
          <Skill pic={CSS} name='CSS3'/>
        </div>
        <h3 className='py-4 font-bold pl-6 text-xl grid grid-cols-1 mt-8'>Frameworks</h3>
        <div className='grid grid-cols-7 gap-0.5 mt-3'>
            <Skill pic={Nextjs} name='Next.js'/>
            <Skill pic={Dotnet} name='.NET'/>
            <Skill pic={Flask} name='Flask'/>
            <Skill pic={Jest} name='Jest'/>
            <Skill pic={Tailwind} name='Tailwind'/>
        </div>
        <h3 className='py-4 font-bold pl-6 text-xl grid grid-cols-1 mt-8'>Databases</h3>
        <div className='grid grid-cols-7 gap-0.5 mt-3'>
            <Skill pic={Mssql} name='MSSQL'/>
            <Skill pic={Mongo} name='MongoDB'/>
            <Skill pic={PostgreSQL} name='Postgres'/>
        </div>
        <h3 className='py-4 font-bold pl-6 text-xl grid grid-cols-1 mt-8'>Technologies</h3>
        <div className='grid grid-cols-7 gap-0.5 mt-3'>
            <Skill pic={Nodejs} name='Node.js'/>
            <Skill pic={Reactjs} name='React.js'/>
            <Skill pic={ReactNative} name='React Native'/>
            <Skill pic={GraphQL} name='GraphQL'/>
            <Skill pic={Redux} name='Redux'/>
        </div>
        <h3 className='py-4 font-bold pl-6 text-xl grid grid-cols-1 mt-8'>Tools</h3>
        <div className='grid grid-cols-7 gap-0.5 mt-3'>
            <Skill pic={Jira} name='Jira'/>
            <Skill pic={Git} name='Git'/>
            <Skill pic={Jenkins} name='Jenkins'/>
            <Skill pic={Storybook} name='Storybook'/>
            <Skill pic={Figma} name='Figma'/>
            <Skill pic={Webpack} name='Webpack'/>
        </div>
      </>
    );
  };

export default Skills