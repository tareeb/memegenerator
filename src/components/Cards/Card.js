"use client"
import './Card.css'
import Link from 'next/link'
import { motion} from 'framer-motion'

export default function Card({title , link}) {

  return (

    <motion.div
    initial={{ x: 0 , scale : 0 , transition : {duration : 1} } }
    animate={{ x: 0,  scale : 1 ,transition : {duration : 1} } }
    > 
     <Link href={link}>
        <div className='Card'>
            <h1>{title}</h1>
        </div>
      </Link>
    </motion.div>
      
  )
}
