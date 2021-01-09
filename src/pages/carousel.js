import React, { useEffect, useRef } from 'react'
import M from 'materialize-css'
import HeadButton from './headButton';

export default function Carousl() {
      const carousel = useRef();
      const fullImage = useRef();
      const colorButtons = useRef();
      useEffect(() => {
            M.Carousel.init(colorButtons.current, {
                  fullWidth: true,
                  indicators: true
            })
      }, [colorButtons])
      useEffect(() => {
            M.Carousel.init(fullImage.current, {
                  fullWidth: true,
                  indicators: true
            })
      }, [fullImage])
      useEffect(() => {
            M.Carousel.init(carousel.current, {
            })
      }, [carousel])
      return (
            <div className="container">
                  <HeadButton name="Carousel"/>
                  <div class="carousel" ref={carousel}>
                        <a class="carousel-item" href="#one!"><img src="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg" /></a>
                        <a class="carousel-item" href="#two!"><img src="https://therightsofnature.org/wp-content/uploads/2018/01/turkey-3048299_1920-1366x550.jpg" /></a>
                        <a class="carousel-item" href="#three!"><img src="https://www.universal-rights.org/wp-content/uploads/2019/09/30212411048_2a1d7200e2_z-1.jpg" /></a>
                        <a class="carousel-item" href="#four!"><img src="https://www.homecareinsight.co.uk/wp-content/uploads/2020/07/connected-technology.jpg" /></a>
                        <a class="carousel-item" href="#five!"><img src="https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05" /></a>
                  </div>
                  <br></br>
                  <div class="carousel carousel-slider" ref={fullImage}>
                        <a class="carousel-item" href="#one!"><img src="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg" /></a>
                        <a class="carousel-item" href="#two!"><img src="https://therightsofnature.org/wp-content/uploads/2018/01/turkey-3048299_1920-1366x550.jpg" /></a>
                        <a class="carousel-item" href="#three!"><img src="https://www.universal-rights.org/wp-content/uploads/2019/09/30212411048_2a1d7200e2_z-1.jpg" /></a>
                        <a class="carousel-item" href="#four!"><img src="https://www.homecareinsight.co.uk/wp-content/uploads/2020/07/connected-technology.jpg" /></a>
                        <a class="carousel-item" href="#five!"><img src="https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,g_auto/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05" /></a>
                  </div>
                  <br></br>
                  <div class="carousel carousel-slider center" ref={colorButtons}>
                        <div class="carousel-fixed-item center">
                              <a class="btn waves-effect white grey-text darken-text-2">button</a>
                        </div>
                        <div class="carousel-item red white-text" href="#one!">
                              <h2>First Panel</h2>
                              <p class="white-text">This is your first panel</p>
                        </div>
                        <div class="carousel-item amber white-text" href="#two!">
                              <h2>Second Panel</h2>
                              <p class="white-text">This is your second panel</p>
                        </div>
                        <div class="carousel-item green white-text" href="#three!">
                              <h2>Third Panel</h2>
                              <p class="white-text">This is your third panel</p>
                        </div>
                        <div class="carousel-item blue white-text" href="#four!">
                              <h2>Fourth Panel</h2>
                              <p class="white-text">This is your fourth panel</p>
                        </div>
                  </div>
                  <br></br>
            </div>
      );
}