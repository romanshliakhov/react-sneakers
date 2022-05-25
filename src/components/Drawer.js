function Drawer() {
    return (
        <div className="overlay">
            <aside className="drawer d-flex flex-column">
                <h2 className="mb-30 d-flex justify-between">
                    Корзина
                    <div className="removeBtn cu-p">
                        <img width={32} height={32}src="/img/btn-cancel-hov.svg" alt="cancel item" />
                    </div>
                </h2>

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

    );
}

export default Drawer;