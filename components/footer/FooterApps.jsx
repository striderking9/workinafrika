import Image from "next/image";

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

        <div className="download-btns">
        <div className="text">Click and Get started in seconds</div>
        <a href="#">
          <Image
            width={100}
            height={60}
            src="/images/icons/apple-2.png"
            alt="icons"
          />
        </a>
        <a href="#">
          <Image
            width={100}
            height={60}
            src="/images/icons/google-2.png"
            alt="icons"
          />
        </a>
      </div>
      </div>
    </div>
  );
};

export default FooterApps;
