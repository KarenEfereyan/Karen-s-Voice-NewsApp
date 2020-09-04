import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";
import NewsCard from "../NewsCard/NewsCard";

const NewsCards = ({ articles, i }) => {
  return (
    <div>
      {articles.map((article, i) =>(
        <NewsCard />
      )

      )}
    </div>
    // <div>
    //   <Grow in>
    //     <Grid container alignItems="stretch" spacing={3}>
    //       {articles.map((article, i) => {
    //         <Grid
    //           item
    //           xs={12}
    //           sm={6}
    //           md={4}
    //           lg={3}
    //           styles={{ display: "flex" }}
    //         ></Grid>;
    //       })}
    //     </Grid>
    //   </Grow>
    // </div>
  );
};

export default NewsCards;
