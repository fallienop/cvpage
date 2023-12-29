  import React from 'react'
  import whiteCss from './WhiteR.module.css'
  export const WhiteR = () => {
    return (

      <div className={whiteCss.main}>
        
            <div className={whiteCss.skills}>
                 <h3>EDUCATION </h3>
                 <h5>BORCELLE UNIVERSITY</h5>
                 <p>Business Administration career, in progress.</p>
                 <h5>BORCELLE COLLEGE</h5>
                 <p>2018-2022</p>
            </div>
            
            <div className={whiteCss.skills}>
                 <h3>LANGUAGE</h3>
                 <p>Native English.</p>
                 <p>Advanced Spanish.</p>
            </div>
            
            <div className={whiteCss.skills}>
                 <h3>COMPUTER SKILLS</h3>
                 <p>Text processor.</p>
                 <p>Spreadsheet.</p>
                 <p>Slide presentation.</p>
            </div>
      
            <div className={whiteCss.skills}>
                 <h3>WORK EXPERIENCE</h3>
                 
                 <h4>INGOUDE COMPANY</h4>
                 <p>Participation in collections to distribute in low-income schools.</p>
                
            </div> 
     </div>
      
      
    )
  }
  export default WhiteR