import React, { useEffect, useRef } from 'react'
import M from 'materialize-css'

export default function HeadButton({ name }) {
      const drop = useRef();
      useEffect(()=>{
            M.Dropdown.init(drop.current,{
                  hoverEnabled: true
            });
      },[]);
      return (
            <div>
                  <h1 className="center-align">{name}</h1>
                  <br></br>
                  <div className="row">
                        <button class="col s2 l1 blue btn-large">CSS 1</button>
                        <button class="col s2 l1 offset-l2 offset-s1 green btn-large">CSS 2</button>
                        <button class="col s2 l1 offset-l2 offset-s1 yellow btn-large" style={{ color: 'black' }}>JS 1</button>
                        <button class="col s2 l1 offset-l2 offset-s1 red btn-large dropdown-trigger" href="#" data-target='dropdown1' ref={drop} style={{ color: 'black' }}>JS 2</button>
                        <ul id='dropdown1' class='dropdown-content'>
                              <li><a href="#!">one</a></li>
                              <li><a href="#!">two</a></li>
                              <li><a href="#!">three</a></li>
                        </ul>
                  </div>
                  <br></br>
            </div>
      );
}