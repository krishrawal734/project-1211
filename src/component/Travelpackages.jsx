import React from 'react'

const Travelpackages = () => {
  return (
    <>
     <div
        className="p-5 text-center bg-image container mb-5 d-flex flex-column justify-content-center align-items-center text-white "
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1752927968148-316122dafae8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D')",
          height: "800px",
          width: "100%",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover"
        
        }}
      >
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3 d-flex align-items-center fw-bold fs-1 text-black">Travel Packages</h1>
              <h4 className="mb-3  text-black">Choose Your Perfect Trip</h4>
              <div class="search-wrapper">
  <div class="search-bar">


    <input type="text" class="search-input" placeholder="Enter location..." />

   
    <select class="search-dropdown">
      <option value="">Select Category</option>
      <option value="hotels">Package type</option>
      <option value="restaurants">Duration</option>
      <option value="places">Tourist Places</option>
      <option value="transport">Budget</option>
    </select>

    <button class="search-btn">Search</button>

  </div>
</div>

            
              
            </div>
          </div>
        </div>
      </div>

<section className='container mb-5'>
   <div className="container  mt-4">
  <div className="text-center mb-5">
    <h3>Featured Properties</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

    <div className="btn-group" style={{ gap: "10px" }}>
      <button className="btn btn-outline-dark active rounded-pill">All Properties</button>
      <button className="btn btn-outline-dark rounded-pill">For Sale</button>
      <button className="btn btn-outline-dark rounded-pill">For Rent</button>
    </div>
  </div>
</div>

<div className="container w-100 feature-grid-row">
  <div className="row g-4">

    {/* CARD 1 */}
    <div className="col-md-4">
      <div className="card property-card">
        <div className="property-badge">
         
        </div>

        <img
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRoYWlsYW5kfGVufDB8fDB8fHww"
          className="card-img-top"
          alt="#"
          style={{ height: "350px", objectFit: "cover" }}
        />

        <div className="property-info">
          <h6 className="fw-bold">Thailand</h6>
          <p className="text-muted mb-1">
           5-days trip
          </p>
          <div className="d-flex justify-content-between text-muted">
            <h6 className="text-danger">$395,000</h6>
            <span><i className="bi bi-house-door"></i>4</span>
            <span><i className="bi bi-badge-wc"></i>1</span>
            <span><i className="bi bi-file-earmark"></i>400</span>
          </div>
        </div>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="col-md-4">
      <div className="card property-card">
        <div className="property-badge">
         
        </div>

        <img
          src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWNlfGVufDB8fDB8fHww"
          className="card-img-top"
          alt="#"
          style={{ height: "350px", objectFit: "cover" }}
        />

        <div className="property-info">
          <h6 className="fw-bold">Greece</h6>
          <p className="text-muted mb-1">
          7-days trip
          </p>
          <div className="d-flex justify-content-between text-muted">
            <h6 className="text-danger">$495,000</h6>
            <span><i className="bi bi-house-door"></i>4</span>
            <span><i className="bi bi-badge-wc"></i>1</span>
            <span><i className="bi bi-file-earmark"></i>400</span>
          </div>
        </div>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="col-md-4">
      <div className="card property-card">
        <div className="property-badge">
         
        </div>

        <img
          src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJhbmNlfGVufDB8fDB8fHww"
          className="card-img-top"
          alt="#"
          style={{ height: "350px", objectFit: "cover" }}
        />

        <div className="property-info">
          <h6 className="fw-bold">France</h6>
          <p className="text-muted mb-1">
            10-days trip
          </p>
          <div className="d-flex justify-content-between text-muted">
            <h6 className="text-danger">$595,000</h6>
            <span><i className="bi bi-house-door"></i>4</span>
            <span><i className="bi bi-badge-wc"></i>1</span>
            <span><i className="bi bi-file-earmark"></i>400</span>
          </div>
        </div>
      </div>
    </div>

    {/* CARD 4 */}
    <div className="col-md-4">
      <div className="card property-card">
        <div className="property-badge">
         
        </div>

        <img
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJhbmNlfGVufDB8fDB8fHww"
          className="card-img-top"
          alt="#"
          style={{ height: "350px", objectFit: "cover" }}
        />

        <div className="property-info">
          <h6 className="fw-bold">Italy</h6>
          <p className="text-muted mb-1">
            12-days trip
          </p>
          <div className="d-flex justify-content-between text-muted">
            <h6 className="text-danger">$695,000</h6>
            <span><i className="bi bi-house-door"></i>4</span>
            <span><i className="bi bi-badge-wc"></i>1</span>
            <span><i className="bi bi-file-earmark"></i>400</span>
          </div>
        </div>
      </div>
    </div>

    {/* CARD 5 */}
    <div className="col-md-4">
      <div className="card property-card">
        <div className="property-badge">
         
        </div>

        <img
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9uJTIwc2t5bGluZXxlbnwwfHwwfHx8MA%3D%3D"
          className="card-img-top"
          alt="#"
          style={{ height: "350px", objectFit: "cover" }}
        />

        <div className="property-info">
          <h6 className="fw-bold">London</h6>
          <p className="text-muted mb-1">
            15-days trip
          </p>
          <div className="d-flex justify-content-between text-muted">
            <h6 className="text-danger">$795,000</h6>
            <span><i className="bi bi-house-door"></i>4</span>
            <span><i className="bi bi-badge-wc"></i>1</span>
            <span><i className="bi bi-file-earmark"></i>400</span>
          </div>
        </div>
      </div>
    </div>

    {/* CARD 6 */}
    <div className="col-md-4">
      <div className="card property-card">
        <div className="property-badge">
         
        </div>

        <img
          src="https://images.unsplash.com/photo-1500990702037-7620ccb6a60a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlzcmFlbHxlbnwwfHwwfHx8MA%3D%3D"
          className="card-img-top"
          alt="#"
          style={{ height: "350px", objectFit: "cover" }}
        />

        <div className="property-info">
          <h6 className="fw-bold">Israel</h6>
          <p className="text-muted mb-1">
            20-days trip
          </p>
          <div className="d-flex justify-content-between text-muted">
            <h6 className="text-danger">$895,000</h6>
            <span><i className="bi bi-house-door"></i>4</span>
            <span><i className="bi bi-badge-wc"></i>1</span>
            <span><i className="bi bi-file-earmark"></i>400</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
</section>

    </>
  )
}

export default Travelpackages
