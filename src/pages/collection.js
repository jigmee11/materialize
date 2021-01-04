import React from 'react'

export default function Collection(){
      return(
            <div className="container">
                  <h1 className="center-align">Collection & Badges</h1>
                  <div className="row">
                        <button class="col s1 blue btn-large">CSS 1</button>
                        <button class="col s1 offset-s2 green btn-large">CSS 2</button>
                        <button class="col s1 offset-s2 yellow btn-large" style={{color: 'black'}}>JS 1</button>
                        <button class="col s1 offset-s2 red btn-large" style={{color: 'black'}}>JS 2</button>
                  </div>
                  <ul class="collection">
                        <li class="collection-item">First Item</li>
                        <li class="collection-item">Second Item</li>
                        <li class="collection-item">Third Item</li>
                        <li class="collection-item">Fourth Item</li>
                  </ul>
                  <div class="collection">
                        <a href="#!" class="collection-item">First Item</a>
                        <a href="#!" class="collection-item">Second Item</a>
                        <a href="#!" class="collection-item">Third Item</a>
                        <a href="#!" class="collection-item">Fourth Item</a>
                        <a href="#!" class="collection-item"><span className="badge">44</span> Fifth Item</a>
                        <a href="#!" class="collection-item"><span className="badge new">3</span>Sixth Item </a>
                  </div>
                  <ul class="collection with-header">
                        <li class="collection-header"><h4>Items</h4></li>
                        <li class="collection-item">First Item</li>
                        <li class="collection-item">Second Item</li>
                        <li class="collection-item">Third Item</li>
                        <li class="collection-item">Fourth Item</li>
                  </ul>
                  <ul class="collection with-header">
                        <li class="collection-header"><h4>Items</h4></li>
                        <li class="collection-item"><div>First Item<a href="#!" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                        <li class="collection-item"><div>Second Item<a href="#!" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                        <li class="collection-item"><div>Third Item<a href="#!" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                        <li class="collection-item"><div>Fifth Item<a href="#!" class="secondary-content"><i class="material-icons">close</i></a></div></li>
                  </ul>            
                  <ul class="collection">
                        <li class="collection-item avatar">
                              <img src="images/yuna.jpg" alt="" class="circle"/>
                              <span class="title">John Doe</span>
                              <p>jdoe@gmail.com<br></br></p>
                              <p>555-555-5555</p>
                              <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                        </li>
                        <li class="collection-item avatar">
                              <img src="images/yuna.jpg" alt="" class="circle"/>
                              <span class="title">John Doe</span>
                              <p>jdoe@gmail.com<br></br></p>
                              <p>555-555-5555</p>
                              <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                        </li>
                        <li class="collection-item avatar">
                              <img src="images/yuna.jpg" alt="" class="circle"/>
                              <span class="title">John Doe</span>
                              <p>jdoe@gmail.com<br></br></p>
                              <p>555-555-5555</p>
                              <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                        </li>
                        <li class="collection-item avatar">
                              <img src="images/yuna.jpg" alt="" class="circle"/>
                              <span class="title">John Doe</span>
                              <p>jdoe@gmail.com<br></br></p>
                              <p>555-555-5555</p>
                              <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                        </li>
                  </ul>
                              
            </div>
      );
}
