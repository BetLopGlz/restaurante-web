import React from "react";
import Mains from "./componentesMenu/Mains";
import Extras from "./componentesMenu/Extras";
import Total from "./componentesMenu/Total";
import { Provider } from "./Context";
import { mains, entradas, bebidas } from "./data";

import "./menu.css";

export default function App() {
  return (
    <Provider>
      <div className="menu">
        
        <Mains meals={mains} />
        <aside className="aside">
          <Extras type="Entradas" items={entradas} />
          <Extras type="Bebidas" items={bebidas} />
        </aside>
        <Total />
      </div>
    </Provider>
  );
}