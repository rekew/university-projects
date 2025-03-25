import "../styles/ProductCard.css";
import Button from "./Button";

type productProp = {
  image: string;
  description: string;
  onClick?: () => void;
};

const ProductCard = ({ image, description, onClick }: productProp) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt="Product" />
      </div>
      <p className="product-description">{description}</p>
      <Button text="Қарау" width="100%" onClick={onClick} />
    </div>
  );
};

export default ProductCard;
