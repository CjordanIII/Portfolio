import Interduction from './pages/Introduction';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Portfilio from './pages/Portfolio';
import AdditionalInfo from "./pages/AdditionalInfo";
import Resume from "./pages/Resume";
import NotFound from './pages/NotFound';
import background from "./assets/ps4Live/ps4Background.MP4"






function App() {

  // const urlPath = window.location.href.split('/').reverse()[0] use later


  return (
    <div className="App">
        <video src={background} autoPlay loop muted />
      <div className="AppContainer">
        <Routes>
          <Route path="/" element={<Interduction />} />
          <Route path="/portfolio" element={<Portfilio />} />
          <Route path="/portfolio/resume" element={<Resume />} />
          <Route
            path="/portfolio/additional-info"
            element={<AdditionalInfo />}
          />
          <Route path="/" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
