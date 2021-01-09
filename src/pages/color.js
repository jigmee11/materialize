import React from 'react'
import HeadButton from './headButton';

export default function Color() {
    const texts = ["red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue", "cyan", "teal"];
    const text = ["red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue", "cyan", "teal"];
    return (
        <div className="container">
            <HeadButton name="Color"/>
            <div className="">
                {texts.map(item=><div style={{marginBottom: '20px', fontSize: '20px'}} className={`${item}-text`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>)}
            </div>
            <div className="">
                {text.map(item=><div style={{marginBottom: '20px', fontSize: '20px'}} className={`${item}-text`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>)}
            </div>
                {text.map(item=><div style={{marginBottom: '20px', fontSize: '20px'}} className={item}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>)}
        </div>
    )
}
