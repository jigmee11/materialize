import React, { useEffect, useRef } from 'react'
import M from 'materialize-css'
import HeadButton from './headButton';

export default function ChipsPagination() {
      const chips = useRef();
      useEffect(()=>{
            M.Chips.init(chips.current,{
                  placeholder: "Enter Tag",
                  secondaryPlaceholder: "Add +",
                  autocompleteOptions: {
                        data:{
                              'Javascript' : null,
                              'HTML': null
                        },
                        limit: Infinity,
                        minLength: 1
                  }
            })
      },[chips]);
      return (
            <div className="container">
                  <HeadButton name={"Chips & Pagination"}/>
                  <br></br><br></br><br></br><br></br>
                  <div className="row">
                        <div class="chip">
                              <p>Web Development</p>
                        </div>
                        <div class="chip">
                              <p>Web design</p>
                        </div>
                        <div class="chip">
                              <p>Programming</p>
                        </div>
                  </div>
                  <div className="row">
                        <div class="chip">
                              Web Development
                              <i class="close material-icons">close</i>
                        </div>
                        <div class="chip">
                              Web design
                              <i class="close material-icons">close</i>
                        </div>
                        <div class="chip">
                              Programming
                              <i class="close material-icons">close</i>
                        </div>
                  </div>
                  <div className="row">
                        <div class="chip">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg" alt="Contact Person" />
                                    Elon Musk
                        </div>
                        <div class="chip">
                              <img src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455" alt="Contact Person" />
                                    Jeff Bezos
                        </div>
                        <div class="chip">
                              <img src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987" alt="Contact Person" />
                                    Bill Gates
                        </div>
                  </div>
                  <br></br>
                  <div className="chips chips-autocomplete" ref={chips}>
                  </div>
                  <br></br>
                  <ul class="pagination">
                        <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                        <li class="active"><a href="#!">1</a></li>
                        <li class="waves-effect"><a href="#!">2</a></li>
                        <li class="waves-effect"><a href="#!">3</a></li>
                        <li class="waves-effect"><a href="#!">4</a></li>
                        <li class="waves-effect"><a href="#!">5</a></li>
                        <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                  </ul>
            </div>
      );
}