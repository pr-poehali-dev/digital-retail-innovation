import { useState } from "react";
import { Link } from "react-router-dom";

const EXTERIOR_IMAGES: { src: string; label: string }[] = [
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/d889a955-bf52-4a31-b886-b4283e3cb09d.jpg", label: "Двутон · Горизонталь · Осенний лес" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/e9089876-2f30-474f-a0c0-7a5033c8ab65.jpg", label: "Двутон · Вид сзади · Берёзы" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/b07dcd82-ef3d-4579-91f5-6cc436486076.jpg", label: "Двутон · Крыльцо крупным планом · Клён" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/55b0946b-e753-4a23-83c4-4aab823376a9.jpg", label: "Двутон · Ночной вид · Гирлянды" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/dd4356fe-a919-49a7-a8f5-912393f17a3a.jpg", label: "Двутон · Снег · Хвойный лес" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/859e2ac7-f9ff-4c39-8dbb-3b9ddc19f053.jpg", label: "Двутон · Аэровид · Осеннее поле" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/6b2c59e3-1c3e-4219-97f8-cc9fcb1a2520.jpg", label: "Двутон · Навес сбоку · Терраса" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/61971609-74d8-439b-a219-1d99149317ca.jpg", label: "Двутон · Вертикальная доска · Дождь" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/5e6e7046-3d3c-4261-9a48-c827ae131bf7.jpg", label: "Двутон · Рифлёный металл · Сумерки" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/445ac619-7051-4bc6-b5a8-dd950779cfc2.jpg", label: "Двутон · Закат · Осень" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/68ff0d8d-0d30-4867-b2c5-de058d7a1926.jpg", label: "Двутон · Утренний туман · Сосны" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/b11532b2-f6ad-4e63-91d0-f5ab31613a56.jpg", label: "Двутон · Медные рамы · Утренняя роса" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/19d1fbf1-eca4-45a1-86a7-d3553d941f2a.jpg", label: "Двутон · Японский сад · Осень" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/407dd871-a1b3-48a5-85e9-6f0584e42bb2.jpg", label: "Двутон · Навес детально · Скамья" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/05c85661-0a48-4d83-8a98-ee8d4b3ff7d6.jpg", label: "Двутон · Поле · Летний день" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/252da8df-e7f6-47d1-9c78-156e5cf4cbad.jpg", label: "Двутон · Костёр на поляне · Закат" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/d00c294b-ef89-4d64-9b15-1400299f5836.jpg", label: "Двутон · Озеро · Отражение · Гамак" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/b69f984b-bf01-4419-a3ce-4475cc4845e3.jpg", label: "Двутон · Метель · Ели в снегу" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/2bd0c9ab-a9b5-4825-81fc-7178c921a216.jpg", label: "Двутон · Сакура · Весна" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/986d2007-b9e8-430e-bc9e-444c3f522f86.jpg", label: "Двутон · Горная долина · Золотая лиственница" },
];

const INTERIOR_IMAGES: { src: string; label: string }[] = [];

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
                color: activeTab === tab ? "white" : tab === "interior" ? "#aaa" : "var(--dark)",
                cursor: tab === "interior" ? "not-allowed" : "pointer",
                transition: "all 0.15s",
              }}
            >
              {tab === "exterior" ? "Экстерьер" : "Интерьер · Скоро"}
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