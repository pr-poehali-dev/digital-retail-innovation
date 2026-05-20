import { useState } from "react";
import { Link } from "react-router-dom";

const EXTERIOR_IMAGES: { src: string; label: string }[] = [
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/67623691-5f69-47f5-b1ed-7442ae18841c.jpg", label: "Бежевая обшивка · Вид спереди" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/181c0209-6090-4421-9ab0-ce25fae7d509.jpg", label: "Тёмный металл · Сосновый лес" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/a1df22e3-c8c1-4e37-9b68-8d4c71efe7b4.jpg", label: "Белая обшивка · Зима" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/ae263633-f9d3-47df-88d0-18f4cb79882f.jpg", label: "Кедр натуральный · Горный вид" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/214e2e00-5d1e-4c37-a03d-131d6c495d81.jpg", label: "Тёмно-зелёный · Осень" },
];

const INTERIOR_IMAGES: { src: string; label: string }[] = [
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/2a8e0278-7b21-4aae-a457-6d089ef4f1fc.jpg", label: "Гостиная · Светлое дерево" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/3a0b753b-fc58-41df-acc5-31a7b35066de.jpg", label: "Спальная зона · Встроенная кровать" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/5334812a-d8d6-4907-991c-5d66031ca4df.jpg", label: "Санузел · Минимализм" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/e6d4ca0d-6528-47b2-bf3e-6bcd67024ffe.jpg", label: "Кухня-столовая · Компактная планировка" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/ff030351-49cd-4a10-9e0b-e7f5b9a12bee.jpg", label: "Гостиная · Уют с камином" },
];

type Tab = "exterior" | "interior";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<Tab>("exterior");

  const images = activeTab === "exterior" ? EXTERIOR_IMAGES : INTERIOR_IMAGES;

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", fontFamily: "'Unbounded', sans-serif" }}>
      <header className="header">
        <Link to="/" className="logo" style={{ textDecoration: "none", color: "var(--dark)" }}>
          TINY*HAUS
        </Link>
        <nav>
          <a href="#">Модули</a>
          <a href="#">Комплектация</a>
          <Link to="/gallery" style={{ color: "var(--primary)", fontWeight: 800 }}>Галерея</Link>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Получить КП</button>
      </header>

      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px" }}>
        <h1
          style={{
            fontFamily: "'Unbounded', sans-serif",
            fontSize: "clamp(2rem, 6vw, 4rem)",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "var(--dark)",
            marginBottom: 12,
          }}
        >
          ГАЛЕРЕЯ
        </h1>
        <p style={{ color: "#666", fontSize: 16, marginBottom: 48 }}>
          Выбери понравившийся дизайн — его возьмём за основу
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 0, marginBottom: 48, border: "var(--border)", width: "fit-content" }}>
          {(["exterior", "interior"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "14px 32px",
                fontFamily: "'Unbounded', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                textTransform: "uppercase",
                border: "none",
                borderRight: tab === "exterior" ? "var(--border)" : "none",
                background: activeTab === tab ? "var(--dark)" : "white",
                color: activeTab === tab ? "white" : "var(--dark)",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {tab === "exterior" ? "Экстерьер" : "Интерьер"}
            </button>
          ))}
        </div>

        {/* Grid */}
        {images.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {images.map((img, i) => (
              <div
                key={i}
                style={{
                  border: "var(--border)",
                  boxShadow: "var(--shadow)",
                  background: "white",
                  overflow: "hidden",
                }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: "16px 20px", borderTop: "var(--border)" }}>
                  <span
                    style={{
                      fontFamily: "'Unbounded', sans-serif",
                      fontWeight: 700,
                      fontSize: 13,
                      textTransform: "uppercase",
                      color: "var(--dark)",
                    }}
                  >
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                style={{
                  border: "var(--border)",
                  boxShadow: "var(--shadow)",
                  background: "white",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    background: "#f0ede4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#aaa",
                    fontFamily: "'Unbounded', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                  }}
                >
                  Скоро
                </div>
                <div style={{ padding: "16px 20px", borderTop: "var(--border)" }}>
                  <span
                    style={{
                      fontFamily: "'Unbounded', sans-serif",
                      fontWeight: 700,
                      fontSize: 13,
                      textTransform: "uppercase",
                      color: "#bbb",
                    }}
                  >
                    {activeTab === "exterior" ? `Экстерьер ${i + 1}` : `Интерьер ${i + 1}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}