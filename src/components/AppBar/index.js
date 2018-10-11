import React from 'react';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Modal from "@material-ui/core/Modal";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styles from './styles';

import { withRouter } from 'react-router-dom';

class HeaderBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalOpen: true,
			chosenUserId: '',
			open: false,
			vertical: 'bottom',
			horizontal: 'center',
		};
		this.handleModalClose = this.handleModalClose.bind(this);
		this.handleUserChange = this.handleUserChange.bind(this);
		this.signout = this.signout.bind(this);
	}

	handleModalClose = () => {
		if (this.state.chosenUserId === '') {
			this.setState({
				open: true
			});
			return;
		}
		this.setState({
			...this.state,
			modalOpen: false,
			chosenUserId: '',
			error: ''
		});
		const chosenUser = this.props.user.optionalUsers[this.state.chosenUserId];
		this.props.doUpdateChosenUser(chosenUser);
		this.props.doGetQuestionsAction(chosenUser);
		this.props.history.push('/unanswered');
	};

	handleUserChange = (e) => {
		this.setState({
			chosenUserId: e.target.value
		});
	};

	signout = () => {
		this.setState({
			modalOpen: true,
			chosenUserId: ''
		});
		this.props.doUpdateChosenUser(null);
		this.props.history.push('/');
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render () {
		const { classes } = this.props;
		const { optionalUsers, chosenUser } = this.props.user;
		const { vertical, horizontal, open } = this.state;
		return(
			<div className={classes.root}>
				<AppBar position="fixed" color="primary">
					<Toolbar>
						<Typography variant="title" className={classes.flex}>
							<Button variant="contained" color="primary" style={{fontSize: '20px', color: "#fff"}}>Would You Rather?</Button>
						</Typography>
						{
							chosenUser !== null ?
								(
									<div style={{display: 'flex'}}>
										<Typography variant="button" className={classes.button} style={{display: 'flex', alignItems: 'center'}}>
											Hello, {chosenUser.name} !
										</Typography>
										<Avatar src={require(`../images/avatar/${chosenUser.avatarURL}`)} />
										<Button variant="text" size="small" onClick={this.signout} className={classes.signOut}>Sign Out</Button>
									</div>
								) : null
						}
						{
							optionalUsers !== null ?
								<Modal
									aria-labelledby="simple-modal-title"
									aria-describedby="simple-modal-description"
									open={this.state.modalOpen}
								>
									<div style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className={classes.modal}>
										<div className={classes.header}>
											Welcome!
										</div>
										<div className={classes.content}>
											<div style={{height: '20%', paddingTop: '10px', fontWeight: 'bold'}}>
												Please choose a player.
											</div>
											<div style={{height: '35%', width: '100%'}}>
												<Select
													value={this.state.chosenUserId}
													onChange={this.handleUserChange} fullWidth>
													<MenuItem value="">
														<em>None</em>
													</MenuItem>
													{
														Object.keys(optionalUsers).map(userId => {
															return (
																<MenuItem key={userId} value={userId}>
																	<div className={classes.selected}>
																		<Avatar src={require(`../images/avatar/${optionalUsers[userId].avatarURL}`)}/>
																		<div className={classes.userName}>{optionalUsers[userId].name}</div>
																	</div>
																</MenuItem>
															)
														})
													}
												</Select>
											</div>
											<Button
												onClick={this.handleModalClose}
												variant="raised"
												className={classes.confirm}
												color="primary" fullWidth>Sign in</Button>
										</div>
									</div>
								</Modal> : null
						}
					</Toolbar>
				</AppBar>
				<Snackbar
					anchorOrigin={{ vertical, horizontal }}
					open={open}
					onClose={this.handleClose}
					ContentProps={{
						'aria-describedby': 'message-id',
					}}
					message={<span id="message-id">Select a player to continue!</span>}
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

const HeaderBarWithModal = withStyles(styles)(HeaderBar);

export default withRouter(HeaderBarWithModal);