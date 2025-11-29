// src/components/Navbar.jsx
import {useState} from "react";
import ffLogo from "../assets/ff-logo.png";

const CONTRACT_ADDRESS = "758yZPp2QEmrMgMACiUS2K2sTLsfSw9NprWoGxdxbonk";

const Navbar = () => {
  const [copied,setCopied] = useState(false);

  const handleScroll = (sectionId) => {
    const target = document.getElementById(sectionId);
    if(!target) return;

    const yOffset = -80; // small offset so section title is not hidden under navbar
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top:y,
      behavior:"smooth"
    });
  };

  const handleNavClick = (event,sectionId) => {
    event.preventDefault();
    handleScroll(sectionId);
  };

  const handleCopyCA = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      },1800);
    }).catch(() => {
      // fail silently for now
    });
  };

  const copyBtnStyle = {
    transition:"transform 0.18s ease, box-shadow 0.18s ease",
    ...(copied ? {
      boxShadow:"0 0 18px rgba(245,185,65,0.7)",
      transform:"translateY(-1px) scale(1.03)"
    } : {})
  };

  const toastStyle = {
    position:"fixed",
    top:"16px",
    left:"50%",
    transform:"translateX(-50%)",
    padding:"6px 14px",
    borderRadius:"999px",
    background:"rgba(0,0,0,0.9)",
    border:"1px solid rgba(245,185,65,0.6)",
    color:"#f7f7f7",
    fontSize:"0.78rem",
    letterSpacing:"0.08em",
    textTransform:"uppercase",
    zIndex:9999
  };

  return (
    <>
      {copied && (
        <div style={toastStyle}>
          Copied ✓
        </div>
      )}

      <nav className="navbar">
        <div className="navbar-left">
          <img src={ffLogo} alt="Financial Freedom" className="navbar-logo" />
          <div className="navbar-brand">Financial Freedom</div>
        </div>

        <div className="navbar-links">
          <a href="#about" onClick={(event) => handleNavClick(event,"about")}>
            About
          </a>
          <a href="#mission" onClick={(event) => handleNavClick(event,"mission")}>
            Mission
          </a>
          <a href="#media" onClick={(event) => handleNavClick(event,"media")}>
            Media
          </a>
          <a href="#links" onClick={(event) => handleNavClick(event,"links")}>
            Links
          </a>
        </div>

        <div className="navbar-actions">
          <button
            className="btn btn-secondary"
            onClick={handleCopyCA}
            style={copyBtnStyle}
          >
            Copy CA
          </button>

          <a
            className="btn btn-primary"
            href="https://bonk.fun/token/758yZPp2QEmrMgMACiUS2K2sTLsfSw9NprWoGxdxbonk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy $FF
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
