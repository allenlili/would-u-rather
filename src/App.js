import React, { Component } from 'react';
import AppBar from './components/AppBar/index';
import { withStyles } from '@material-ui/core/styles';
import Main from './containers/Main/index';

import {Redirect, Route, Switch, withRouter} from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doGetOptionalUsersAction, doUpdateChosenUser } from "./redux/user.redux";
import { doGetQuestionsAction } from "./redux/question.redux";

const styles = {
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: '800px',
	}
};

class App extends Component {
	componentDidMount() {
		this.props.doGetOptionalUsersAction();
	}

  render() {
		const { classes } = this.props;
    return (
    	<div className={classes.root}>
				<AppBar user={this.props.user}
								doUpdateChosenUser={this.props.doUpdateChosenUser}
								doGetQuestionsAction={this.props.doGetQuestionsAction}/>
				{ this.props.user.chosenUser === null && this.props.location.pathname !== '/' ? <Redirect to="/"/> : null }
				<Switch>
					<Route path="/" exact component={Main}/>
					<Route path="/unanswered" exact component={Main}/>
					<Route path="/answered" exact component={Main}/>
					<Route path="/add" exact component={Main}/>
					<Route path="/leaderboard" exact component={Main}/>
					<Route path="/questions/:question_id" exact component={Main}/>
				</Switch>
			</div>
		)
  }
}

function mapStateToProps(state) {
	return { user : state.user, question: state.question }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ doGetOptionalUsersAction, doUpdateChosenUser, doGetQuestionsAction }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App)));
