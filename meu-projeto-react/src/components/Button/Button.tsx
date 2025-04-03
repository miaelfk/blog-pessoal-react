import './Button.css';
interface ButtonProps {
    text: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outlined';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
  }
  
  function Button({ 
    text, 
    onClick, 
    variant = 'primary', 
    size = 'medium', 
    fullWidth = false 
  }: ButtonProps) {
    
    const getButtonClasses = () => {
      let classes = 'custom-button';
      
      // Adiciona classe de variante
      classes += ` button-${variant}`;
      
      // Adiciona classe de tamanho
      classes += ` button-${size}`;
      
      // Adiciona classe de largura total se necessário
      if (fullWidth) {
        classes += ' button-full-width';
      }
      
      return classes;
    };
    
    return (
      <button 
        className={getButtonClasses()} 
        onClick={onClick}
        type="button"
      >
        {text}
      </button>
    );
  }
  
  export default Button;  