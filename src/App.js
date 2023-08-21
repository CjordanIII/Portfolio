

import './App.css';
import background from "./assets/ps4Live/vecteezy_glitch-noise-static-television-vfx-visual-video-effects_11168860_209.mp4";
import AnimatedRouts from './components/AnimatedRouts'





function App() {
  return (
    <div className="App">
      <video src={background} autoPlay loop muted />
      <div className="AppContainer">
        <AnimatedRouts />
      </div>
    </div>
  );
}

export default App;
