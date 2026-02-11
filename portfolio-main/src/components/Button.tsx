import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
}: ButtonProps) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 cursor-pointer';

  const variants = {
    primary: 'bg-linear-to-r from-blue-500 via-purple-500 to-violet-600 dark:from-purple-400 dark:via-violet-400 dark:to-pink-500 text-white shadow-lg hover:shadow-xl dark:hover:shadow-purple-400/40 hover:scale-105',
    secondary: 'bg-linear-to-r from-violet-500 to-purple-500 dark:from-violet-400 dark:to-pink-400 text-white shadow-lg hover:shadow-xl hover:scale-105',
    outline: 'border-2 border-blue-500 dark:border-purple-400 text-blue-600 dark:text-purple-300 hover:bg-blue-50 dark:hover:bg-purple-950/30 hover:scale-105',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </motion.button>
  );
};
