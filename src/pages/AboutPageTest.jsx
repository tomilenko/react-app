import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {}
});

class AboutPageTest extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <h1>About page test</h1>
      </div>
    );
  };
}

AboutPageTest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutPageTest);