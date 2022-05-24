
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex align-center justify-between">
        <a href="https://sneakers-project.vercel.app/" className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p >Магазин лучших кроссовок</p>
          </div>
        </a>
        
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/bucket.svg" alt="Bucket" />
            <span>1205 грн.</span>
          </li>
          <li className="mr-30">
            <img width={21} height={19} src="/img/favorite.svg" alt="Favorite" />
          </li>
          <li>
            <img width={20} height={20} src="/img/profile.svg" alt="Profile" />
          </li>
        </ul>
      </header>
      <main>
        <section className="content p-40">
          <h1 className="mb-40">Все кроссовки</h1>

          <div className="sneakers d-flex justify-between">
            <div className="card">
                <div className="d-flex align-center justify-center">
                    <img width={133} height={112} src="/img/card.png" alt="Nike Blazer Mid Suede" />
                </div>
                
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                <div className="d-flex align-center justify-between">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>12 999 грн</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
                </div>
            </div>

            <div className="card">
                <div className="d-flex align-center justify-center">
                    <img width={133} height={112} src="/img/card2.png" alt="Nike Air Max 270" />
                </div>
                <h5>Мужские Кроссовки Nike Air Max 270</h5>
                <div className="d-flex align-center justify-between">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>12 999 грн</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
                </div>
            </div>

            <div className="card">
                <div className="d-flex align-center justify-center">
                    <img width={133} height={112} src="/img/card3.png" alt="Nike Blazer Mid Suede" />
                </div>
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                <div className="d-flex align-center justify-between">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>8 499 грн</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
                </div>
            </div>

            <div className="card">
                <div className="d-flex align-center justify-center">
                    <img width={133} height={112} src="/img/card4.png" alt="Puma X Aka Boku Future Rider" />
                </div>
                <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
                <div className="d-flex align-center justify-between">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>8 999 грн</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
