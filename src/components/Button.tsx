import "../styles/Button.css";

type btnProps = {
  text: string;
  width: string;
  onClick?: () => void;
};

const Button = ({ text, width, onClick }: btnProps) => {
  return (
    <button
      className="custom-button"
      style={{ width: width }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
