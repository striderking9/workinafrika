import Image from "next/image";

const FooterApps2 = () => {
  return (
    <div className="widget-content">
      <div className="download-btns">
        <div className="text"> "Vous avez une question?"</div>
        <a href="#" className="app-btn" style={{backgroundColor: "#F9AB00"}}>
          <div className="app-icon">
            <i className="fa fa-phone"></i>
          </div>
          <div className="inner">
            <div className="name-app">Contactez-nous</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FooterApps2;
