import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import { BlogPost } from './components/BlogPost';
import { Toast } from './components/ui/toast';

function App() {
  return (
    <Router>
      <Toast />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
