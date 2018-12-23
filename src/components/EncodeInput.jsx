import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});

function Inputs(props) {
    const { classes, coderType, handleText, convertInput } = props;
    return (
        <div className={classes.container}>
            <Input
                placeholder={"Enter Text To " + coderType}
                className={classes.input}
                onChange={handleText}
                inputProps={{
                    'aria-label': 'Description',
                }}
            />
            <Button variant="contained" color="primary" onClick={() => convertInput("ayye")} className="button">
                Send
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                <Icon className={classes.rightIcon}>send</Icon>
            </Button>
        </div>
    );
}

Inputs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs);