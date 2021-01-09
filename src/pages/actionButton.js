import React, { useEffect, useRef, useState } from 'react'
import M from 'materialize-css'
import HeadButton from './headButton';

export default function ActionButton3() {
      const btn = useRef();
      const [pulse,setPulse] = useState(["btn-floating btn-large red", "btn-floating btn-large blue", "btn-floating btn-large"])
      const [count, setCount] = useState(0);
      useEffect(()=>{
            M.FloatingActionButton.init(btn.current, {
                  toolbarEnabled: true
            });
      }, [btn]);
      return(
            <div className="container">
                  <HeadButton name="Floating & fixed action buttons"/>
                  <a className={pulse[0]} onClick={()=>setPulse(old=>{
                        old[0] = "btn-floating btn-large pulse red"
                        setCount(old=>old+1);
                        return old;
                  })}><i className="large material-icons">add</i></a>
                  <a class={pulse[1]} onClick={()=>setPulse(old=>{
                        old[1] = "btn-floating btn-large pulse blue"
                        setCount(old=>old+1);
                        return old;
                  })}><i class="large material-icons">mode_edit</i></a>
                  <a class={pulse[2]} onClick={()=>setPulse(old=>{
                        old[2] = "btn-floating btn-large pulse green";
                        setCount(old=>old+1);
                        return old;
                  })}><i class="material-icons">publish</i></a>
                  <div class="fixed-action-btn toolbar" ref={btn}>
                        <a class="btn-floating btn-large red">
                              <i class="large material-icons">mode_edit</i>
                        </a>
                        <ul>
                              <li><a class="btn-floating"><i class="material-icons">insert_chart</i></a></li>
                              <li><a class="btn-floating"><i class="material-icons">format_quote</i></a></li>
                              <li><a class="btn-floating"><i class="material-icons">publish</i></a></li>
                              <li><a class="btn-floating"><i class="material-icons">attach_file</i></a></li>
                        </ul>
                  </div>
            </div>
      );
}