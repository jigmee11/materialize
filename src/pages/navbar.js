import React, { useEffect, useRef } from 'react'
import M from 'materialize-css'
import nest from '../logo-primary.svg'
import HeadButton from './headButton';

export default function Navbar() {
      const drop = useRef();
      useEffect(() => {
            M.Dropdown.init(drop.current, {
                  hover: true,
                  coverTrigger: false,
                  constrainWidth: false,
            })
      }, [drop]);
      return (
            <div class='container'>
                  <HeadButton name="Navbar"/>
                  <br></br>
                  <nav>
                        <div class="nav-wrapper" style={{ marginTop: '80px' }}>
                              <a href="#" class="brand-logo left"><img src={nest} alt="nest" /></a>
                              <ul id="nav-mobile" class="right hide-on-med-and-down">
                                    <li><a href="sass.html">Home</a></li>
                                    <li><a href="badges.html">About</a></li>
                                    <li><a href="collapsible.html">Contant</a></li>
                              </ul>
                        </div>
                  </nav>
                  <div style={{ marginTop: '30px' }}></div>
                  <ul id="dropdown1" class="dropdown-content">
                        <li><a href="#!">one</a></li>
                        <li><a href="#!">two</a></li>
                        <li class="divider"></li>
                        <li><a href="#!">three</a></li>
                  </ul>
                  <nav>
                        <div class="nav-wrapper blue text-white">
                              <a href="#" class="brand-logo">
                                    <img src={nest} />
                              </a>
                              <ul id="nav-mobile" class="right hide-on-med-and-down">
                                    <li><a>Home</a></li>
                                    <li><a >About</a></li>
                                    <li><a >Contact</a></li>
                                    <li><a class="dropdown-trigger" href="#!" data-target="dropdown1" ref={drop}>Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
                                    <li><a class='btn' style={{ width: '100px' }}>Login</a></li>
                                    <li><i class="material-icons" style={{ fontSize: '40px', marginRight: '20px' }}>person</i></li>
                              </ul>

                        </div>
                  </nav>

                  <div style={{ marginTop: '30px' }}></div>
                  <nav>
                        <div class="nav-wrapper black text-white">
                              <a href="#" class="brand-logo">
                                    <img src={nest} />
                              </a>
                              <ul id="nav-mobile" class="right hide-on-med-and-down">
                                    <li ><h5>Home</h5></li>
                                    <li style={{ marginLeft: '20px' }}> <h5 >About</h5></li>
                                    <li style={{ marginLeft: '20px' }}> <h5>Contact</h5></li>
                              </ul>
                        </div>
                  </nav>
                  <br></br><br></br><br></br><br></br><br></br>
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
      );
}