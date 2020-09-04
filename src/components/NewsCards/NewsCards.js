import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from './styles.js';

const NewsCards = ({articles}) => {
//allows us use css in js
    const classes = useStyles();
    console.log("From the news app component", articles);
    if(!articles.length){
        return(
            <h1>There are no news available</h1>
        )
    }

    return (
        <Grow in>
        <Grid className = {classes.container} container alignItems="stretch" spacing={3}>
          {articles.map((article, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <span>test</span>
              {/* <NewsCard activeArticle={activeArticle} i={i} article={article} /> */}
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
}

export default NewsCards
