import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles';
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from "@material-ui/core/Button";

import { withRouter } from 'react-router-dom';

class PollDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'optionOne'
		};
	}

	handleChange = (e, value) => {
		this.setState({
			value: value
		});
	};

	handleSubmit = () => {
		const answer = this.state.value;
		let authedUser = this.props.user.chosenUser.id;
		let qid = this.props.question.id;
		this.props.user.chosenUser.answers[qid] = answer;
		this.props.doSaveQuestionUserAction({authedUser, qid, answer});
		this.props.doGetQuestionsAction(this.props.user.chosenUser);
		this.props.history.push('/unanswered');
	};

	handleBackUnanswered = () => {
		this.props.history.push('/unanswered');
	};

	handleBackAnswered = () => {
		this.props.history.push('/answered');
	};

	render() {
		const { classes, question, user, categories } = this.props;
		const creator = user.optionalUsers[question.author].name;
		const avatar = user.optionalUsers[question.author].avatarURL;
		const { optionOne, optionTwo } = question;
		const optionOneText = optionOne.text;
		const optionTwoText = optionTwo.text;
		const optionOneVotes = optionOne.votes.length;
		const optionTwoVotes = optionTwo.votes.length;
		const totalVotes = optionOneVotes + optionTwoVotes;
		const optionOnePercentage = Math.floor(100 * optionOneVotes / totalVotes);
		const optionTwoPercentage = Math.floor(100 * optionTwoVotes / totalVotes);
		const answeredByUser = user.chosenUser.answers[question.id];
		const optionOneRemarks = `${optionOneVotes} out of ${totalVotes} votes`;
		const optionTwoRemarks = `${optionTwoVotes} out of ${totalVotes} votes`;
		let optionOneSpan = null, optionTwoSpan = null;
		if (answeredByUser === 'optionOne') {
			optionOneSpan = (<span className={classes.mark}>Your choice.</span>);
		} else {
			optionTwoSpan = (<span className={classes.mark}>Your choice.</span>);
		}
 		return (
 			<div className={classes.root}>
				<Paper elevation={24} className={classes.paper}>
					<div className={classes.pollHeader}>
						{
							`Asked by ${creator}`
						}
					</div>
					<div className={classes.pollContent}>
						<div className={classes.avatarArea}>
							<Avatar className={classes.bigAvatar} src={require(`../images/avatar/${avatar}`)} />
						</div>
						<div className={classes.questionArea}>
							{
								categories === 'unanswered' ?
									<div>
										<div style={{paddingLeft: '10px', paddingTop: '10px',fontSize: '20px'}}>Would you rather ?</div>
										<div>
											<FormControl component="fieldset" className={classes.formControl}>
												<RadioGroup
													name="answer"
													className={classes.group}
													value={this.state.value}
													onChange={this.handleChange}>
													<FormControlLabel value="optionOne" control={<Radio color="primary"/>}
																						label={(<div className={classes.label}>{optionOneText}</div>)}/>
													<FormControlLabel value="optionTwo" control={<Radio color="primary"/>}
																						label={(<div className={classes.label}>{optionTwoText}</div>)}/>
												</RadioGroup>
											</FormControl>
										</div>
										<div>
											<div style={{padding: '10px'}}>
												<Button style={{color: '#fff'}} onClick={this.handleSubmit} variant="raised" color="primary" fullWidth>
													Submit
												</Button>
											</div>
											<div style={{padding: '10px'}}>
												<Button style={{color: '#fff'}} onClick={this.handleBackUnanswered} variant="raised" color="primary" fullWidth>
													Back
												</Button>
											</div>
										</div>
									</div> : null
							}
							{
								categories === 'answered' ?
								<div>
									<div style={{paddingLeft: '10px', paddingTop: '10px', fontSize: '15px'}}>
										Result:
									</div>
									<div>
										<div className={classes.option}>
											<div className={classes.answerText}>
												Would you rather {optionOneText}?
												{optionOneSpan}
											</div>
											<div className={classes.optionRemarks}>{optionOneRemarks}</div>
											<div className={classes.container}>
												<div className={classes.votes} style={{width: `${optionOnePercentage}%`, backgroundColor: '#2fcfa9'}}>
													{optionOnePercentage}%
												</div>
											</div>
										</div>
										<div className={classes.option}>
											<div className={classes.answerText}>
												Would you rather {optionTwoText}?
												{optionTwoSpan}
											</div>
											<div className={classes.optionRemarks}>{optionTwoRemarks}</div>
											<div className={classes.container}>
												<div className={classes.votes} style={{width: `${optionTwoPercentage}%`, backgroundColor: '#2fcfa9'}}>
													{optionTwoPercentage}%
												</div>
											</div>
										</div>
										<div className={classes.backBtn}>
											<Button style={{color: '#fff', width: '90%'}}
															onClick={this.handleBackAnswered}
															variant="raised"
															color="primary" fullWidth>
												Back
											</Button>
										</div>
									</div>
								</div> : null
							}
						</div>
					</div>
				</Paper>
			</div>
		)
	}
}

export default withStyles(styles)(withRouter(PollDetail));
