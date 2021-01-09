import React, { useRef, useEffect } from 'react'
import M from 'materialize-css'
import HeadButton from './headButton';

export default function Cart() {
      const tab = useRef();
      useEffect(()=>{
            M.Tabs.init(tab.current,{
            })
          },[tab])
      return (
            <div className="container">
                  <HeadButton name="cart"/>
                  <div class="row">
                        <div class='col s12 m6 l6'>
                              <div class="col s12 m12 l12">
                                    <div class="card ">
                                          <div class="card-content black-text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi tortor, tristique in ultricies eget, finibus vitae mi</p>
                                          </div>
                                    </div>
                                    <div >
                                          <div class="card red ">
                                                <div class="card-content white-text">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi tortor, tristique in ultricies eget, finibus vitae mi.</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div class="row">
                              <div class="col s12 l6">
                                    <div class="card ">
                                          <div class="card-content black-text">
                                                <span class="card-title">Card Title</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi tortor, tristique in ultricies eget, finibus vitae mi</p>
                                          </div>
                                          <div class="card-action">
                                                <a href="#">Read more</a>
                                                <a href="#">Read more</a>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div class='row'>
                        <div class='col s12 m6 l6'>
                              <div class='card '>
                                    <div class='card-image'>
                                          <img src={"https://www.homecareinsight.co.uk/wp-content/uploads/2020/07/connected-technology.jpg"} />
                                          <span class='card-title'>Card Image</span>
                                    </div>
                                    <div class="card-content">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi tortor, tristique in ultricies eget, finibus vitae mi</p>
                                    </div>
                                    <div class="card-action">
                                          <a href="#">Read more</a>
                                          <a href="#">Read more</a>
                                    </div>
                              </div>
                        </div>
                        <div class='col s12 m6 l6'>
                              <div class='card '>
                                    <div class='card-image'>
                                          <img src={"https://www.universal-rights.org/wp-content/uploads/2019/09/30212411048_2a1d7200e2_z-1.jpg"} />
                                          <span class='card-title'>Image & Button  </span>
                                          <a class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons">add</i></a>
                                    </div>
                                    <div class="card-content">
                                          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                                    </div>
                              </div>
                        </div>
                  </div>

                  <div class='row '>
                        <div class='col s12 m6 l6 row'>
                              <div class='card col s12 m12 l12'>
                                    <div class='card-image col s6 m6 l6'>
                                          <img src={"https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png"} />
                                    </div>
                                    <div class='card-content col s6 m6 l6'>
                                          <h5 class='center-align'>Horizontal</h5>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi tortor, tristique in ultricies eget, finibus vitae mi.</p>
                                    </div>
                              </div>
                        </ div>
                        <div class='col s12 l6 m6 row'>
                              <div class='card'>
                                    <div class="card-image waves-effect waves-block waves-light">
                                          <img class="activator" src={"https://i.ytimg.com/vi/hC1ncDGjppE/maxresdefault.jpg"} />
                                    </div>
                                    <div class="card-content">
                                          <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                                          <p><a href="#">This is a link</a></p>
                                    </div>
                                    <div class="card-reveal">
                                          <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi tortor, tristique in ultricies eget, finibus vitae mi.</p>
                                    </div>
                              </div>
                        </div>
                  </div>


                  <div class='row'>
                        <div class='col s12 m6 l6'>
                              <div class="card">
                                    <div class="card-content">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi tortor, tristique in ultricies eget, finibus vitae mi.</p>
                                    </div>
                                    <div class="card-tabs">
                                          <ul class="tabs tabs-fixed-width" ref={tab} >
                                                <li class="tab"><a href="#test1">Test 1</a></li>
                                                <li class="tab"><a class="active" href="#test2">Test 2</a></li>
                                                <li class="tab"><a href="#test3">Test 3</a></li>
                                          </ul>
                                    </div>
                                    <div class="card-content grey lighten-4">
                                          <div id="test1">Test 1</div>
                                          <div id="test2">Test 2</div>
                                          <div id="test3">Test 3</div>
                                    </div>
                              </div>
                        </div>
                        <div class='col s12 m6 l6'>
                              <div class="card">
                                    <div class="card-content orange white-text">
                                          <h3 >Tabbed card</h3>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi tortor, tristique in ultricies eget, finibus vitae mi.</p>
                                    </div>
                                    <div class="card-tabs">
                                          <ul class="tabs tabs-fixed-width white" ref={tab}>
                                                <li class="tab"><a href="#test11">Test 1</a></li>
                                                <li class="tab"><a class="active" href="#test12">Test 2</a></li>
                                                <li class="tab"><a href="#test13">Test 3</a></li>
                                          </ul>
                                    </div>
                                    <div class="card-content black white-text en-4">
                                          <div id="test11">This is content for tab 1</div>
                                          <div id="test12">This is content for tab 2</div>
                                          <div id="test13">This is content for tab 3</div>
                                    </div>
                              </div>
                        </div>
                  </div>

                  <div class='row'>
                        <div class='col s4 m4 l4'>
                              <div class="card small">
                                    <div class="card-image">
                                          <img src={""} />
                                          <span class="card-title">Card Title</span>
                                    </div>
                                    <div class="card-content">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi tortor, tristique in ultricies eget, finibus vitae mi.</p>
                                    </div>
                                    <div class="card-action">
                                          <a href="#">This is a link</a>
                                    </div>
                              </div>
                        </div>
                        <div class='col s4 m4 l4'>
                              <div class="card medium">
                                    <div class="card-image">
                                          <span class="card-title">Card Title</span>
                                    </div>
                                    <div class="card-content">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi tortor, tristique in ultricies eget, finibus vitae mi..</p>
                                    </div>
                                    <div class="card-action">
                                          <a href="#">This is a link</a>
                                    </div>
                              </div>

                        </div>
                        <div class='col s4 m4 l4'>
                              <div class="card large ">
                                    <div class="card-image">
                                          <span class="card-title">Card Title</span>
                                    </div>
                                    <div class="card-content">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi tortor, tristique in ultricies eget, finibus vitae mi..</p>
                                    </div>
                                    <div class="card-action">
                                          <a href="#">This is a link</a>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div class='row'>
                        <div class='col s6 m6 l3 '>
                              <div class="card-panel blue ">
                                    <span class="black-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi tortor, tristique in ultricies eget, finibus vitae mi. Donec porta ornare risus vel dapibus. Aliquam erat volutpat. Donec consequat erat id laoreet sollicitudin. Duis eget iaculis mauris, eu rhoncus mi. Quisque consequat cursus venenatis. Suspendisse ac pharetra massa, mattis commodo urna. Nulla sollicitudin volutpat felis eu bibendum. Vivamus nec ex erat. Donec ornare dolor vitae venenatis condimentum. 
        </span>
                              </div>
                        </div>
                        <div class='col s6 m6 l3'>
                              <div class="card-panel pink">
                                    <span class="white-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi tortor, tristique in ultricies eget, finibus vitae mi. Donec porta ornare risus vel dapibus. Aliquam erat volutpat. Donec consequat erat id laoreet sollicitudin. Duis eget iaculis mauris, eu rhoncus mi. Quisque consequat cursus venenatis. Suspendisse ac pharetra massa, mattis commodo urna. Nulla sollicitudin volutpat felis eu bibendum. Vivamus nec ex erat.

Donec ornare dolor vitae venenatis condimentum. 
                        </span>
                              </div>
                        </div>
                        <div class='col s6 m6 l3'>
                              <div class="card-panel teal">
                                    <span class="black-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi tortor, tristique in ultricies eget, finibus vitae mi. Donec porta ornare risus vel dapibus. Aliquam erat volutpat. Donec consequat erat id laoreet sollicitudin. Duis eget iaculis mauris, eu rhoncus mi. Quisque consequat cursus venenatis. Suspendisse ac pharetra massa, mattis commodo urna. Nulla sollicitudin volutpat felis eu bibendum. Vivamus nec ex erat.

Donec ornare dolor vitae venenatis condimentum. 
                                    </span>
                              </div>
                        </div>
                        <div class='col s6 m6 l3'>
                              <div class="card-panel yellow">
                                    <span class="black-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi tortor, tristique in ultricies eget, finibus vitae mi. Donec porta ornare risus vel dapibus. Aliquam erat volutpat. Donec consequat erat id laoreet sollicitudin. Duis eget iaculis mauris, eu rhoncus mi. Quisque consequat cursus venenatis. Suspendisse ac pharetra massa, mattis commodo urna. Nulla sollicitudin volutpat felis eu bibendum. Vivamus nec ex erat.

Donec ornare dolor vitae venenatis condimentum. 
                                    </span>
                              </div>
                        </div>
                  </div>

            </div>
      );
}