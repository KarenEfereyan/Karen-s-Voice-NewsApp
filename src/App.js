import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKeyId =
  "f30d8a13bdfeb1c03b8190d645cafa212e956eca572e1d8b807a3e2338fdd0dc/stage";
const newsApiId = "";

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKeyId,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("Alan Worked");
        }
      },
    });
  }, []);
  return (
    <div>
      <h1>Karen's Voice News App</h1>
    </div>
  );
};

export default App;
