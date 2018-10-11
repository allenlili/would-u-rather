const styles = theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#368e43',
		position: 'relative',
		padding: '15px',
		overflow: 'auto',
		height: '500px',
	},
	list: {
		width: '650px',
		height: '100%'
	},
	paper: {
		flexGrow: 1,
		border: '3px dashed #368e43',
	},
	pollHeader: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		borderBottom: '3px dashed #368e43',
		height: '40px',
		paddingLeft: '5px'
	},
	pollContent: {
		display: 'flex',
		height: '140px',
	},
	avatarArea: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '30%',
		borderRight: '3px dashed #368e43'
	},
	bigAvatar: {
		border: '3px dashed #368e43',
		width: 100,
		height: 100,
	},
	questionArea: {
		width: '70%',
	},
	progress: {
		top: '60%',
		left: '50%',
		margin: theme.spacing.unit * 2,
	},
});

export default styles;