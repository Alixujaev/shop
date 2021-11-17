import Footer from './components/Footer';
import Header from './components/Header'
import Main from './components/Main';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='app'>
      <ToastContainer/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
