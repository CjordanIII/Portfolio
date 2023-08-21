import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0}}>
      <h1>OOps did something wrong</h1>
      <h3>
        <Link to="/">Home</Link>
      </h3>
    </motion.div >
  );
}
