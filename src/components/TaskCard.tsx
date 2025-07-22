'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const TaskCard = ({ task }: { task: { title: string } }) => {
  const [checked, setChecked] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`p-4 rounded-2xl shadow-sm bg-muted/60 dark:bg-muted/40 border border-gray-200 flex items-center gap-3 cursor-pointer group transition-colors duration-200`}
    >
      <motion.input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        whileTap={{ scale: 0.9 }}
        className="accent-green-500 h-5 w-5 rounded transition"
      />

      <motion.p
        layout
        animate={{
          opacity: checked ? 0.5 : 1,
          textDecoration: checked ? 'line-through' : 'none',
        }}
        transition={{ duration: 0.3 }}
        className="text-sm font-medium text-gray-800"
      >
        {task.title}
      </motion.p>
    </motion.div>
  );
};
