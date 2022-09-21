import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import {Routes,Route} from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Spinner } from './components/Spinner';
import {PublicRoute} from './components/PublicRoute'
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
        <Route path='/' element={ <ProtectedRoute><Home /></ProtectedRoute>}/>
        <Route path='/register' element={<PublicRoute> <Register /> </PublicRoute>}/>
        <Route path='/login' element={ <PublicRoute><Login /></PublicRoute>}/>
      </Routes>
      
    </div>
  );
}

export default App;
