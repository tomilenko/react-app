import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import tmdbService from '../services/tmdbService';

const styles = theme => ({
  root: {
    display: 'inline-block',
    margin: 'auto'
  },
  card: {
    maxWidth: 420,
    margin: 20,
    display: 'inline-block'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  description: {
    minHeight: 105
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class HomeCards extends React.Component {
  state = { 
    expanded: false,
    movies: []
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  componentDidMount = () => {
    tmdbService.discoverMovies().then(data => this.setState({ movies: data }));
    // this.setState(state => ({ movies: movies}));
  }

  render() {
    const { classes } = this.props;
    // let movies = this.topRatedFilms();
    console.dir(this.state.movies);
    return (
      <div className={classes.root}>
        {
          this.state.movies.map(
            (i) => {
              return (
                <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="Recipe" className={classes.avatar}>
                        {i.original_title.substring(0, 1)}
                      </Avatar>
                    }
                    action={
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={i.original_title}
                    subheader={i.release_date}
                  />
                  <CardMedia
                    className={classes.media}
                    image={"https://image.tmdb.org/t/p/w600_and_h900_bestv2"+ i.poster_path}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography component="p" className={classes.description}>
                      {i.overview.substring(0, 200)}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              );

            }
          )
        }
      </div>
    );
  }
}

HomeCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeCards);
