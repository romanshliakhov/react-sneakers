function Card() {
    return (
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
    );
}

export default Card;


{/* <div className="card">
<div className="favorite">
    <img width={32} height={32} src="/img/favorite-default.svg" alt="Add to favorites" />
</div>
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
    <img width={32} height={32} src="/img/btn-add.svg" alt="add" />
</button>
</div>
</div>

<div className="card">
<div className="favorite">
    <img width={32} height={32} src="/img/favorite-default.svg" alt="Add to favorites" />
</div>
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
    <img width={32} height={32} src="/img/btn-plus.svg" alt="Plus" />
</button>
</div>
</div>

<div className="card">
<div className="favorite">
    <img width={32} height={32} src="/img/favorite-default.svg" alt="Add to favorites" />
</div>
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
    <img width={32} height={32} src="/img/btn-plus.svg" alt="Plus" />
</button>
</div>
</div> */}

