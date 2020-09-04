import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from './components/NewsCards/NewsCards';

//This allows me interact with my ALAN studio project
const alanKeyId =
  'e9da2f327508022e3b8190d645cafa212e956eca572e1d8b807a3e2338fdd0dc/stage'
const newsId='f28a3f24a9aa43c0bd5ef839bce4eb26';

const App = () => {
  // we will be setting the articles here
  const [newsArticles, setNewsArticles] = useState([]);

  //Once the  app component is loaded, I want to console log the gotten articles
  useEffect(() => {
    alanBtn({
      key: alanKeyId,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          //console.log('From the app component', articles);
        }
      },
    });
  }, []);

  return (
    <div>
    <h1 class="header">Get Your News Via Voice</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
