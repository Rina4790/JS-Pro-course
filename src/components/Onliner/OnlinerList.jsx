import { Onliner } from "./Onliner";
import { constOnliner } from "./onlinerConstans";

export const OnlinerList = () => {
  return constOnliner.map((card, index) => {
    return (
      <Onliner
        key={index}
        title={card.title}
        backgroundImageUrl={card.backgroundImageUrl}
        category={card.category}
        viewCount={card.viewCount}
      />
    );
  });
};
