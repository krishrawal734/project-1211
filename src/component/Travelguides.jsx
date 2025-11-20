import React from 'react'

const Travelguides = () => {
  return (
    <>
    
    <div
        className="p-5 text-center bg-image container mb-5 d-flex flex-column justify-content-center align-items-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606819717115-9159c900370b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D')",
          height: "800px",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="mask">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="d-flex align-items-center fw-bold text-center text-black text-white "style={{ fontSize:"5rem"}}>
        Gallery our missions services
              </h1>
              <h2 className="mb-3 text-black text-white ">Travel photos reels and your movement</h2>
            </div>
          </div>
        </div>
      </div>
    
    





 <div class="container px-5 text-center">

  <p className="text-dark  fw-bold text-center mx-auto mb-5 " style={{ fontSize:"3rem"}}>PHOTO GRID (MASONARY)</p>
     <div class="row">
         <div class="col-md-4">
             <div class="content"> <a href="#">
                     <div class="content-overlay"></div> <img class="content-image" src="https://i.imgur.com/7cNRozs.jpg"/>
                     <div class="content-details fadeIn-bottom">
                        
                     </div>
                 </a> </div>
         </div>
         <div class="col-md-4">
             <div class="content"> <a href="#">
                     <div class="content-overlay"></div> <img class="content-image" src="https://i.imgur.com/CS59IJZ.jpg"/>
                     <div class="content-details fadeIn-bottom">
                         
                     </div>
                 </a> </div>
         </div>
         <div class="col-md-4">
             <div class="content"> <a href="#">
                     <div class="content-overlay"></div> <img class="content-image" src="https://i.imgur.com/LITAKvq.jpg"/>
                     <div class="content-details fadeIn-bottom">
                         
                     </div>
                 </a> </div>
         </div>
     </div>
 </div>
 

 <div class="container mb-5 mt-4 px-5 text-center">
     <div class="row">
         <div class="col-md-4">
             <div class="content"> <a href="#">
                     <div class="content-overlay"></div> <img class="content-image" src="https://i.imgur.com/7cNRozs.jpg"/>
                     <div class="content-details fadeIn-bottom">
                         
                     </div>
                 </a> </div>
         </div>
         <div class="col-md-4">
             <div class="content"> <a href="#">
                     <div class="content-overlay"></div> <img class="content-image" src="https://i.imgur.com/CS59IJZ.jpg"/>
                     <div class="content-details fadeIn-bottom">
                      
                     </div>
                 </a> </div>
         </div>
         <div class="col-md-4">
             <div class="content"> <a href="#">
                     <div class="content-overlay"></div> <img class="content-image" src="https://i.imgur.com/LITAKvq.jpg"/>
                     <div class="content-details fadeIn-bottom">
                        
                     </div>
                 </a> </div>
         </div>
     </div>
 </div>

    

 
    <div className="container">
       <p className="text-dark  fw-bold text-center mx-auto mb-5 " style={{ fontSize:"3rem"}}>VIDEO / REELS SECTION</p>

      <div className="row align-items-center">
        {/* First Card */}
        <div className="col-4">
          <div className="card" style={{ maxWidth: "18rem" }}>
            <video
              src="https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4"
              className="card-img-top"
              controls
            ></video>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col">
          <div className="card">
            <video
              src="https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4"
              className="card-img-top"
              muted
              autoPlay
              loop
            ></video>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="col-4">
          <div className="card" style={{ maxWidth: "18rem" }}>
            <div className="ratio ratio-16x9">
              <iframe
                width="1424"
                height="652"
                src="https://www.youtube.com/embed/NAMvdbS4lk4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row with Dark Card */}
      <div className="row align-items-center">
        <div className="col-12">
          <div className="card bg-dark text-white" style={{ maxWidth: "28rem" }}>
            <video
              src="https://codingyaar.com/wp-content/uploads/video-in-bootstrap-card.mp4"
              className="card-img-top"
              muted
              autoPlay
              loop
            ></video>
            <div className="card-img-overlay">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>








    

    </>
  )
}

export default Travelguides;
