import { CardFB } from "../Card/CardFB";
import { cardsFB } from "./constantsFB";

export const CardListFB = () => {
  return cardsFB.map((card, index) => {
    return (
      <CardFB
        key={index}
        photo={card.photo}
        name={card.name}
        location={card.location}
        postDescription={card.postDescription}
        timeText={card.timeText}
      />
    );
  });
};
