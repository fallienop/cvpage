import React from 'react'
import style from './Head.module.css'
import imgT from './1068776.jpg'
const Head = () => {
  return (
   <div className={style.main}>
   
    <div className={style.imageBox}>
       <img src={imgT} alt="" />
    </div>
    
     <div className={style.wordBox}>
         <h1>Conner Hamilton</h1>
        <p>Student</p>
    </div>
   
   </div>
  )
}

export default Head