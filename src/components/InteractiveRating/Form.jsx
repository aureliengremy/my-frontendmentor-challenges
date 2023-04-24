import React from "react";
import Rating from "./Rating";
import Thanks from "./Thanks";
import { useState } from "react";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedRate, setSelectedRate] = useState(0);

  const handleSelect = (nbr) => {
    setSelectedRate(nbr)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (selectedRate !== 0) {
        setIsSubmitted(true)
    }
}
  return <>{isSubmitted ? <Thanks selectedRate={selectedRate} /> : <Rating handleSubmit={() => handleSubmit(event)} handleSelect={handleSelect} /> }</>;
};

export default Form;
