import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'default',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 md:px-4 md:py-2",
    md: "text-sm px-4 py-2 md:px-5 md:py-2.5",
    lg: "text-base px-5 py-2.5 md:px-6 md:py-3",
    xl: "text-lg px-6 py-3 md:px-8 md:py-4"
  };

  const variantStyles = {
    default: "bg-blue-900 hover:bg-blue-800 shadow-xl",
    outline: "border-2 border-blue-900 text-blue-900 hover:bg-blue-50 bg-transparent",
    ghost: "text-blue-900 hover:bg-blue-50 bg-transparent"
  };

  const widthStyles = fullWidth ? "w-full" : "";

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyles} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};