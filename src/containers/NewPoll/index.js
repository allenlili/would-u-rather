import React from 'react';
import Paper from "@material-ui/core/Paper";
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Button from "@material-ui/core/Button";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {doGetQuestionsAction, doSaveQuestionAction} from "../../redux/question.redux";

class NewPoll extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			optionOne: '',
			optionTwo: '',
			open: false,
			vertical: 'center',
			horizontal: 'center',
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	};

	handleSubmit = () =>  {
		// { optionOneText, optionTwoText, author }
		const optionOneText = this.state.optionOne;
		const optionTwoText = this.state.optionTwo;
		const author = this.props.user.chosenUser.id;
		if ((!optionOneText || !optionTwoText) && optionOneText === optionTwoText) {
			this.setState({ open: true });
			return;
		}
		this.props.doSaveQuestionAction({ optionOneText, optionTwoText, author });
		this.props.handleTabChange(null, 'unanswered');
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes } = this.props;
		const { vertical, horizontal, open } = this.state;
		return (
			<div className={classes.root}>
				<Paper elevation={24} className={classes.paper}>
					<div className={classes.pollHeader}>
						Create New Question
					</div>
					<div className={classes.pollContent}>
						<div className={classes.text}>Would you rather ...</div>
						<div className={classes.input}>
							<Input name="optionOne" placeholder="option 1" fullWidth value={this.state.optionOne} onChange={this.handleChange}/>
						</div>
						<div className={classes.text}>OR</div>
						<div className={classes.input}>
							<Input name="optionTwo" placeholder="option 2" fullWidth value={this.state.optionTwo} onChange={this.handleChange}/>
						</div>
						<div style={{padding: '5px', width: '80%'}}>
							<Button style={{color: '#fff'}} onClick={this.handleSubmit} variant="contained" color="primary" fullWidth>
								Submit
							</Button>
						</div>
					</div>
				</Paper>
				<Snackbar
					anchorOrigin={{ vertical, horizontal }}
					open={open}
					onClose={this.handleClose}
					ContentProps={{
						'aria-describedby': 'message-id',
					}}
					message={<span id="message-id">field empty or same options</span>}
					action={[
						<IconButton
							key="close"
							aria-label="Close"
							color="inherit"
							className={classes.close}
							onClick={this.handleClose}>
							<CloseIcon />
						</IconButton>,
					]}
				/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { user: state.user, question: state.question }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ doGetQuestionsAction, doSaveQuestionAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(NewPoll)));
