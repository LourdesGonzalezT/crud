import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';


function App() {

  const theme = 'dark'

  return (
    <div className="App">
      <Navigation theme={theme} />
      <AppRoutes />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
