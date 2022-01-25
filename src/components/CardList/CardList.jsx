import { Card } from "../Card/Card";
import { cards } from "./constants";

export const CardList = () => {
  return cards.map((card, index) => {
    return (
      <Card
        key={index}
        title={card.title}
        subtitle={card.subtitle}
        author={card.author}
		 />
		
    );
  });
};
