import { useState } from "react";
import { Link } from "react-router-dom";

const EXTERIOR_IMAGES: { src: string; label: string }[] = [
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/727b1628-a192-4257-a477-a017e635126c.jpg", label: "Оливковый · Горизонтальная обшивка" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/8c2dbf9d-60bc-49e2-9b75-2c73296c5d17.jpg", label: "Лесной зелёный · Вид сзади справа" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/5a4e3c0d-7c19-4076-9e76-de8c6f7a5bb3.jpg", label: "Бутылочный зелёный · Вертикальная доска" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/0c6b7603-0ce0-4fb2-b80c-6d4be683196a.jpg", label: "Тёмный хантер · Фиброцемент · Туман" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/2835533a-0b02-4697-ac1b-7aec9a4694a7.jpg", label: "Ночной вид · Тёмный зелёный" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/6c9f8337-ef1d-4c39-b042-0ceb8e5a5af7.jpg", label: "Шалфейный · Вид с высоты" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/8986ed14-3dac-4d12-bc0f-9955b7cadf31.jpg", label: "Зелёный · Крыльцо крупным планом" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/3c886016-9f99-4995-82d1-d47489de58ee.jpg", label: "Зелёный + чёрный двухтон · Снег" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/76d8941c-fe37-4a1f-965f-87e4b57c4458.jpg", label: "Военный олив · Рифлёный металл" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/331b9103-8d9c-4de9-887f-4287fd6d963d.jpg", label: "Тёмный зелёный + белый кант · Лето" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/066dd8c6-87f1-421d-87fd-f85f29456a9c.jpg", label: "Зелёная штукатурка · Скандинавия" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/f3d8ca0f-4d72-485a-966a-2e0b8c23cfc4.jpg", label: "Зелёный + серое дерево · Закат у озера" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/a18c809a-1392-45bd-9559-aa215fa0f90f.jpg", label: "Угольный зелёный · Пиленая доска · Дождь" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/8553aef6-37a9-48c3-b536-9f14003bbc2a.jpg", label: "Гоночный зелёный · Японский минимализм" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/8cf81e1f-d7ce-4c11-b6da-45f0654c195a.jpg", label: "Зелёный + выветренный кедр · Аэровид" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/72212611-f57b-477e-b8f0-a8d4d5b98244.jpg", label: "Тёмный зелёный · Вертикаль + снег" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/05cc5bd9-cd38-42d5-9992-7608263d2910.jpg", label: "Зелёный · Вечерние огни · Гирлянды" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/20014f3f-948c-48cb-adf8-490d7aeab597.jpg", label: "Зелёный + кортен сталь · Индастриал" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/14ef95a9-5b12-483c-b300-89a9e0c343c7.jpg", label: "Зелёный + серый кант · Дрон · Поле" },
  { src: "https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/785f912e-30c0-42f0-942a-0a88aa1fa151.jpg", label: "Приглушённый зелёный · Терракота · Осень" },
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