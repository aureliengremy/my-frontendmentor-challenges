import React from "react";
import style from "./Rating.module.css";
import { useState } from "react";
import Star from '../../assets/images/icon-star.svg'

const Rating = ({handleSubmit, handleSelect}) => {
    
    const [nbrSelect, setNbrSelect] = useState()

    const handleClick = (nbr) => {
        setNbrSelect(nbr)
        console.log('click: ' + nbr);
        handleSelect(nbr);
    }
  return (
    <form onSubmit={(event) => handleSubmit(event)} className={style.panel}>
      <img className={style.star} src={Star} alt="star icon" />
      <h1 className={style.title}>How did we do ?</h1>
      <p className={style.text}>
        Please let us know how we did with your support request. Thanks for your
        feedback!
      </p>
      <div className={style.grouprates}>
        {[1,2,3,4,5].map(( rate, key ) => (
            <button key={key} type="button" onClick={() => handleClick(rate)} className={style.rate}>{rate}</button>
        ))}
      </div>
      <button type="submit" className={style.submit} disabled={nbrSelect === undefined} >SUBMIT</button>
    </form>
  );
};

export default Rating;
