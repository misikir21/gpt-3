import React from 'react'

const Feature =({title,text})=> {
  return (
    <div className='gpt3__features section__padding" id="features"'>
      <div className='gpt3__features-heading'>

      </div>
      <h1>{title}</h1>
    <div className='gradient__features-container_feature_text'>
         {text}
    </div>
    </div>
  )
}

export default Feature