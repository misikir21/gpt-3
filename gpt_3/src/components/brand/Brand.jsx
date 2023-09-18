import React from 'react'
import './brand.css'
import { google,slack,shopify,dropbox,atlassian } from './import'

function Brand() {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt="google logo" />
      </div>

      <div>
        <img src={slack} alt="slack logo" />
      </div>


      <div>
        <img src={shopify} alt="shopify logo" />
      </div>

      <div>
        <img src={atlassian} alt="atlassia logo" />
      </div>

      <div>
        <img src={dropbox} alt="dropox logot" />
      </div>

      
    </div>
  )
}

export default Brand