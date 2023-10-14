"use client"
import './page.css'
import { useState } from 'react'
import MemeGenerator from '../../components/MemeAPI/MemeGenerator'
import { motion} from 'framer-motion'

export default function Page() {

  const [Data , setData] = useState([]);
  const [Meme , setMeme] = useState();

  const getdata = async () => {
        if(Data.length>0) return;
        fetch('https://api.imgflip.com/get_memes')
        .then((response) => response.json())
        .then((data) => {setData(data.data.memes) ; console.log(data.data.memes)})
        .catch((error) => console.log(error))
  } 

  return (
    <div className='memeapi'>

        <div className="servicepage-header">
            <h3>Get Random Memes</h3>
        </div>
        
        <div className='button-container'>
            <button onClick={getdata}>Get Random Memes</button>
        </div>

        <div className="memecontianer">
          <div className="scrollcontianer">
                {
                    Data.map((item) => {return (
                        <motion.div className='memecard' key={item.id} onClick={() => setMeme(item)} 
                          initial={{ x: 2000  , transition : {duration : 1} } }
                          animate={{ x: 0, transition : {duration : 1} } }
                           >
                            <img src={item.url}></img> 
                        </motion.div>
                    ) })
                }
          </div>
        </div>

         {Meme && <MemeGenerator data={Meme}/>}      
    </div>
  )
}
