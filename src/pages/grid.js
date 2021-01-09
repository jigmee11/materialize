import React from 'react'
import HeadButton from './headButton';

export default function Grid() {
      return (
            <div className="container">
                  <HeadButton name="Grid"/>
                  <div class='row'>
                        <div class="col box s1 grey lighten-3 center-align">1</div>
                        <div class="col box s1 center align grey lighten-3">2</div>
                        <div class=" col box s1 center align grey lighten-3">3</div>
                        <div class=" col box s1 center align grey lighten-3">4</div>
                        <div class=" col box s1 center align grey lighten-3">5</div>
                        <div class=" col box s1 center align grey lighten-3">6</div>
                        <div class=" col box s1 center align grey lighten-3">7</div>
                        <div class=" col box s1 center align grey lighten-3">8</div>
                        <div class=" col box s1 center align grey lighten-3">9</div>
                        <div class=" col box s1 center align grey lighten-3">10</div>
                        <div class=" col box s1 center align grey lighten-3">11</div>
                        <div class=" col box s1 center align grey lighten-3">12</div>
                  </div>
                  <br></br>
                  <div class='row '>
                        <div class="col box s4 center-align grey lighten-3">1</div>
                        <div class="col box s4 center-align grey lighten-3">2</div>
                        <div class="col box s4 center-align grey lighten-3">3</div>
                  </div>
                  <br></br>
                  <div class='row'>
                        <div class="col box s6 grey lighten-3 center-align">1</div>
                        <div class="col box s6 grey lighten-3 center-align">2</div>
                  </div>
                  <br></br>
                  <div class='row'>
                        <div class="col box s7 grey lighten-3 center-align">1</div>
                        <div class="col box s5 grey lighten-3 center-align">2</div>
                  </div>
                  <br></br>
                  <div class='row'>
                        <div class="col box s12 l1 grey lighten-3 center-align">1</div>
                        <div class="col box s12 l1 grey lighten-3 center-align">2</div>
                        <div class="col box s12 l1 grey lighten-3 center-align">3</div>
                        <div class="col box s12 l1 grey lighten-3 center-align">4</div>
                        <div class="col box s12 l1 grey lighten-3 center-align">5</div>
                        <div class="col box s12 l1 grey lighten-3 center-align">6</div>
                        <div class="col box s12 l1 grey lighten-3 center-align">7</div>
                        <div class="col box s12 l1 grey lighten-3 center-align">8</div>
                        <div class="col box s12 l1 grey lighten-3 center-align">9</div>
                        <div class="col box s12 l1 grey lighten-3 center-align">10</div>
                        <div class="col box s12 l1 grey lighten-3 center-align">11</div>
                        <div class="col box s12 l1 grey lighten-3 center-align">12</div>
                  </div>

                  <br></br>
                  <div class='row '>
                        <div class="col box s12 l4 grey lighten-3 center-align">1</div>
                        <div class="col box s12 l4 grey lighten-3 center-align">2</div>
                        <div class='col box s12 l4 grey lighten-3 center-align'>3</div>
                  </div>
                  <br></br>

                  <div class='row '>
                        <div class="col box s12 l9 grey lighten-3 center-align">1</div>
                        <div class="col box s12 l3 grey lighten-3 center-align">2</div>
                  </div>
                  <br></br>

                  <div class='row '>
                        <div class="col box s5 grey lighten-3 center-align">1</div>
                        <div class="col box s7 grey lighten-3 center-align">2</div>
                  </div>
                  <br></br>
                  <div class='row '>
                        <div class="col box s6 push-s3 lighten-3 center-align grey lighten-3 center-align">Login</div>
                  </div>

            </div>
      );
}