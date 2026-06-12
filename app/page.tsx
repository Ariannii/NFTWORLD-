export default function Home() {
  return (
    <main style={{
      background: "#0b0f1a",
      color: "white",
      minHeight: "100vh",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <h1>NFT WORLD</h1>
      <p>Multi-chain NFT Marketplace</p>

      <div style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #333",
        borderRadius: "10px"
      }}>
        <p>No NFTs yet</p>
      </div>
    </main>
  );
}
