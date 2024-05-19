import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import BannerComponent from './components/BannerComponent';
import MenuComponent from './components/MenuComponent';
import LocationComponent from './components/LocationComponent';
import HistoryComponent from './components/HistoryComponent';
import FooterComponent from './components/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div id="app">
        <NavbarComponent />
        <BannerComponent />
        <MenuComponent />
        <LocationComponent />
        <HistoryComponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
