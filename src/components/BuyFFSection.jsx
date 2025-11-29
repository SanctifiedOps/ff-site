import { useState } from "react";

const BuyFFSection = () => {
  const [showToast, setShowToast] = useState(false);

  const handleCopyCA = () => {
    navigator.clipboard.writeText("758yZPp2QEmrMgMACiUS2K2sTLsfSw9NprWoGxdxbonk");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1800);
  };

  return (
    <section id="buy" className="section section-buy">
      <div className="section-header">
        <p className="section-kicker">Buy $FF</p>
        <h2>Three steps to join the movement.</h2>
        <p className="section-subtitle">
          Always double-check contract addresses and only use funds you can afford to risk.
        </p>
      </div>

      <div className="grid grid-3">

        {/* STEP 1 */}
        <div className="card card-highlight">
          <span className="step-label">Step 1</span>
          <h3>Buy SOL in Phantom</h3>
          <p>
            Download the Phantom wallet, create a new wallet, and purchase SOL directly in-app
            or transfer from your exchange.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="card">
          <div className="step-label">Step 2</div>
          <h3>Paste the $FF contract</h3>
          <p>
            Go to your chosen DEX aggregator, paste the official $FF contract address,
            and double-check that the token name and logo match.
          </p>

          <div
            className="contract-pill"
            onClick={handleCopyCA}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            Copy CA
          </div>
        </div>

        {/* STEP 3 */}
        <div className="card card-highlight">
          <span className="step-label">Step 3</span>
          <h3>Hold your ticket to freedom</h3>
          <p>
            Confirm the swap, store your seed phrase offline, and plug into the community.
            Hold $FF, learn, build, and move step by step toward financial freedom.
          </p>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast">
          CA Copied ✔
        </div>
      )}
    </section>
  );
};

export default BuyFFSection;
