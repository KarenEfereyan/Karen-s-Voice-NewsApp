import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKeyId =
  "e9da2f327508022e3b8190d645cafa212e956eca572e1d8b807a3e2338fdd0dc/stage";
const newsApiId = "";

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKeyId,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles);
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
