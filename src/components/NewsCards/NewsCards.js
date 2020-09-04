import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from './styles.js';
import NewsCard from './NewsCard/NewsCard';

const NewsCards = ({articles, activeArticle }) => {

    //Allows us use css in js
const classes = useStyles();

//info cards show up first giving the user an idea of how to search for news
    const infoCards = [
        { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
        { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'What are the latest Business news' },
        { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'Give me the latest news on Bitcoin' },
        { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from BuzzFeed' },
      ];

//If we are unable to fetch the articles, do this.....    
    if(!articles.length){
       // console.log("Unable to fetch news! Try again!!");

        return(
            <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {infoCards.map((infoCard) => (
                <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                  <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                    <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                    {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                    <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grow>
        )
    }

    //else do this....

    return (
        <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {articles.map((article, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
              <NewsCard activeArticle={activeArticle} i={i} article={article} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
}

export default NewsCards
