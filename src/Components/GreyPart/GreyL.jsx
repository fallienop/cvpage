import React from 'react'
import style from './GreyL.module.css'
const GreyL = () => {
  return (
   <div className={style.main}> 
   <h3>PROFILE</h3>
    <p >  Business administration
student.
I consider myself a
responsible and orderly
person.
I am looking forward to
my first work
experience.</p>

<h3>CONTACT ME</h3>

      <div className={style.contacts}>
  <p>123-456-7890</p>
      </div>

      <div className={style.contacts}>
        <p>hello@reallygreatsite.com</p>
      </div>

      <div className={style.contacts}>  
        <p>123 Anywhere St.,
Any City, ST 12345</p>
      </div>

</div>
  )
}

export default GreyL