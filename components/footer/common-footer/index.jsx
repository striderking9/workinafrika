
import FooterContent from "./FooterContent";

import Image from "next/image";
import CopyrightFooter from "./CopyrightFooter";
import FooterApps2 from "../FooterApps2";
import FooterContent3 from "../FooterContent3";
import SearchForm2 from "../SearchForm2";
import FooterApps from "../FooterApps";

const index = ({ footerStyle = "" }) => {
  return (
    <footer
      className="main-footer style-three"
      style={{ backgroundImage: "url(/images/background/3.png)" }}
    >
      <div className="auto-container">
        {/* <!--Widgets Section--> */}
        <div className="widgets-section" data-aos="fade-up">
          <div className="newsletter-form wow fadeInUp">
            <div className="sec-title light text-center">
              <h2>S'abonner à notre newsletter</h2>
              <div className="text">Nous n'envoyons pas de spam, ne vous inquiétez pas.</div>
            </div>
            <SearchForm2 />
          </div>
          {/* End .newsletter-form */}

          <div className="row">
            <div className="big-column col-xl-2 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
                <div className="logo">
                  <a href="#">
                    <Image
                    // Default 154, 50
                      width={180}
                      height={180}
                      src="/images/white.png"
                      alt="brand"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* End footer address left widget */}

            <div className="big-column col-xl-9 col-lg-9 col-md-12">
              <div className="row">
                <FooterContent3 />

                <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                  <div className="footer-widget">
                    <h4 className="widget-title"></h4>
                    <FooterApps />
                    
                  </div>
                </div>

                <div className="footer-column col-xl-3 col-md-6 col-sm-12">
                  <div className="footer-widget">
                    <h4 className="widget-title"></h4>
                    <FooterApps2 />
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End col-xl-8 */}

            
          </div>
        </div>
      </div>
      {/* End auto-container */}

      <CopyrightFooter />
      {/* <!--Bottom--> */}
    </footer>
  );
};

export default index;
