import React from 'react'
import CursorBlinker from './Cursor'
import { motion } from "framer-motion" 

interface TextProps {
    text: string,
    className?: string,
}

const typecursor = {
    initial: { opacity: 0 },
    animate: { opacity: 1,
        transition: { delay: 0.5, staggerChildren: 0.08 }
    }
}

const TypingText: React.FC<TextProps> = ({ text, className='' }) => {
    return (
        <div className='my-4 text-base font-medium'>
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    variants={typecursor}
                    initial="initial"
                    animate="animate"
                >
                    
                    {char}
                </motion.span>
                
            ))}
        </div>
    )
}

export default TypingText;
