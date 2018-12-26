import React from 'react'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    icon: {
        marginLeft: theme.spacing.unit,
    }
});

const Response = (props) => {
    const { textEncoded, textDecoded, classes, resetButton } = props
    return (
        <div className="response">
            <p>{textEncoded}</p>
            <p>{textDecoded}</p>
            <Button variant="contained" onClick={resetButton} size="large" className="button2">Reset  <ThreeSixtyIcon className={classes.icon} /></Button>
        </div>
    )
}

Response.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (Response)