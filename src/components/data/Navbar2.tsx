// components/NavbarDrawer.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';
import Link from 'next/link';

const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const NavbarDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-800 text-white z-50"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center p-4 bg-gray-700">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button onClick={toggleDrawer} className="text-2xl">
                <IconX />
              </button>
            </div>
            <motion.ul
              className="mt-4 space-y-4 p-4"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.li
                variants={itemVariants}
                className="hover:bg-gray-600 p-4 rounded"
              >
                <Link href="/">
                  <span onClick={toggleDrawer} className="cursor-pointer">Home</span>
                </Link>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="hover:bg-gray-600 p-4 rounded"
              >
                <Link href="/about">
                  <span onClick={toggleDrawer} className="cursor-pointer">About</span>
                </Link>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="hover:bg-gray-600 p-4 rounded"
              >
                <Link href="/services">
                  <span onClick={toggleDrawer} className="cursor-pointer">Services</span>
                </Link>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="hover:bg-gray-600 p-4 rounded"
              >
                <Link href="/contact">
                  <span onClick={toggleDrawer} className="cursor-pointer">Contact</span>
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">MyApp</div>
        <div className="hidden md:flex flex-grow justify-around">
          <Link href="/about" className="hover:text-rose-700 transition duration-150">About</Link>
          <Link href="/services" className="hover:text-rose-700 transition duration-150">Services</Link>
          <Link href="/testimonials" className="hover:text-rose-700 transition duration-150">Testimonials</Link>
        </div>
        <div className="md:hidden flex-grow flex justify-center">
          <button
            onClick={toggleDrawer}
            className="bg-gray-700 p-2 rounded text-white focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50 transition duration-150 transform hover:scale-105"
          >
            {isOpen ? <IconX /> : <IconMenu2 />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavbarDrawer;
