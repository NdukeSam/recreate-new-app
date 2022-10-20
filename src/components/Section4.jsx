import React from 'react';
import Pricing from './Pricing';

function Section4() {
  return (
    <div className="flex items-center justify-evenly flex-col md:flex-row">
        <Pricing
        membership="Starter"
        amount="Free"
        />
        <Pricing 
        membership="Subtle"
        amount="$90"
        />
        <Pricing
        membership="Delicate"
        amount="$150" 
        />
        <Pricing
        membership="Finesse"
        amount="$200" 
        />
    </div>
  )
}

export default Section4
