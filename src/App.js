
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between">
        <a href="https://sneakers-project.vercel.app/" className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </a>
        
        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/img/bucket.svg" alt="Bucket" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={21} height={19} src="/img/favorite.svg" alt="Favorite" />
          </li>
          <li>
            <img width={20} height={20} src="/img/profile.svg" alt="Profile" />
          </li>
        </ul>
      </header>
      <main>
        <section className="content">
          <h1>Кроссовки</h1>
          ...
        </section>
      </main>
    </div>
  );
}

export default App;
