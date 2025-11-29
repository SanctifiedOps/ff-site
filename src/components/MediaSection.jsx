import pic1 from "../assets/ff-pic (1).jpg";
import pic2 from "../assets/ff-pic (2).jpg";
import pic3 from "../assets/ff-pic (3).jpg";
import pic4 from "../assets/ff-pic (4).jpg";
import pic5 from "../assets/ff-pic (5).jpg";
import pic6 from "../assets/ff-pic (6).jpg";
import pic7 from "../assets/ff-pic (7).jpg";
import pic8 from "../assets/ff-pic (8).jpg";
import pic9 from "../assets/ff-pic (9).jpg";
import pic10 from "../assets/ff-pic (10).jpg";
import pic11 from "../assets/ff-pic (11).jpg";
import pic12 from "../assets/ff-pic (12).jpg";
import pic13 from "../assets/ff-pic (13).jpg";
import pic14 from "../assets/ff-pic (14).jpg";
import pic15 from "../assets/ff-pic (15).jpg";
import pic16 from "../assets/ff-pic (16).jpg";
import pic17 from "../assets/ff-pic (17).jpg";
import pic18 from "../assets/ff-pic (18).jpg";
import pic19 from "../assets/ff-pic (19).jpg";
import pic20 from "../assets/ff-pic (20).jpg";
import pic21 from "../assets/ff-pic (21).jpg";
import pic22 from "../assets/ff-pic (22).jpg";
import pic23 from "../assets/ff-pic (23).jpg";
import pic24 from "../assets/ff-pic (24).jpg";
import pic25 from "../assets/ff-pic (25).jpg";
import pic26 from "../assets/ff-pic (26).jpg";
import pic27 from "../assets/ff-pic (27).jpg";
import pic28 from "../assets/ff-pic (28).jpg";
import pic29 from "../assets/ff-pic (29).jpg";
import pic30 from "../assets/ff-pic (30).jpg";
import pic31 from "../assets/ff-pic (31).jpg";
import pic32 from "../assets/ff-pic (32).jpg";

const MediaSection = () => {
  const images = [
    pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8,
    pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16,
    pic17, pic18, pic19, pic20, pic21, pic22, pic23, pic24,
    pic25, pic26, pic27, pic28, pic29, pic30, pic31, pic32,
  ];

  // duplicate for seamless scroll
  const loopedImages = [...images, ...images];

  return (
    <section id="media" className="section section-media">
      <div className="section-header">
        <p className="section-kicker">Media</p>
        <h2>Moments from the movement.</h2>
        <p className="section-subtitle">
          A rolling gallery of visuals from the Financial Freedom community.
        </p>
      </div>

      <div className="media-scroller">
        <div className="media-track">
          {loopedImages.map((src, index) => (
            <div className="media-frame" key={index}>
              <img src={src} alt="" className="media-image" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
