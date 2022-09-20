import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import {Routes,Route} from 'react-router-dom';
import { Spinner } from './components/Spinner';

import { Home } from './pages/Home';
import {Login} from './pages/Login'
import { Register } from './pages/Register';

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <div >
      {loading && <Spinner/>}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
