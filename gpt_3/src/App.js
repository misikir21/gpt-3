import React from 'react'
import {Footer,Blog,Header,Possible,Whatgpt, Features} from './containers'
import {Article,Brand,Cta,Feature,Navbar} from './components'
function App() {
  return (
    <div className='app'>
        <div className='gradient-bg'>
         <Navbar />
         <Header/>    
        </div>
        <Brand />
        <Whatgpt />
        <Feature />
        <Possible />
        <Features />
        <Cta />
        <Blog />
        <Footer />
        <Article />
        
    </div>
  )
}

export default App