'use client';
import React from 'react';
import './unique.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: 'beforeChildren',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Unique() {
  return (
    <motion.div
      className="hero-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="image-grid" variants={containerVariants}>
        <motion.div className="img-block large" variants={itemVariants}>
          <Image src="/j6.jpg" alt="Main Design" width={400} height={430} />
        </motion.div>

        <motion.div className="img-block small" variants={itemVariants}>
          <Image src="/j4.jpg" alt="Lamp Room" width={200} height={200} />
        </motion.div>

        <motion.div className="img-block medium" variants={itemVariants}>
          <Image src="/j5.jpg" alt="Stool" width={250} height={250} />
        </motion.div>
      </motion.div>

      <motion.div className="text-block" variants={containerVariants}>
        <motion.h2 variants={itemVariants}>
          We Help You Make Modern Interior Design
        </motion.h2>
        <motion.p variants={itemVariants}>
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
          nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
          velit imperdiet dolor tempor tristique. Pellentesque habitant morbi
          tristique senectus et netus et malesuada.
        </motion.p>
        <motion.ul className="feature-list">
          <motion.li variants={itemVariants}>
            Donec vitae odio quis nisl dapibus malesuada
          </motion.li>
          <motion.li variants={itemVariants}>
            Donec vitae odio quis nisl dapibus malesuada
          </motion.li>
          <motion.li variants={itemVariants}>
            Donec vitae odio quis nisl dapibus malesuada
          </motion.li>
          <motion.li variants={itemVariants}>
            Donec vitae odio quis nisl dapibus malesuada
          </motion.li>
        </motion.ul>
        <motion.button
          className="btn-custom w-100"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
