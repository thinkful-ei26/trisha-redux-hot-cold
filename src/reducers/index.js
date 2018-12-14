import { RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE } from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
}

/* Your app should have a single reducer which handles any actions which you need to make the app's functionality work.*/

const reducer = (set=initialState, action) => {

  switch (action.type) {
    case RESTART_GAME : 
      return Object.assign({}, state, initialState)

    case MAKE_GUESS : 
    let feedback, guess;

    //everytime there's this.setState, return an Object.assign
      guess = parseInt(guess, 10);
      if (isNaN(guess)) {
        return Object.assign({}, state, {
          feedback: 'Please enter a valid number' 
        });
      }
  
      const difference = Math.abs(guess - this.state.correctAnswer);
  
      if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
      } else if (difference >= 30) {
        feedback = 'You\'re Cold...';
      } else if (difference >= 10) {
        feedback = 'You\'re Warm.';
      } else if (difference >= 1) {
        feedback = 'You\'re Hot!';
      } else {
        feedback = 'You got it!';
      }
      return Object.assign({}, state, {
        feedback, 
        guesses: [state.guesses, guess]
      })
  
    case GENERATE_AURAL_UPDATE : 
      const { guesses, feedback } = state;

      const pluralize = guesses.length !== 1;

      let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

      if (guesses.length > 0) {
        auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
      }
      return Object.assign({}, state, {auralStatus})
    
    default: return state
  }

}

export default reducer;