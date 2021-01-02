import React from 'react'
import M from 'materialize-css'

export default function Typography() {
    return (
        <div className="container">
            <h1 className="center-align">Basic Typography</h1>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat consequat luctus. Pellentesque ultricies iaculis nunc, eget semper mi aliquet quis. Pellentesque lacinia, dui non gravida congue, velit ipsum gravida felis, at interdum nunc arcu sed nibh.</p>
            <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat consequat luctus</blockquote>
            <p className="flow-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat consequat luctus. Pellentesque ultricies iaculis nunc, eget semper mi aliquet quis. Pellentesque lacinia, dui non gravida congue, velit ipsum gravida felis, at interdum nunc arcu sed nibh.</p>
            <h5 class="left-align">Left aligned text</h5>
            <h5 class="right-align">Right aligned text</h5>
            <h5 class="center-align">Center aligned text</h5>
            <div class="valign-wrapper blue-grey lighten-5" style={{height: '300px'}}>
                <h5>This should be vertically aligned</h5>
            </div>
      
            <p class="left-align">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat consequat luctus. Pellentesque ultricies iaculis nunc, eget semper mi aliquet quis.</p>
            <p class="right-align">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat consequat luctus. Pellentesque ultricies iaculis nunc, eget semper mi aliquet quis.</p>
            <p class="center-align">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat consequat luctus. Pellentesque ultricies iaculis nunc, eget semper mi aliquet quis.</p>
        </div>
    )
}