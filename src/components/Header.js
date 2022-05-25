function Header() {
    return (
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
    );
}

export default Header;