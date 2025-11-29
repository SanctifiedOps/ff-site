import ffLogo from "../assets/ff-logo.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="pill">Solana native • Community owned</p>
        <h1>Financial freedom is earned, not given.</h1>
        <p className="hero-subtitle">
          Financial Freedom is a Solana-born community for people who know they were
          meant for more than working, worrying, and hoping it all works out. We share
          ideas, accountability, and conviction so more of us can buy back our time.
        </p>

<div className="hero-actions">
  <a
    className="btn btn-primary"
    href="https://bonk.fun/token/758yZPp2QEmrMgMACiUS2K2sTLsfSw9NprWoGxdxbonk"
    target="_blank"
    rel="noopener noreferrer"
  >
    Buy $FF
  </a>

  <a
    className="btn btn-outline"
    href="https://x.com/i/communities/1994507546619736378"
    target="_blank"
    rel="noopener noreferrer"
  >
    Join the community
  </a>
</div>


        <p className="hero-note">
          No promises, no shortcuts, just a group of people serious about building lives
          they do not need a holiday from.
        </p>
      </div>

      <div className="hero-visual">
        <div className="hero-logo-wrapper">
          <div className="hero-logo-ring">
            <img
              src={ffLogo}
              alt="Financial Freedom logo"
              className="hero-logo-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
