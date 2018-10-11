import React, {Component} from 'react';
import Container from '../../components/Container/index';
import {Tab, Tabs} from "@material-ui/core";
import LeaderBoard from "../../containers/LeaderBoard/index";
import NewPoll from "../NewPoll/index";
import Unanswered from "../Unanswered/index";
import Answered from "../Answered/index";
import { withStyles } from "@material-ui/core/styles";
import styles from './styles';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 'unanswered',
		};
	}

	handleChange = (event, value, poll) => {
		this.setState({ value });
		if (poll === true) {
			return;
		}
		this.props.history.push(`/${value}`);
	};

	checkToPoll = () => {
		const match = this.props.match;
		let path, poll, to;
		if (match && match.params && match.path) {
			path = match.path;
			if (path.match('/questions')) {
				poll = match.params.question_id;
			} else {
				poll = null;
			}
		}
		if (path && poll) {
			to = 'poll';
		} else {
			poll = null;
			to = 'list';
		}
		const { categories } = queryString.parse(this.props.location.search);
		return { to, poll, categories };
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;
		const toPollResult = this.checkToPoll();
		return (
			<div>
				<Container>
					<Tabs
						value={value}
						onChange={this.handleChange}
						indicatorColor="primary"
						fullWidth
						centered
						classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}>
						<Tab value="unanswered"
								 label="UNANSWERED QUESTIONS"
								 classes={{ root: classes.tabRoot, selected: classes.tabSelected }}/>
						<Tab value="answered"
								 label="ANSWERED QUESTIONS"
								 classes={{ root: classes.tabRoot, selected: classes.tabSelected }}/>
						<Tab value="add"
								 label="NEW QUESTION"
								 classes={{ root: classes.tabRoot, selected: classes.tabSelected }}/>
						<Tab value="leaderboard"
								 label="LEADER BOARD"
								 classes={{ root: classes.tabRoot, selected: classes.tabSelected }}/>
					</Tabs>
					{
						value === 'unanswered' && <Unanswered handleTabChange={this.handleChange} toPollResult={toPollResult}/>
					}
					{
						value === 'answered' && <Answered handleTabChange={this.handleChange} toPollResult={toPollResult}/>
					}
					{
						value === 'add' && <NewPoll handleTabChange={this.handleChange}/>
					}
					{
						value === 'leaderboard' && <LeaderBoard/>
					}
				</Container>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { user: state.user }
}

export default connect(mapStateToProps, null)(withRouter(withStyles(styles)(Main)));
