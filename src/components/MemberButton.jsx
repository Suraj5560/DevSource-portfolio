import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function MemberButton({ name, link }) {
  const isExternal = link.startsWith("http");

  if (isExternal) {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="member-btn"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 220 }}
      >
        {name}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 220 }}
    >
      <Link to={link} className="member-btn">
        {name}
      </Link>
    </motion.div>
  );
}
