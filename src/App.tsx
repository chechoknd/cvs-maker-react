import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { AtsOmarPage } from './pages/AtsOmarPage';
import { AtsPage } from './pages/AtsPage';
import { CvPage } from './pages/CvPage';
import { PortfolioPage } from './pages/PortfolioPage';

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/portfolio" replace />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="/ats" element={<AtsPage />} />
        <Route path="/ats-omar" element={<AtsOmarPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Route>
    </Routes>
  );
}
