const socialIcons = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginBottom: '20px',
  fontSize: '32px', // Agrandissement des icônes
};

const FooterApps = () => {
  return (
    <div className="widget-content">
      <div className="download-btns">
        <div style={socialIcons}>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
        <a href="#" className="app-btn">
          <div className="app-icon">
            <i className="fab fa-apple"></i>
          </div>
          <div className="inner">
            <div className="sub">Download on the</div>
            <div className="name-app">Apple Store</div>
          </div>
        </a>
        <a href="#" className="app-btn">
          <div className="app-icon">
            <i className="fab fa-apple"></i>
          </div>
          <div className="inner">
            <div className="sub">Get in on</div>
            <div className="name-app">Google Play</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FooterApps;
