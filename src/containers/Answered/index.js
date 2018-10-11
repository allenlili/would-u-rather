import React from 'react';
import {Component} from 'react';
import PollList from "../../components/PollList/index";
import { withStyles } from "@material-ui/core/styles";
import styles from './styles';
import PollDetail from "../../components/PollDetail";

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { doGetOptionalUsersAction } from "../../redux/user.redux";
import { doGetQuestionsAction, doSaveQuestionUserAction } from "../../redux/question.redux";

class Answered extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: 'answered',
		};
	}

	componentDidMount(){
		this.props.doGetQuestionsAction(this.props.user.chosenUser);
	}

	handleChange = (event, value) => {
		this.setState({ categories : value });
		this.props.user.chosenUser && this.props.doGetQuestionsAction(this.props.user.chosenUser);
	};

	render() {
		const { user, question } = this.props;
		if (user.chosenUser === null) {
			return null;
		}
		const { to, poll } = this.props.toPollResult;
		const { categories } = this.state;
		const questions = question.questions;
		return (
			<div>
				{
					to === 'list' ?
						<PollList question={question}
											user={user}
											categories={categories} handleTabChange={this.props.handleTabChange}/> : null
				}
				{
					to === 'poll' ?
						<PollDetail question={questions[poll]}
												user={user}
												categories={categories}
												doSaveQuestionUserAction={this.props.doSaveQuestionUserAction}
												doGetQuestionsAction={this.props.doGetQuestionsAction}/> : null
				}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { user: state.user, question: state.question }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ doGetOptionalUsersAction, doGetQuestionsAction, doSaveQuestionUserAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(Answered)));