import React, { useRef, useEffect } from 'react'
import HeadButton from './headButton'
export default function Footer() {
      return (
            <div class='container'>
                  <HeadButton name="Bread Crumps Footer"/>
                  <br></br>
                  <br></br>
                  <br></br>
                  <nav>
                        <div class="nav-wrapper">           
                              <div class="col s12 l12 white-text grey">
                                    <a href="#!" class="breadcrumb">Home</a>
                                    <a href="#!" class="breadcrumb">Users</a>
                                    <a href="#!" class="breadcrumb">Brad</a> 
                              </div>
                        </div>
                  </nav>
                  <br></br>
                  <br></br>
                  <br></br>
                  <footer class="page-footer">
                        <div class="container">
                              <div class="row">
                                    <div class="col l6 s12">
                                          <h3 class="white-text">About us</h3>
                                          <p class="hite-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi tortor, tristique in ultricies eget, finibus vitae mi. Donec porta ornare risus vel dapibus. Aliquam erat volutpat. Donec consequat erat id laoreet sollicitudin. Duis eget iaculis mauris, eu rhoncus mi. Quisque consequat cursus venenatis. Suspendisse ac pharetra massa, mattis commodo urna. Nulla sollicitudin volutpat felis eu bibendum. Vivamus nec ex erat.Donec ornare dolor vitae venenatis condimentum. </p>
                                    </div>
                                    <div class="col l4 offset-l2 s12">
                                          <h5 class="white-text">Links</h5>
                                          <ul>
                                                <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                                <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                                <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                                <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                        <div class="footer-copyright grey">
                              <div class="container white-text">
                                    Copyright  © 2021
                              <a class="white-text right" href="#!">Terms and Conditions</a>
                              </div>
                        </div>
                  </footer>

            </div>
      )
}