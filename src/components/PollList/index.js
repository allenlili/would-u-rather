import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles';

import { withRouter } from 'react-router-dom';

class PollList extends React.Component {

	handleSwitch = (id) => {
		this.props.history.push(`/questions/${id}?categories=${this.props.categories}`);
		this.props.handleTabChange(null, this.props.categories, true);
	};

	render() {
		const { classes, question, user, categories } = this.props;
		const questions = question.questions;
		const users = user.optionalUsers;
		if (!user.chosenUser || !questions) {
			return (
				<div className={classes.root}>
					<CircularProgress className={classes.progress}/>
				</div>
			);
		}
		let result = categories === 'unanswered' ? question.unansweredQuestions : question.answeredQuestions;
		result = result.sort(function(q1, q2) {
			return questions[q2].timestamp - questions[q1].timestamp;
		});
		return (
			<div className={classes.root}>
				{
					result.length !== 0 ?
						<List className={classes.list}>
							{
								result.map(q => (
									<ListItem key={q}>
										<Paper elevation={24} className={classes.paper}>
											<div className={classes.pollHeader}>
												{
													`${users[questions[q].author].name} asks:`
												}
											</div>
											<div className={classes.pollContent}>
												<div className={classes.avatarArea}>
													<Avatar className={classes.bigAvatar} src={require(`../images/avatar/${users[questions[q].author].avatarURL}`)} />
												</div>
												<div className={classes.questionArea}>
													<div style={{padding: '10px'}}>Would you rather</div>
													<div style={{padding: '10px'}}>{questions[q].optionOne.text}...or...?</div>
													<div style={{padding: '10px'}}>
														<Button style={{color: '#fff'}}
																		variant="contained" color="primary"
																		onClick={this.handleSwitch.bind(this, q)} fullWidth>
															View Poll
														</Button>
													</div>
												</div>
											</div>
										</Paper>
									</ListItem>
								))
							}
						</List> : <div style={{fontSize: '50px', color: '#fff'}}>THAT's ALL!</div>
				}
			</div>
		)
	}
}

export default withStyles(styles)(withRouter(PollList));
