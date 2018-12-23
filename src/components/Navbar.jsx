import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        flexGrow: 1,
    },
};

function SimpleAppBar(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" className="navbar">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Cakes Encoder .-...-.- <span role="img">🍰</span>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);