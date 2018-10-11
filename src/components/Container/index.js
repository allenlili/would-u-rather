import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Container = (props) => {
	const { classes } = props;
	return (
		<Paper elevation={15} className={classes.root} square={false}>
			{props.children}
		</Paper>
	)
};

export default withStyles(styles)(Container);
