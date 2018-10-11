import { _getQuestions, _saveUserByNewQuestion, _saveQuestionAnswer } from "../_DATA";

// define actions
const GET_QUESTIONS = 'get_questions';
const SAVE_QUESTION_ANSWER = 'save_question_answer';
const SAVE_QUESTION = 'save_question';

// create actions
function getQuestionsAction(data) {
	return {
		type: GET_QUESTIONS,
		payload: data
	}
}

function saveQuestionUserAction(data) {
	return {
		type: SAVE_QUESTION_ANSWER,
		payload: data
	}
}

function saveQuestionAction(data) {
	return {
		type: SAVE_QUESTION,
		payload: data
	}
}

// do actions
export function doGetQuestionsAction(chosenUser) {
	return dispatch => {
		_getQuestions().then(resp => {
			if (chosenUser === null) {
				return;
			}
			const {unansweredQuestions, answeredQuestions, questions} = classify(resp, chosenUser);
			dispatch(getQuestionsAction({ unansweredQuestions: unansweredQuestions, answeredQuestions: answeredQuestions, questions: questions }));
		}).catch(err => {
			console.log(err);
		});
	}
}

export function doSaveQuestionUserAction(data) {
	return dispatch => {
		_saveQuestionAnswer(data)
			.then(resp => {
				dispatch(saveQuestionUserAction(data));
			}).catch(err => {
				console.log(err);
		})
	};
}

export function doSaveQuestionAction(data) {
	// data = { optionOneText, optionTwoText, author }
	return dispatch => {
		_saveUserByNewQuestion(data)
			.then(resp => {
				dispatch(saveQuestionAction())
			}).catch(err => {
				console.log(err);
		})
	}
}

function classify(resp, chosenUser) {
	const questions = Object.keys(resp);
	const answeredQuestions = Object.keys(chosenUser.answers);
	const unansweredQuestions = questions.reduce((accumulator, currentValue) => {
		if (!answeredQuestions.includes(currentValue)) {
			accumulator.push(currentValue);
		}
		return accumulator;
	}, []);
	return {unansweredQuestions, answeredQuestions, questions: resp};
}

// reducer
const initState = {
	unansweredQuestions: null,
	answeredQuestions: null,
	questions: null
};
function question(state = initState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_QUESTIONS:
			return { ...state,
				unansweredQuestions: payload.unansweredQuestions,
				answeredQuestions: payload.answeredQuestions,
				questions: payload.questions };
		case SAVE_QUESTION_ANSWER:
			const { qid } = payload;
			state.answeredQuestions.push(qid);
			const index = state.unansweredQuestions.indexOf(qid);
			state.unansweredQuestions.splice(index, 1);
			return {...state, code: true};
		case SAVE_QUESTION:
			return {...state, code: true};
		default:
			return state;
	}
}

export default question;
