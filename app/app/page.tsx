"use client";

import { useState } from "react";

export default function Home() {
  const [likes, setLikes] = useState<{ [key: number]: number }>({});

  const nfts = [
    { id: 1, name: "Cyber Ape", price: "0.5 ETH", img: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c" },
    { id: 2, name: "Neon Punk", price: "1.2 ETH", img: "https://images.unsplash.com/photo-1633189712230-24f1c8c1b6c3" },
    { id: 3, name: "AI Robot", price: "0.8 ETH", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995" },
    { id: 4, name: "Space Drip", price: "2.0 ETH", img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa" }
  ];

  const like = (id: number) => {
    setLikes(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  return (
    <main style={{
      background: "#0b0f1a",
      color: "white",
      minHeight: "100vh",
      padding: "30px",
      fontFamily: "Arial"
    }}>
      
      <h1 style={{ fontSize: "36px" }}>NFT WORLD 🚀</h1>
      <p style={{ opacity: 0.7 }}>Buy, Sell & Collect Digital Assets</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginTop: "30px"
      }}>
        {nfts.map(nft => (
          <div key={nft.id} style={{
            background: "#111827",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid #222"
          }}>
            <img src={nft.img} style={{ width: "100%", height: "150px", objectFit: "cover" }} />

            <div style={{ padding: "10px" }}>
              <h3>{nft.name}</h3>
              <p style={{ opacity: 0.7 }}>{nft.price}</p>

              <button
                onClick={() => like(nft.id)}
                style={{
                  marginTop: "10px",
                  padding: "6px 10px",
                  background: "#2563eb",
                  border: "none",
                  borderRadius: "6px",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                ❤️ Like ({likes[nft.id] || 0})
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
