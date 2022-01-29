import React, { useState } from 'react';
import data from "../data/section1"

const ChooseYourMs = () => {
    const [cards, setCards] = useState(data)

  return (
      <section className='md:grid grid-cols-2 xl:grid-cols-6 my-8 xl:mx-20'>
          {cards.map((cards) => {
              const {id, text, image} = cards

              return (
                  <article key={id} className='flex items-center px-6 py-2 md:grid md:grid-cols-2'>
                      <img src={image} alt="card" />
                      <p className='mx-3 cursor-pointer hover:underline font-semibold'>{text}</p>
                  </article>
              )
          })}
      </section>
  ) 
};

export default ChooseYourMs;
