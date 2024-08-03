import Image from "next/image";
import Link from "next/link";

const RegBanner = () => {
  const regBannerContent1 = [
    {
      id: 1,
      bgImage: `url("/images/index-13/banner/bg-1.png")`,
      name: "Nos evenements",
      text: `Ateliers, conférences, forum, webinaires.`,
      avatar: "/images/resource/employ.png",
      bannerClass: "banner-style-one",
      width: "221",
      height: "281",
    },
  ];
  const regBannerContent2 = [
    {
      id: 2,
      bgImage: `url("/images/index-13/banner/bg-2.png")`,
      name: "Créer votre profil",
      text: `Se rendre visible des recruteurs.`,
      avatar: "/images/resource/candidate.png",
      bannerClass: "banner-style-two dark",
      width: "207",
      height: "283",
    },
  ];
  return (
    <>
      {regBannerContent1.map((item) => (
        <div
          className={`${item.bannerClass} -type-2 col-lg-6 col-md-12 col-sm-12`}
          key={item.id}
        >
          <div
            className="inner-box"
            style={{
              backgroundImage: item.bgImage,
            }}
          >
            <div className="content">
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              <Link href="#" className="theme-btn btn-style-five">
                Nos evenements <i className="fas fa-arrow-right" style={{ marginLeft: '20px', fontSize: '1.2em' }}></i> 
              </Link>
            </div>
            <figure className="image">
              <Image
                width={item.width}
                height={item.height}
                src={item.avatar}
                alt="resource"
              />
            </figure>
          </div>
        </div>
      ))}
      {regBannerContent2.map((item) => (
        <div
          className={`${item.bannerClass} -type-2 col-lg-6 col-md-12 col-sm-12`}
          key={item.id}
        >
          <div
            className="inner-box"
            style={{
              backgroundImage: item.bgImage,
            }}
          >
            <div className="content">
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              <Link href="/register" className="theme-btn btn-style-five">
                Créer votre profil <i className="fas fa-arrow-right" style={{ marginLeft: '20px', fontSize: '1.2em' }}></i>
              </Link>
            </div>
            <figure className="image">
              <Image
                width={item.width}
                height={item.height}
                src={item.avatar}
                alt="resource"
              />
            </figure>
          </div>
        </div>
      ))}
    </>
  );
};

export default RegBanner;
