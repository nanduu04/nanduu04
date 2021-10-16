import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: 15,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  media: {
    height: 220,
  },
}));

export default function Projects() {
  const classes = useStyles();

  function FormRow() {
    return (
      <>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://vogro.ca/static/media/phone.db648981.png"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  VoGro
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Developed an app which connects people at- risk with
                  volunteers to deliver the groceries using Django, Flutter and
                  Firebase.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://vogro.ca"
                target="_blank"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://www.nepalcodes.com/img/undraw_pair_programming.svg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Nepal Codes
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A community for students where we collaborate with different
                  institutions to empower Nepalese worldwide with innovations in
                  technology.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://nepalcodes.com"
                target="_blank"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Social Find
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Created a Python crawler using Selenium that returns social
                  data of companies/brands that the user decides.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/nanduu04/SocialFind"
                target="_blank"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1577223664326-7840864a50f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Arsenal FC API
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Created a RESTful API that returns rich data about the
                  championship Arsenal FC team such as results, player details,
                  and more information.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/nanduu04/Arsenal-Fc-API"
                target="_blank"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Finance 101
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Created a stock analytic dashboard that re- turns data charts
                  and prices of all companies listed on NYSE using D3.js and
                  React.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/nanduu04/FINANCE_101"
                target="_blank"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://yugalkunj.org/images/logo.png"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Yugal Kunj
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Designed, developed and tested web-based backend applica-
                  tions to facilitate scalable front-end user interactions
                  through an API.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://yugalkunj.org/"
                target="_blank"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
