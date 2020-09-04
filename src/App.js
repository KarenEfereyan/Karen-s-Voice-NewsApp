import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";

const alanKeyId =
  "e9da2f327508022e3b8190d645cafa212e956eca572e1d8b807a3e2338fdd0dc/stage";
const newsApiId = "";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([0]);
  useEffect(() => {
    alanBtn({
      key: alanKeyId,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>Alan News App</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
