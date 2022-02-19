import Grid from '@material-ui/core/Grid';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
    grid: {
        padding: '0 15px !important'
    }
};

export default function GridItem(props) {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const { children, ...rest } = props;
    return (
        <Grid item {...rest} className={classes.grid}>
            {children}
        </Grid>
    );
}

GridItem.propTypes = {
    children: PropTypes.node
};
