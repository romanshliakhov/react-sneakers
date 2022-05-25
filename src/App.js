import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


function App() {
  return (
    <div className="wrapper clear">
        <Drawer/>
        <Header/>
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
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </section>
        </main>
    </div>
  );
}

export default App;
