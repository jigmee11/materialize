import React, { useEffect, useRef } from 'react'
import noUiSlider from 'nouislider'
import wNumb from 'wnumb'
import M from 'materialize-css'
import HeadButton from './headButton';


export default function FancyFormAndInput() {
      const Range = useRef();
      const date = useRef();
      const time = useRef();
      useEffect(()=>{
            noUiSlider.create(Range.current,{
                  start: [20, 80],
                  connect: true,
                  step: 1,
                  orientation: 'horizontal', 
                  range: {
                    'min': 0,
                    'max': 100,
                  },
                  format: wNumb({
                      decimals: 0
                    })
            })
      },[Range]);
      useEffect(()=>{
            M.Datepicker.init(date.current,{
                  selectMonths: true, // Creates a dropdown to control month
                  selectYears: 15 // Creates a dropdown of 15 years to control year
            });              
      }, [date])
      useEffect(()=>{
            M.Timepicker.init(time.current,{
            })
      }, [time])
      return (
            <div className="container">
                  <h1 className="center-align"></h1>
                  <br></br>
                  <HeadButton name="Fancy Form & Input"/>
                  <div class="switch">
                        <label>
                              Disable
                              <input type="checkbox" />
                              <span class="lever"></span>
                              Enable
                        </label>
                  </div>
                  <br></br>
                  <div class="switch">
                        <label>
                              Disable
                              <input type="checkbox" />
                              <span class="lever"></span>
                              Enable
                        </label>
                  </div>
                  <br></br>
                  <form action="#">
                        <div class="file-field input-field">
                              <div class="btn">
                                    <span>Upload File</span>
                                    <input type="file" multiple/>
                              </div>
                              <div class="file-path-wrapper">
                                    <input class="file-path validate" type="text" />
                              </div>
                        </div>
                  </form>
                  <br></br>
                  <form action="#" ref={Range}>
                        <p class="range-field">
                              <input type="range" id="test5" min="0" max="100" />
                        </p>
                  </form>
                  <br></br>
                  <div className="row">
                        <label>Choose a date</label>
                        <input type="text" class="datepicker" ref={date}/>
                  </div>
                  <div className="row">
                        <label>Choose a date</label>
                        <input type="text" class="timepicker" ref={time}/>
                  </div>
                  <div className="row">
                        <label>Post</label>
                        <input type="text"/>
                        <label>Type Fruit</label>
                  </div>
                  <button className="waves-effect white-text waves-light btn-large">Submit</button>
            </div>
      );
}