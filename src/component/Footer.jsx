import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="text-center text-lg-start bg-body-tertiary text-muted container bg-success">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block fw-bold active text-dark">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4 active text-dark">
                  <i class="fas fa-gem me-3 "></i>PANTO.IO
                </h6>
                <p class="active text-dark">
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4 active text-dark">
                  Products
                </h6>
                <p>
                  <a href="#!" class=" active text-dark">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" class=" active text-dark">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" class=" active text-dark">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" class=" active text-dark">
                    Laravel
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class=" fw-bold mb-4 active text-dark">Useful links</h6>
                <p>
                  <a href="#!" class=" active text-dark">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" class=" active text-dark">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" class=" active text-dark">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" class=" active text-dark">
                    Help
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4 active text-dark">
                  Contact
                </h6>
                <p class="active text-dark">
                  <i class="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p class="active text-dark">
                  <i class="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p class="active  text-dark">
                  <i class="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p class="active text-dark">
                  <i class="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          class="text-center p-4 text-dark"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2025 Copyright:
          <a class="text-dark fw-bold" href="#">
            KRISHRAWAL.COM
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
