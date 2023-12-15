import React from 'react'
import gradient from "./Assets/gradientimage.webp"
import phoneimage from "./Assets/image.webp"
import Applelogo from "./Assets/applelogo.svg"
import emoji1 from "./Assets/emo1.webp"
import emoji2 from "./Assets/emo2.webp"
import emoji3 from "./Assets/emo3.webp"

export default function Page1() {
  return (
    
        <div id='pagemain'>
            <div id='leftdiv'>
              <div id='finM'>Financial Management</div>
              <div id='simtextbox'> <h1><p>A simpler,</p>
                <p> smarter basic</p>
                <p className='inline-paragraph'> credit</p> <p  className='inline-paragraph' id='cardtext'>card.</p>
                        </h1>
                        <div id='subtextbox'>
                        <p className='subtext'>Your powerful companion on the road to financial success! Explore</p>
                        <p className='subtext'>personal budget management, investment opportunities</p></div>
                        </div>
                        <div id='leftbottomcontainer'>
                          <div id='Appstore'><img src={Applelogo} alt="" />App Store</div>
                          <div id='emojibox'><img src={emoji1} alt="" className='emoclass'/><img src={emoji2}  id='emo2' alt="" className='emoclass'/><img src={emoji3}  id='emo3' alt="" className='emoclass'/></div>
                          <div id='lastdiv'><p>24K+</p>
                          <p id='au'>Active User</p>
                          </div>
                        </div>
            </div>
            <div id='rightdiv'>
              <div id='gradientcontainer'><img src={gradient} alt="" id='gradimg'/></div>
              <div id='phonecontainer'><img src={phoneimage} alt="" id='phoneimg' /></div>
            </div>
        </div>
    
  )
}
