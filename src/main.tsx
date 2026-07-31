```tsx
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const shoes = [
  {
    name: "Custom Denim Adidas Superstar",
    price: "€146,99",
    image: "/images/custom denim adidas superstar foto 1.jpg",
  },
  {
    name: "Custom Camo Adidas Superstar",
    price: "€171,99",
    image: "/images/Custom Camo Adidas Superstar.jpg",
  },
  {
    name: "Custom Yellow Adidas Superstar",
    price: "€146,99",
    image: "/images/custom yellow adidas superstar limited edition foto 1.jpg",
  },
  {
    name: "Custom Denim Yellow Adidas Superstar",
    price: "€171,99",
    image: "/images/custom denim yellow adidas superstar foto 1.jpg",
  },
  {
    name: "Custom Denim Black Red Adidas Superstar",
    price: "€171,99",
    image:
      "/images/custom denim black red adidas superstar limited edition foto 1.jpg",
  },
];

const laces = [
  ["Fluffy White", "/images/fluffy veters wit.jpg"],
  ["Fluffy Pink", "/images/fluffy veters roze.jpg"],
  ["Fluffy Black", "/images/fluffy veters zwart.jpg"],
  ["White", "/images/veters wit.jpg"],
  ["Black", "/images/veters zwart.jpg"],
  ["Yellow", "/images/veters yellow.jpg"],
  ["Light Pink", "/images/veters licht roze.jpg"],
  ["Army Green", "/images/veters leger groen.jpg"],
];

function App() {
  const [page, setPage] = useState("home");

  const button = {
    background: "none",
    border: "none",
    color: "inherit",
    cursor: "pointer",
    fontSize: "13px",
    letterSpacing: "2px",
    textTransform: "uppercase" as const,
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          height: "80px",
          borderBottom: "1px solid #292929",
          display: "flex",
          alignItems: "center",
          padding: "0 5%",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => setPage("home")}
            style={{
              ...button,
              textAlign: "left",
              color: "#fff",
            }}
          >
            <strong
              style={{
                display: "block",
                fontSize: "24px",
                letterSpacing: "3px",
              }}
            >
              010.6643
            </strong>
            <span style={{ fontSize: "10px" }}>TRIPLE TREADZ</span>
          </button>

          <nav style={{ display: "flex", gap: "30px" }}>
            <button onClick={() => setPage("home")} style={button}>
              Home
            </button>
            <button onClick={() => setPage("shoes")} style={button}>
              Shoes
            </button>
            <button onClick={() => setPage("laces")} style={button}>
              Laces
            </button>
          </nav>
        </div>
      </header>

      {page === "home" && (
        <>
          <section
            style={{
              minHeight: "650px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div
              style={{
                backgroundImage:
                  "url('/images/Custom Camo Adidas Superstar.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "650px",
              }}
            />

            <div
              style={{
                background: "#000",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "8%",
              }}
            >
              <div
                style={{
                  color: "#aaa",
                  fontSize: "12px",
                  letterSpacing: "3px",
                  marginBottom: "20px",
                }}
              >
                TRIPLE TREADZ — ATELIER
              </div>

              <h1
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(42px, 5vw, 72px)",
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                Custom sneakers.
                <br />
                Made different.
              </h1>

              <p
                style={{
                  color: "#aaa",
                  maxWidth: "450px",
                  lineHeight: 1.7,
                  marginTop: "30px",
                }}
              >
                Hand-customized Adidas Superstars and unique laces,
                made with attention to every detail.
              </p>

              <div style={{ display: "flex", gap: "12px", marginTop: "30px" }}>
                <button
                  onClick={() => setPage("shoes")}
                  style={{
                    padding: "15px 24px",
                    background: "#fff",
                    color: "#000",
                    border: "1px solid #fff",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  SHOP SHOES
                </button>

                <button
                  onClick={() => setPage("laces")}
                  style={{
                    padding: "15px 24px",
                    background: "transparent",
                    color: "#fff",
                    border: "1px solid #fff",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  SHOP LACES
                </button>
              </div>
            </div>
          </section>

          <section style={{ padding: "80px 5%" }}>
            <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
              <div
                style={{
                  color: "#aaa",
                  fontSize: "12px",
                  letterSpacing: "3px",
                }}
              >
                FEATURED
              </div>

              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "42px",
                  marginTop: "10px",
                }}
              >
                Our sneakers
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "24px",
                  marginTop: "40px",
                }}
              >
                {shoes.map((shoe) => (
                  <div key={shoe.name}>
                    <div
                      style={{
                        background: "#161616",
                        aspectRatio: "1 / 1",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={shoe.image}
                        alt={shoe.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>

                    <h3 style={{ marginTop: "15px", fontSize: "15px" }}>
                      {shoe.name}
                    </h3>

                    <p style={{ color: "#aaa" }}>{shoe.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            style={{
              padding: "80px 5%",
              background: "#151515",
              borderTop: "1px solid #292929",
            }}
          >
            <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
              <div
                style={{
                  color: "#aaa",
                  fontSize: "12px",
                  letterSpacing: "3px",
                }}
              >
                LACES
              </div>

              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "42px",
                  marginTop: "10px",
                }}
              >
                Complete your pair
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "20px",
                  marginTop: "40px",
                }}
              >
                {laces.map(([name, image]) => (
                  <div key={name}>
                    <div
                      style={{
                        background: "#222",
                        aspectRatio: "1 / 1",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={image}
                        alt={name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>

                    <h3 style={{ fontSize: "14px", marginTop: "12px" }}>
                      {name}
                    </h3>

                    <p style={{ color: "#aaa" }}>€10,00</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {page === "shoes" && (
        <section style={{ padding: "80px 5%" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div
              style={{
                color: "#aaa",
                fontSize: "12px",
                letterSpacing: "3px",
              }}
            >
              SHOP
            </div>

            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "52px",
              }}
            >
              Custom Shoes
            </h1>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "24px",
                marginTop: "40px",
              }}
            >
              {shoes.map((shoe) => (
                <div key={shoe.name}>
                  <img
                    src={shoe.image}
                    alt={shoe.name}
                    style={{
                      width: "100%",
                      aspectRatio: "1 / 1",
                      objectFit: "cover",
                      background: "#161616",
                    }}
                  />
                  <h3>{shoe.name}</h3>
                  <p style={{ color: "#aaa" }}>{shoe.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page === "laces" && (
        <section style={{ padding: "80px 5%" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div
              style={{
                color: "#aaa",
                fontSize: "12px",
                letterSpacing: "3px",
              }}
            >
              SHOP
            </div>

            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "52px",
              }}
            >
              Laces
            </h1>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "20px",
                marginTop: "40px",
              }}
            >
              {laces.map(([name, image]) => (
                <div key={name}>
                  <img
                    src={image}
                    alt={name}
                    style={{
                      width: "100%",
                      aspectRatio: "1 / 1",
                      objectFit: "cover",
                      background: "#222",
                    }}
                  />
                  <h3>{name}</h3>
                  <p style={{ color: "#aaa" }}>€10,00</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer
        style={{
          borderTop: "1px solid #292929",
          padding: "40px 5%",
          color: "#777",
          textAlign: "center",
        }}
      >
        <strong style={{ color: "#fff" }}>010.6643 — TRIPLE TREADZ</strong>
        <p>Handmade in NL · © 2026 TripleThreadz</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
