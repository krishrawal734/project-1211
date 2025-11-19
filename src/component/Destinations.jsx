import React from 'react'

const Destinations = () => {
  return (
    <>
      <div
        className="p-5 text-center bg-image container d-flex flex-column justify-content-center align-items-center text-white "
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1664539282461-9ff4d40e4a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyamtoYWxpZmF8ZW58MHx8MHx8fDA%3D')",
          height: "800px",
          width: "100%",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover"
        
        }}
      >
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3 d-flex align-items-center fw-bold fs-1">Explore Destinations</h1>
              <h4 className="mb-3  ">Find your perfect place to travel</h4>
            
              
            </div>
          </div>
        </div>
      </div>


      <section class=" mt-4 mb-5 container">
  <h2 class=" text-center me-2 ms-2 mb-3 fw-bold">Popular locations</h2>
      <p class="subtitle text-center ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi labore
        ipsam natus quae, dolor aliquam!
      </p>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title">Australia</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
     
       
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title">America</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
   
       
     
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body">
        <h5 class="card-title">Russia</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to show
          that equal height action.
        </p>
      </div>
    
       
      
    </div>
  </div>
</div>

 </section>

<section className='mt-4 mb-5 container'>
 <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://images.unsplash.com/photo-1738349244706-d88be87f5130?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8" class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title">Sydney</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
     
       
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://images.unsplash.com/photo-1728260333610-8f34bef31f08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"/>
      <div class="card-body">
        <h5 class="card-title">Paris</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
   
       
     
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://images.unsplash.com/photo-1477173860144-6f21cf27086a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body">
        <h5 class="card-title">Canada</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to show
          that equal height action.
        </p>
      </div>
    
       
      
    </div>
  </div>
</div>
</section>


   <section className="contact-section container">
        <h1 className=" react">Get in touch</h1>
        <div className="row">
          <div className="box">
            <h2>Our Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3671.9407782223125!2d72.5572811743678!3d23.025946566204052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slaw%20garden!5e0!3m2!1sen!2sin!4v1755591774798!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>

          <div className="box">
            <h2>Contact Information</h2>
            <p>
              <strong>Address:</strong> Travels.io, Ahmedabad, India
            </p>
            <p>
              <strong>Email:</strong> info@website.com
            </p>
            <p>
              <strong>Phone:</strong> +91 9076590348
            </p>
            <p>
              <strong>Hours:</strong> Mon–Sat, 9am – 6pm
            </p>
          </div>
        </div>

      
      </section>

    </>
  )
}

export default Destinations
