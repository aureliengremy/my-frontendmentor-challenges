import React from 'react'
import style from './Rating.module.css'
import Phone from '../../assets/images/illustration-thank-you.svg'

const Thanks = ({selectedRate}) => {
  return (
    <div className={style.panel}>
        <img className={style.thanks_img} src={Phone} alt="" />
        <div className={style.thanks_top_text}>
          <p>You selected {selectedRate} out of 5</p>
        </div>
        <h1 className={style.thanks_title}>Thank you!</h1>
        <p className={style.thanks_text}>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  )
}

export default Thanks