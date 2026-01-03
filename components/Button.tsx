import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ 
  href, 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  type = 'button'
}: ButtonProps) => {
  const baseStyles = 'inline-block font-medium rounded-full transition-all duration-200 text-center';
  
  const variants = {
    primary: 'bg-[#FF6B35] text-white hover:bg-[#e55f2f] shadow-md hover:shadow-lg',
    secondary: 'bg-[#0066CC] text-white hover:bg-[#0052a3] shadow-md hover:shadow-lg',
    outline: 'border-2 border-[#0066CC] text-[#0066CC] hover:bg-[#0066CC] hover:text-white',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }
  
  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;
