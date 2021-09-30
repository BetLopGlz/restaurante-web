import React from "react";
import Mains from "./componentesMenu/Mains";
import Extras from "./componentesMenu/Extras";
import Total from "./componentesMenu/Total";
import { Provider } from "./Context";
import { mains, sides, drinks } from "./data";

import "./menu.css";

export default function App() {
  return (
    <Provider>
      <div className="menu">
        
        <Mains meals={mains} />
        <aside className="aside">
          <Extras type="Sides" items={sides} />
          <Extras type="Drinks" items={drinks} />
        </aside>
        <Total />
      </div>
    </Provider>
  );
}