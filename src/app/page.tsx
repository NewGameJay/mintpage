import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="background-image" />
      <div className="background-overlay" />
      <header className="nav-header">
        <div className="nav-container">
          <div className="nav-logo">
            <Image src="/DarkTable_LOGO-KeyWhite.png" alt="Dark Table CCG" width={150} height={50} />
          </div>
          <div className="nav-spacer"></div>
          <button className="nav-button">Connect Wallet</button>
        </div>
      </header>
      <main className="container">
      {/* Hero Section */}
      <div className="hero"> 
        <h1 data-text="Under The Table Pass">Under The Table Pass</h1>
        <span>The best deals are made under the table, this pass gets you in on all of them.</span>
      </div> 

      {/* Mint Details */}
      <section className="mint-details">
        <h2>Under the Table Pass Collection</h2>
        <div className="mint-details-grid">
          <div className="mint-detail-item">
            <h3>Chain</h3>
            <p>Somnia Testnet (Shannon)</p>
          </div>
          <div className="mint-detail-item">
            <h3>Supply</h3>
            <p>1,007</p>
          </div>
          <div className="mint-detail-item">
            <h3>Mint Date</h3>
            <p>TBA</p>
          </div>
          <div className="mint-detail-item">
            <h3>Mint Price</h3>
            <p>FREE</p>
          </div>
        </div>
      </section>

      {/* Main Card */}
      <div className="card">
        {/* Wallet Connection */}
        <div style={{ marginBottom: '2.5rem' }}>
          <button className="button">
            <span>Check For Allowlist</span>
          </button>
        </div>

        {/* Status Cards */}
        <div>
          {/* Guaranteed */}
          <div className="status-card">
            <div className="status-card-header">
              <h3>The Chosen Ones (Guaranteed)</h3>
              <span className="status-badge">Divining...</span>
            </div>
            <p>Those marked by the elder signs, destined for the inner circle</p>
          </div>

          {/* FCFS Allowlist */}
          <div className="status-card">
            <div className="status-card-header">
              <h3>The Seekers (FCFS Allowlist)</h3>
              <span className="status-badge">Divining...</span>
            </div>
            <p>Those who dare to venture first into the unknown depths</p>
          </div>

          {/* Public */}
          <div className="status-card">
            <div className="status-card-header">
              <h3>The Masses (Public)</h3>
              <span className="status-badge">The Stars Are Not Right</span>
            </div>
            <p>When the stars align, all shall witness the great awakening</p>
          </div>
        </div>
      </div>

      {/* Game Description Section */}
      <section className="game-section">
        <div className="game-content">
          <h2 className="section-title">Dark Table CCG</h2>
          <p className="section-text">
            Welcome to the world&apos;s first Cross-Collectible (C2) Card Game: a free-to-play, 
            4-player strategic experience with a fully onchain, cross-platform economy and 
            1000s of items. Set in a grim Lovecraftian world, players form temporary 
            alliances and bluff their way to victory in a dark battle for survival.
          </p>
          <p className="section-text">
            Inspired by what card gamers truly want, Dark Table CCG features easier 
            deck-building, intense multiplayer chaos, and deep customization.
          </p>
        </div>
        <div className="game-media">
          <Image src="/gameplaygif.gif" alt="Dark Table CCG Gameplay" width={400} height={300} />
        </div>
      </section>

      {/* Holder Perks Section */}
      <section className="perks-section">
        <div className="perks-media">
          <Image src="/DarkTable_LOGO-KeyWhite.png" alt="Dark Table CCG Logo" width={400} height={200} />
        </div>
        <div className="perks-content">
          <h2 className="section-title">Holder Perks</h2>
          <ul className="section-text">
            <li>Exclusive Closed Beta Access</li>
            <li>Season Pass to earn World Chests</li>
            <li>Auto-WL for the high-utility Origin Key Collection</li>
            <li>Airdropped in-game Alpha Bundle</li>
          </ul>
        </div>
      </section>


    </main>
    </>
  )
}
