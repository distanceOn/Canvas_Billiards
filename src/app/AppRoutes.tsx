import { Routes, Route } from 'react-router-dom';
import BilliardField from '../components/Main/Main';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<BilliardField />} />
      <Route path='*' element={<div>404</div>} />
    </Routes>
  );
};

export default AppRoutes;
