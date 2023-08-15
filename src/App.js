import Interduction from './pages/Introduction';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Portfilio from './pages/Portfolio';
import AdditionalInfo from "./pages/AdditionalInfo";
import Resume from "./pages/Resume";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Interduction />} />
        <Route path="/portfolio" element={<Portfilio />} />
        <Route path="/portfolio/resume" element={<Resume />} />
        <Route path="/portfolio/additional-info" element={<AdditionalInfo />} />
      </Routes>
    </div>
  );
}

export default App;
