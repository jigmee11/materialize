import React from 'react'
import HeadButton from './headButton'

export default function ButtonsAndIcons() {
    return (
        <div className="container">
            <HeadButton name="Buttons & Icons"/>
            <div className="row">
                <a style={{marginRight: '11px'}} class="waves-effect white-text waves-light btn-large">Read more</a>
                <a style={{marginRight: '11px'}} class="waves-effect white-text waves-light btn-large">Read more</a>
                <a style={{marginRight: '11px'}} class="waves-effect white-text waves-light btn-large">Read more</a>
                <a style={{marginRight: '11px'}} class="waves-effect white-text waves-light btn-large">Read more</a>
                <a style={{marginRight: '11px'}} class="waves-effect red-text white btn-large">Read more</a>
                <a style={{marginRight: '11px'}} class="waves-effect cyan-text white btn-large">Read more</a>
                <a style={{marginRight: '11px'}} class="waves-effect green-text white btn-large">Read more</a>
                <a style={{marginRight: '11px'}} class="waves-effect grey-text white btn-large">Read more</a>
                <a style={{marginRight: '11px'}} class="waves-effect purple-text white btn-large">Read more</a>
            </div>
            <i className="material-icons" style={{fontSize:'40px'}}>shopping_cart</i>
            <i className="material-icons red-text" style={{fontSize:'40px',marginLeft:'10px'}}>settings</i>
            <i className="material-icons light-blue-text" style={{fontSize:'40px' ,marginLeft:'10px'}}>search</i>
            <i className="material-icons" style={{fontSize:'40px' ,marginLeft:'10px'}}>stars</i>
            <div>
                <i className="material-icons large">check</i>
                <i className="material-icons medium">check</i>
                <i className="material-icons small">check</i>
                <i className="material-icons tiny">check</i>
            </div>
            <div className="row">
                <div className="col s2 waves-effect waves-light btn-large"><i className="material-icons left">shopping_cart</i>BUY NOW</div>
                <div className="col s2 offset-s1 waves-effect waves-light btn-large">BUY NOW <i className="material-icons left">shopping_cart</i></div>
                <div className="col s2 offset-s1 waves-effect waves-light btn-large"><i className="material-icons left">shopping_cart</i>BUY NOW</div>
            </div>
            <div className="row">
                <a style={{marginRight: '11px'}} class="waves-effect white-text red waves-light btn-large">Read more</a>
                <a style={{marginRight: '11px'}} class="waves-effect white-text purple waves-light btn-large">Read more</a>
                <a style={{marginRight: '11px'}} class="waves-effect white-text orange waves-light btn-large">Read more</a>
                <a style={{marginRight: '11px'}} class="waves-effect white-text waves-light btn-large">Read more</a>
                <a style={{marginRight: '11px'}} class="waves-effect white-text black btn-large">Read more</a>
                <a style={{marginRight: '11px'}} class="waves-effect white-text yellow btn-large">Read more</a>
            </div>
            <div className="row">
                <a class='col s3 btn-large white-text' >LARGE BUTTON</a>
                <a class="col s3 offset-s1 btn-large black-text disabled" >DISABLE BUTTON</a>
            </div>
        </div>
    )
}
