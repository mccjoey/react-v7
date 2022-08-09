import React, { StrictMode } from "react";
import { render } from "react-dom";

import SearchParams from "./SearchParams.js";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>Adopt me!</h1>
        <SearchParams />
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
