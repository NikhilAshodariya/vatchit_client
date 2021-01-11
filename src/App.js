import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <CustomNavbar changeActiveTab={true}/>
            <header className="App-header">
                <p>
                    <a href="">Welcome To VatChit</a>
                </p>
            </header>
        </div>
    );
}

export default App;
