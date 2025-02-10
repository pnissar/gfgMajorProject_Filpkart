import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <h6 className="text-secondary">ABOUT</h6>
            <ul className="list-unstyled">
              <li>
                <a href="" className="text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="" className="text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="" className="text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="" className="text-white">
                  Flipkart Stories
                </a>
              </li>
              <li>
                <a href="" className="text-white">
                  Press
                </a>
              </li>
              <li>
                <a href="" className="text-white">
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="text-secondary">GROUP COMPANIES</h6>
            <ul className="list-unstyled">
              <li>
                <a href="" className="text-white">
                  Myntra
                </a>
              </li>
              <li>
                <a href="" className="text-white">
                  Shopsy
                </a>
              </li>
              <li>
                <a href="" className="text-white">
                  Cleartrip
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="text-secondary">HELP</h6>
            <ul className="list-unstyled">
              <li>
                <a href="" className="text-white">
                  Payment
                </a>
              </li>
              <li>
                <a href="" className="text-white">
                  Shipping
                </a>
              </li>
              <li>
                <a href="" className="text-white">
                  Cancellation & Returns
                </a>
              </li>
              <li>
                <a href="" className="text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="text-secondary">CONSUMER POLICY</h6>
            <ul className="list-unstyled">
              <li>
                <a href="" className="text-white">
                  Cancellation & Returns
                </a>
              </li>
              <li>
                <a href="" className="text-white">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="" className="text-white">
                  Security
                </a>
              </li>
              <li>
                <a href="" className="text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="" className="text-white">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="" className="text-white">
                  EPR Compliance
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="text-secondary">Mail Us:</h6>
            <p className="small">
              Flipkart Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia & Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103, Karnataka, India
            </p>
          </div>
          <div className="col-md-2">
            <h6 className="text-secondary">Registered Office Address</h6>
            <p className="small">
              Flipkart Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia & Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103, Karnataka, India
              <br />
              CIN: U51109KA2012PTC066107
              <br />
              Telephone:{" "}
              <span className="text-primary">044-45614700 / 044-67415800</span>
            </p>
          </div>
        </div>
        <hr className="bg-secondary" />
        <div className="d-flex justify-content-center gap-4">
          <a href="" className="text-white">
            Become a Seller
          </a>
          <a href="" className="text-white">
            Advertise
          </a>
          <a href="" className="text-white">
            Gift Cards
          </a>
          <a href="" className="text-white">
            Help Center
          </a>
          <span className="text-white">&copy; 2007-2025 Flipkart.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
