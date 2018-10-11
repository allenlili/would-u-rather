import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Rank from '../../components/Rank/index';

import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import {doGetOptionalUsersAction} from "../../redux/user.redux";
import CircularProgress from "@material-ui/core/CircularProgress";

class LeaderBoard extends React.Component {

	componentDidMount() {
		this.props.doGetOptionalUsersAction();
	}

	render() {
		const { classes, user } = this.props;
		if (!user) {
			return (
				<div className={classes.root}>
					<CircularProgress className={classes.progress}/>
				</div>
			);
		}
		const { optionalUsers } = user;
		if (optionalUsers === null) {
			return null;
		}
		const users = Object.keys(optionalUsers);
		const dataByUsers = users.map(user => {
			return {
				id: optionalUsers[user].id,
				name: optionalUsers[user].name,
				avatarURL: optionalUsers[user].avatarURL,
				answeredLen: Object.keys(optionalUsers[user].answers).length,
				createdLen: optionalUsers[user].questions.length
			}
		});
		const sortedDataByUsers = dataByUsers.sort((u1, u2) => {
			return (u2.answeredLen + u2.createdLen) - (u1.answeredLen + u1.createdLen);
		});
		return (
			<div className={classes.listRoot}>
				<List>
					{
						sortedDataByUsers.map((data, index) => (
								<ListItem key={index} classes={{ root: classes.listItemRoot }}>
									<Rank index={index} data={data}/>
								</ListItem>
							)
						)
					}
				</List>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { user: state.user };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ doGetOptionalUsersAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LeaderBoard));
