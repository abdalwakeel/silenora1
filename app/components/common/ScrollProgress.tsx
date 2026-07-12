'use client';

import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-20 right-0 left-0 h-[2px] bg-gradient-to-r from-[#b39964] via-[#e5d4b3] to-[#b39964] z-50 origin-right pointer-events-none"
      style={{ scaleX: scrollYProgress }}
    />
  );
}