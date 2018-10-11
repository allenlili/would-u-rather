import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

const Rank = (props) => {
	const { classes, index, data } = props;
	return (
		<div className={classes.root}>
			<Paper className={classes.paper} elevation={10}>
				<div className={classes.avatar}>
					<Avatar src={require(`../images/avatar/${data.avatarURL}`)}
									style={{width: 100, height: 100, border: '1px solid #47b15e'}}/>
					{
						index === 0 ?
							<Avatar src={require(`../images/leaderboard/gold-medal.png`)} style={{width: 24, height: 24}}/> : null
					}
					{
						index === 1 ?
							<Avatar src={require(`../images/leaderboard/silver-medal.png`)} style={{width: 24, height: 24}}/> : null
					}
					{
						index === 2 ?
							<Avatar src={require(`../images/leaderboard/bronze-medal.png`)} style={{width: 24, height: 24}}/> : null
					}
				</div>
				<div className={classes.details}>
					<div className={classes.text} style={{height: '40%', fontSize: '30px'}}>
						{data.name}
					</div>
					<div className={classes.text} style={{height: '30%', fontSize: '17px'}}>
						<div style={{width: '80%'}}>Answered question:</div>
						<div style={{width: '20%', textAlign: 'right', marginRight: '5px'}}>{data.answeredLen}</div>
					</div>
					<div className={classes.text} style={{height: '30%', fontSize: '17px'}}>
						<div style={{width: '80%'}}>Created questions:</div>
						<div style={{width: '20%', textAlign: 'right', marginRight: '5px'}}>{data.createdLen}</div>
					</div>
				</div>
				<div className={classes.score}>
					<div className={classes.scoreArea}>
						<div className={classes.scoreText}>
							Score
						</div>
						<div className={classes.scoreDigit}>
							<div className={classes.circleDigitArea}>
								{data.answeredLen + data.createdLen}
							</div>
						</div>
					</div>
				</div>
			</Paper>
		</div>
	);
};

export default withStyles(styles)(Rank);
