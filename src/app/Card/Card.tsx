"use client";

import { useState } from "react";
import "./card.css";
import custom from "./custom.module.css";
import clsx from "clsx";

export default function Card() {
  const [toggle, setToggle] = useState<boolean>(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={clsx("card", {
        [custom.card_custom]: toggle,
      })}
      onClick={handleToggle}
    >
      Card
    </div>
  );
}
