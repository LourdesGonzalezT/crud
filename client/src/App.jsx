import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import { useContext } from 'react';
import { ThemeContext } from './context/theme.context';

function App() {

  const { theme } = useContext(ThemeContext)

  return (
    <div className="App" style={{ backgroundColor: theme === 'dark' ? 'black' : 'white' }}>
      <Navigation />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
