import { Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<div>Home</div>} />
      <Route path='*' element={<div>404</div>} />
    </Routes>
  );
};

export default AppRoutes;
