import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import HomeCards from '../components/HomeCards';
import HomeSearch from '../components/HomeSearch';

const styles = theme => ({
  root: {}
});

class HomePage extends React.Component {
  state = { 
    expanded: false,
    movies: []
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <HomeSearch />
        <HomeCards />
      </div>
    );
  };
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);