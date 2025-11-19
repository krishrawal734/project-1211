import React from 'react'

const Home = () => {
  return (
    <>
    <div>

       <div
        id="carouselExampleIndicators"
        class="carousel slide container"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active position relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1710119487743-48959c984d45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww"
              class="img-fluid w-100"
              alt="..."
            />
            <div class="position-absolute top-0 start-0 w-100  carousel-caption d-none d-md-block text-center d-flex justify-content-center align-items-center align-content-center ">
              <h1 className="textsize">Welcome to our travel agency</h1>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                natus
              </p>
              <button type="button" class="btn btn-primary" data-mdb-ripple-init>book</button>
<button type="button" class="btn btn-secondary m-2 " data-mdb-ripple-init>get trip</button>

            </div>
          </div>
          <div class="carousel-item position relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1710119487428-9e82a8352e39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8"
              class="d-block w-100"
              alt="..."
            />
            <div class="position-absolute top-0 start-0 w-100  carousel-caption d-none d-md-block text-center d-flex justify-content-center align-items-center align-content-center ">
              <h5 className="textsize">Welcome to our travel agency</h5>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                natusposi
              </p>
              <button type="button" class="btn btn-primary m-2" data-mdb-ripple-init>book</button>
<button type="button" class="btn btn-secondary" data-mdb-ripple-init>get trip</button>

            </div>
          </div>
          <div class="carousel-item position relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1709772918719-057a3947cf2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
              class="d-block w-100"
              alt="..."
            />
            <div class="position-absolute top-0 start-0 w-100  carousel-caption d-none d-md-block text-center d-flex justify-content-center align-items-center align-content-center">
              <h5 className="textsize">Welcome to our travel agency</h5>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                natus
              </p><button type="button" class="btn btn-primary m-2" data-mdb-ripple-init>book</button>
<button type="button" class="btn btn-secondary" data-mdb-ripple-init>get trip</button>

              
            </div>
          </div>
        </div>
        
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </div>


   <main className="container py-5 mt-4">
        <h1 className="display-5 fw-bold mb-5 text-center">Popular Destinations</h1>
        <div className="row gap-6">
          
          <div className="col-md-4 ">
            <div className="card h-100 shadow">
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
