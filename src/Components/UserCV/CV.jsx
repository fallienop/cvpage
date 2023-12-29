import React from 'react'
import style from './CV.module.css'
import GreyL from "../GreyPart/GreyL";
import Head from "../Header/Head";
import WhiteR from "../RightSide/WhiteR";

const CV = () => {
  return (
   <div className={style.main}>
    <div className={style.header}>
       <Head/>
       </div>
      <div className={style.duo}> <GreyL/>
        <WhiteR/> 
        </div>
   </div>

  )
}

export default CV