import React, { useEffect, useRef } from 'react'
import M from 'materialize-css'
import nest from '../logo-primary.svg'

export default function Navbar(){
      const drop = useRef();
      useEffect(()=>{
            M.Dropdown.init(drop.current,{
                  hover:true,
                  coverTrigger:false,
                  constrainWidth:false,
            })
      }, [drop]);
      return(
            <div className="container">
                  <h1 className="center-align">Navbar</h1>
                  <div className="row">
                        <button class="col s1 blue btn-large">CSS 1</button>
                        <button class="col s1 offset-s2 green btn-large">CSS 2</button>
                        <button class="col s1 offset-s2 yellow btn-large" style={{color: 'black'}}>JS 1</button>
                        <button class="col s1 offset-s2 red btn-large" style={{color: 'black'}}>JS 2</button>
                  </div>
                  <div className="col">
                        <nav className="row s12">
                        <div class="nav-wrapper">
                                    <img src={nest}/>
                                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                                    <li><a >Home</a></li>
                                    <li><a >About</a></li>
                                    <li><a >Contact</a></li>
                                    </ul>
                              </div>
                        </nav>
                        <ul id="dropdown1" class="dropdown-content">
                              <li><a href="#!">one</a></li>
                              <li><a href="#!">two</a></li>
                              <li class="divider"></li>
                              <li><a href="#!">three</a></li>
                        </ul>
                        <nav className="row s12 blue">
                              <div class="nav-wrapper">
                              <img src={nest}/>
                              <ul class="right hide-on-med-and-down">
                                    <li><a href="sass.html">Home</a></li>
                                    <li><a href="badges.html">About</a></li>
                                    <li>Contact</li>
                                    <li><a ref={drop} class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
                                    <li><a class="waves-effect waves-light btn">Login</a></li>
                                    <li><i class="large material-icons">person</i></li>
                              </ul>
                              </div>
                        </nav>
                        <nav className="black row s12 offset-s2">
                              <div class="nav-wrapper">
                                    <img src={nest}/>
                                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                                    <li><a >Home</a></li>
                                    <li><a >About</a></li>
                                    <li><a >Contact</a></li>
                                    </ul>
                              </div>
                        </nav>
                        <nav className="row s12 green" >
                              <div class="nav-wrapper">
                                    <form>
                                    <div class="input-field">
                                    <input id="search" type="search" required/>
                                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                                    <i class="material-icons">close</i>
                                    </div>
                                    </form>
                              </div>
                        </nav>
                  </div>
            </div>
      );
}