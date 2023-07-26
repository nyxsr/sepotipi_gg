/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

function index({image,artistName,background,setBackground}) {
  const [hovered,setHovered] = useState(false)
  return (
    <div onMouseEnter={()=>{setBackground(background);setHovered(true)}} onMouseLeave={()=>setHovered(false)} className="main__songs_item">
    <img src={image} alt={artistName}/>
    <p style={{ fontSize:artistName.length < 10 ? 18 : 12 }}>{artistName}</p>
    {hovered && (
    <button>
      <BsFillPlayFill size={24}/>
    </button>
    )}
  </div>
  )
}

export default index
