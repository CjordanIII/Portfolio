import Interduction from "../pages/Introduction";
import { Route, Routes,useLocation} from "react-router-dom";
import Portfilio from "../pages/Portfolio";
import AdditionalInfo from "../pages/AdditionalInfo";
import Resume from "../pages/Resume";
import NotFound from "../pages/NotFound";

import {AnimatePresence} from 'framer-motion' 



export default function AnimatedRouts() {
    const location = useLocation()
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Interduction />} />
          <Route path="/portfolio" element={<Portfilio />} />
          <Route path="/portfolio/resume" element={<Resume />} />
          <Route path="/portfolio/additional-info" element={<AdditionalInfo />}/>
          <Route path="/" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
