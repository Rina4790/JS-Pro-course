import { useState } from "react";

import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export const Form = () => {
  const [text, setText] = useState("");

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  const onClick = () => {
    setText("");
  };

  return (
    <div>
      <Input value={text} onChange={onChangeText} label="text" />
      <Button text={"Стереть все введенное"} onClick={onClick} />{" "}
    </div>
  );
};
