export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">TINY*HAUS</div>
        <nav>
          <a href="#">Модули</a>
          <a href="#">Комплектация</a>
          <a href="#">Галерея</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Получить КП</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ПРИВЕЗЛИ —
              <br />
              И <span>ЖИВЁШЬ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Готовые домики максимального автогабарита со всеми встроенными системами. Поставил, подключил к сетям — и заходи. Без стройки, без сюрпризов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Узнать стоимость
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть модули
              </button>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              backgroundImage: `url("https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/3e31ef64-8848-4fee-b046-4f646bd5eefd.jpg")`,
            }}
          >
            <div className="sticker">
              КЛЮЧИ
              <br />
              С ДОСТАВКОЙ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ТИНИХАУС
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ГОТОВО!
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ГОТОВ К ПРОЖИВАНИЮ * ВСЕ СИСТЕМЫ ВСТРОЕНЫ * МАКСИМАЛЬНЫЙ АВТОГАБАРИТ * ДОСТАВКА ПО ВСЕЙ СТРАНЕ * ДВУСКАТНАЯ КРЫША * МИНИ ЭНЕРГОБЛОК В КОМПЛЕКТЕ *
            ГОТОВ К ПРОЖИВАНИЮ * ВСЕ СИСТЕМЫ ВСТРОЕНЫ * МАКСИМАЛЬНЫЙ АВТОГАБАРИТ * ДОСТАВКА ПО ВСЕЙ СТРАНЕ * ДВУСКАТНАЯ КРЫША * МИНИ ЭНЕРГОБЛОК В КОМПЛЕКТЕ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАШИ МОДУЛИ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Все комплектации
            </a>
          </div>

          <div className="menu-grid">
            {/* Модуль 1 — Тини Хаус */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/3e31ef64-8848-4fee-b046-4f646bd5eefd.jpg"
                alt="Тини хаус двускатный"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Тини Хаус</h3>
                  <span className="price">от 1,9 млн</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Двускатная крыша, крылечко, встроенная мебель. Максимальный автогабарит — приезжает готовым к жизни.
                </p>
              </div>
            </div>

            {/* Модуль 2 — Энергоблок */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                В комплекте
              </span>
              <img
                src="https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/ca989f49-f180-4348-8ff1-b4acea5c0022.jpg"
                alt="Тини хаус сбоку"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Мини Энергоблок</h3>
                  <span className="price">в составе</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Отопление, горячая вода, электрощиток — всё в одном компактном блоке. Подключи к сетям и готово.
                </p>
              </div>
            </div>

            {/* Модуль 3 — Интерьер */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Под ключ
              </span>
              <img
                src="https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/87582658-bc6d-4ebd-8a12-07161bf3af6f.jpg"
                alt="Интерьер тини хаус"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Интерьер</h3>
                  <span className="price">всё включено</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Встроенная кухня, спальное место, хранение. Ничего докупать не нужно — заходи и живи.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">БЕЗ СТРОЙКИ. БЕЗ ХЛОПОТ.</h2>
            <p className="vibe-text">
              Мы производим домики полностью готовыми. Внутри уже всё: отопление, горячая вода, электрика, мебель. Вам остаётся только выбрать место, принять доставку и подключиться к внешним сетям. Никаких подрядчиков, никаких месяцев ожидания.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              О производстве
            </button>
          </div>
          <div
            className="vibe-img"
            style={{
              backgroundImage: `url("https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/1d8de4df-79db-4b56-8bdf-23af1701e822.jpg")`,
            }}
          ></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @TINY.HAUS
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/3e31ef64-8848-4fee-b046-4f646bd5eefd.jpg"
                alt="Тини хаус спереди"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/87582658-bc6d-4ebd-8a12-07161bf3af6f.jpg"
                alt="Интерьер"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/ca989f49-f180-4348-8ff1-b4acea5c0022.jpg"
                alt="Тини хаус сбоку"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/556d4070-61bc-4b31-a046-7ee5ce0e5d8a/files/1d8de4df-79db-4b56-8bdf-23af1701e822.jpg"
                alt="Тини хаус в лесу"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">TINY*HAUS</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Готовые модульные домики со всеми системами. Привезли — поставили — живёте.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Модули
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Комплектация
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Режим работы</h4>
          <ul>
            <li>Пн–Пт: 9:00 – 18:00</li>
            <li>Сб: 10:00 – 15:00</li>
            <li>Вс: выходной</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>+7 (000) 000-00-00</li>
            <li>info@tiny-haus.ru</li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}