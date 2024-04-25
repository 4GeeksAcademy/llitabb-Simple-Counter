import React from "react";
import DigitCard from "./digitcard";

const SecondsCounter = (props) => {
    const number = props.seconds;
    
    const ones = number % 10;
    const tens = Math.floor(number / 10) % 10;
    const hundreds = Math.floor(number / 100) % 10;
    const thousands = Math.floor(number / 1000) % 10;
    const tenthousands = Math.floor(number / 10000) % 10;
    const hundredthousands = Math.floor(number / 100000) %10;
    
    return (
      <div>
        <DigitCard>
        <i className="fa-regular fa-clock"></i>
        </DigitCard>
        <DigitCard>
        {hundredthousands}
        </DigitCard>
        <DigitCard>
        {tenthousands}
        </DigitCard>
        <DigitCard>
        {thousands}
        </DigitCard>
        <DigitCard>
        {hundreds}
        </DigitCard>
        <DigitCard>
        {tens}
        </DigitCard>
        <DigitCard>
        {ones}
        </DigitCard>
      </div>
    );
  }  

export default SecondsCounter;
