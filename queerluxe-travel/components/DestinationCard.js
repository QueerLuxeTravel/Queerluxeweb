import styles from '../styles/DestinationCard.module.css';

const DestinationCard = ({ name, description, imageUrl }) => {
  return (
    <div className={}>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default DestinationCard;
