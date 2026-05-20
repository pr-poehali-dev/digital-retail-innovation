import { useState } from "react";
import { Link } from "react-router-dom";

const EXTERIOR_IMAGES: { src: string; label: string }[] = [
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/a07c82cc-6a44-4156-9da2-94fa6fcf4d6f.jpg", label: "Свежеокультуренный участок" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/11711e97-671d-4b4c-84f7-754c4eecd183.jpg", label: "Лесная поляна" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/f6cef449-3577-43c5-b9c5-25e468ce81bd.jpg", label: "Закат" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/d7df6bed-9836-4a47-ae9a-96887f824c19.jpg", label: "Дождь" },
];

const INTERIOR_IMAGES: { src: string; label: string }[] = [
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/fcdcb66f-57ec-47c5-9700-86c9d6b94ba6.jpg", label: "Тамбур · Вход" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/e5339fce-2c4d-4f69-8334-92848eaf72d0.jpg", label: "Кухня-гостиная · Окна вдоль правой стены" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/77371525-72f2-433d-a042-554090472afc.jpg", label: "Гостиная · Вечерний свет" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/066b578f-eb0c-4653-9b6e-0235d22bf25e.jpg", label: "Спальня · Торцевое окно" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/6642e0ed-0d24-4c83-bb52-d664fb376d05.jpg", label: "Санузел · Левая стена" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/06f2fecc-a1f6-4503-bf1e-5625237fcd46.jpg", label: "Рабочая зона · Боковой свет" },
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