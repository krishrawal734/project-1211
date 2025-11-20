import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation,Pagination} from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
const Home = () => {
  return (
    <>

    <section className='container'>
   <Swiper    modules={[Autoplay,Navigation,Pagination]}  
      spaceBetween={50}
      pagination={true}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay
         loop
          navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
    >
      <SwiperSlide> <video class="img-fluid ravan  " style={{  }} autoPlay loop muted>
        <source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
      </video> 
       <div class="carousel-caption d-none d-md-block d-flex align-items-center justify-content fw-bold" style={{ height:"55%", fontSize:"4rem"}}>
        <p>Welcome to our travel agency</p>
        <h5>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </h5>
      </div>
    </SwiperSlide>  
     <SwiperSlide> <video class="img-fluid ravan" autoPlay loop muted>
        <source src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4" type="video/mp4" />
      </video> 
       <div class="carousel-caption d-none d-md-block d-flex align-items-center justify-content fw-bold" style={{ height:"55%", fontSize:"4rem"}}>
        <p>Welcome to our travel agency</p>
        <h5>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </h5>
      </div>
    </SwiperSlide>  
     <SwiperSlide> <video class="img-fluid ravan" autoPlay loop muted>
        <source src="https://mdbcdn.b-cdn.net/img/video/forest.mp4" type="video/mp4" />
      </video> 
       <div class="carousel-caption d-none d-md-block d-flex align-items-center justify-content fw-bold" style={{ height:"55%", fontSize:"4rem"}}>
        <p>Welcome to our travel agency</p>
        <h5>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </h5>
      </div>
    </SwiperSlide>
    {/* Navigation Buttons */}
      <div className="swiper-button-prev"> </div>
      <div className="swiper-button-next"></div>
     
    </Swiper>
 {/* Navigation Buttons */}
      <div className="swiper-button-prev"> </div>
      <div className="swiper-button-next"></div>

   <main className="container py-4 px-4 mt-4" >
        <h1 className="display-5 fw-bold mb-5 text-center">Popular Destinations</h1>
        <div className="row gap-6">
          
          <div className="col-md-4  ">
            <div className="card h-100 shadow " >
              <img
                src="https://images.unsplash.com/photo-1646470742514-b7f676c7110b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                alt="Web Development"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Dubai</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card’s content.
                </p>
                
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div className="card h-100 shadow">
              <img
                src="https://images.unsplash.com/photo-1616440347437-b1c73416efc2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="UI/UX Designer"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">London</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow">
              <img
                src="https://media.istockphoto.com/id/1337612033/photo/seo-search-engine-optimization-concept-for-promoting-ranking-traffic-on-website-optimizing.webp?a=1&b=1&s=612x612&w=0&k=20&c=dwVZEi78cxxga4acdsY8uE_W8o0wM4t9LXEyW0c4wi0="
                alt="SEO Development"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Paris</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

        </div>
      </main>
</section>
      
      
 <section class="container py-4">
      <div class="text-center mb-5">
        <h3 class="fw-bold">Expert Guides</h3>
        <p class="text-muted">Lorem, ipsum dolor sit amet adipisicing elit.</p>
      </div>

      <div class="row g-4">
        <div class="col-md-4">
          <div class="feature-box">
            <i class="bi bi-columns-gap"></i>
            <h5>Bes prices</h5>
            <p>
              We offer expert legal help for all related property item in dubai
            </p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="feature-box">
            <i class="bi bi-rss"></i>
            <h5>Safe travels</h5>
            <p>
              We offer expert legal help for all related property item in dubai
            </p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="feature-box">
            <i class="bi bi-shield-check"></i>
            <h5>Trusted By Thousands</h5>
            <p>
              We offer expert legal help for all related property item in dubai
            </p>
          </div>
        </div>
      </div>
    </section>
    

</>
  )
}

export default Home
