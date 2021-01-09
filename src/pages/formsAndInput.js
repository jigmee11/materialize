import React, { useRef, useEffect } from 'react'
import M from 'materialize-css'
import HeadButton from './headButton';
export default function FormsAndInput() {
      const selectOne = useRef();
      const selectTwo = useRef();
      useEffect(() => {
            M.FormSelect.init(selectOne.current, {
            })
      }, [selectOne])
      useEffect(() => {
            M.FormSelect.init(selectTwo.current, {
            })
      }, [selectTwo])
      const select = useRef();
      useEffect(() => {
            M.FormSelect.init(select.current, {
            })
      }, [select])
      return (
            <div className="container">
                  <HeadButton name="Forms & Input" />
                  <div class="row">
                        <form class="col s12">
                              <div class="row">
                                    <div class="input-field col s12 l12">
                                          <input placeholder="Name" id="first_name" type="text" class="validate" />
                                    </div>
                              </div>
                              <div class="row">
                                    <div class="input-field col s12">
                                          <input id="email" placeholder="john@gmail.com" type="email" class="validate" />
                                          <label for="email">Email</label>
                                    </div>
                              </div>
                              <div class='row'>
                                    <div class='input-field col s12 l12'>
                                          <label for='message'>Message</label>
                                          <br></br>
                                          <input id='message' placeholder="Message" class='validate' />
                                    </div>
                              </div>
                              <div class="row">
                                    <div class="col s12">
                                          Numbers of user:
                                          <div class="input-field inline">
                                                <input id="email_inline" type="email" class="validate" />
                                                <label for="email_inline">#</label>
                                                <span class="helper-text" data-error="wrong" data-success="right">Helper text aaaa</span>
                                          </div>
                                    </div>
                              </div>
                        </form>
                  </div>

                  <div class="row">
                        <form class="col s12">
                              <div class="row">
                                    <div class="input-field col s12">
                                          <i class="material-icons prefix">phone</i>
                                          <input id="icon_telephone" placeholder="Phone Number" type="tel" class="validate" />
                                    </div>
                              </div>
                        </form>
                  </div>
                  <div class="row">
                        <form class="col s12 l12">
                              <div class="input-field inline col s12">
                                    <label>Email</label>
                                    <br></br>
                                    <input placeholder="Email" />
                              </div>
                        </form>
                  </div>

                  <div class='row'>
                        <div class="input-field col s12">
                              <select multiple ref={selectOne}>
                                    <option value="" disabled selected >Select Option</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                              </select>
                              <label>Select list</label>
                        </div>
                  </div>
                  <div class='row'>
                        <div class="input-field col s12">
                              <select ref={select}>
                                    <optgroup label="options 1">
                                          <option value="1">Option 1</option>
                                    </optgroup>
                                    <optgroup label="options 2">
                                          <option value="3">Option 2</option>
                                    </optgroup>
                              </select>
                              <label>Optgroups</label>
                        </div>
                  </div>
                  <div class='row'>
                        <div class="input-field col s12">
                              <select multiple ref={selectTwo}>
                                    <option value="" disabled selected >Select Option</option>
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                              </select>
                              <label>Select list</label>
                        </div>
                  </div>

                  <div class='row'>

                        <form class="col s12 l12">
                              <form action="#">
                                    <p>
                                          <label>
                                                <input name="group1" type="radio" checked />
                                                <span>Male</span>
                                          </label>
                                    </p>
                                    <p>
                                          <label>
                                                <input name="group1" type="radio" />
                                                <span>Female</span>
                                          </label>
                                    </p>
                              </form>
                        </form>
                  </div>
                  <form action="#">
                        <p>
                              <label>
                                    <input type="checkbox" />
                                    <span>HTML</span>
                              </label>
                        </p>
                        <p>
                              <label>
                                    <input type="checkbox" checked="checked" />
                                    <span>CSS</span>
                              </label>
                        </p>
                        <p>
                              <label>
                                    <input type="checkbox" />
                                    <span>HTML</span>
                              </label>
                        </p>
                        <p>
                              <label>
                                    <input type="checkbox" disabled="disabled" />
                                    <span>PHP</span>
                              </label>
                        </p>
                  </form>
            </div>
      );
}