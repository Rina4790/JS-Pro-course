import { Card } from "../Card/Card";
import { cards } from "./constants";

export const CardList = () => {
  return cards.map((card, index) => {
    return (
      <Card
        key={index}
        name={card.name}
        place={card.place}
        image={card.image}
      />
    );
  });
};
