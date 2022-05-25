
function App() {
  return (
    <div className="wrapper clear">
        <div className="overlay">
            <aside className="drawer d-flex flex-column">
                <h2 className="mb-30">Корзина</h2>

                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div className="mr-20">
                            <img width={70} height={70} src="/img/card.png" alt="Nike Blazer Mid Suede" />
                        </div>
                        <div className="d-flex flex-column mr-10">
                            <p className="pb-10">Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 999 грн</b>
                        </div>
                        <div className="removeBtn">
                            <img width={32} height={32}src="/img/btn-cancel-hov.svg" alt="cancel item" />
                        </div>
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <div className="mr-20">
                            <img width={70} height={70} src="/img/card4.png" alt="Puma X Aka Boku Future Rider" />
                        </div>
                        <div className="d-flex flex-column mr-10">
                            <p className="pb-10">Кроссовки Puma X Aka Boku Future Rider</p>
                            <b>8 499 грн</b>
                        </div>
                        <div className="removeBtn">
                            <img width={32} height={32}src="/img/btn-cancel-hov.svg" alt="cancel item" />
                        </div>
                    </div>
                </div>

                <div className="cartTotalBlock">
                    <ul className="mb-25">
                        <li>
                            <span>Итого</span>
                            <div></div>
                            <b>21 498 грн</b>
                        </li>
                        <li>
                            <span>Налог 5%</span>
                            <div></div>
                            <b>1074 грн</b>
                        </li>
                    </ul>

                    <button className="greenButton">
                        <span>Оформить заказ</span>
                        <div>
                            <img width={14} height={12} src="/img/arrow-next.svg" alt="confirm order" />
                        </div>
                    </button>
                </div>
            </aside>
        </div>


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
            <div className="d-flex align-center justify-between mb-40">
                <h1>Все кроссовки</h1>
                <div className="search-block d-flex">
                <img src="/img/search.svg" alt="search icon" />
                <input type="text" placeholder="Поиск..."/>
                </div>
            </div>
            

            <div className="sneakers d-flex justify-between">
                <div className="card">
                    <div className="favorite">
                        <img width={32} height={32} src="/img/favorite-active.svg" alt="Add to favorites" />
                    </div>
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
                        <img width={32} height={32} src="/img/btn-plus.svg" alt="Plus" />
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
