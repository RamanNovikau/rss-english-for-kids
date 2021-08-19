import EventEmitter from './EventEmitter';

const _ = require('lodash');

class FlashcardsGame extends EventEmitter {
  constructor(model) {
    super();
    this.model = model.sort(() => Math.random() - 0.5);
    this.nextWord();
    this.wrongAnsers = 0;
    this.correctSound = new Audio('assets/sounds/correct.mp3');

    this.setUpLocalListeners();
  }

  nextWord() {
    this.active = this.model.pop();
    FlashcardsGame.playSound(this.active.audioSrc);
  }

  repeatWord() {
    FlashcardsGame.playSound(this.active.audioSrc);
  }

  static playSound(src) {
    const audio = new Audio(src);
    audio.play();
  }

  setUpLocalListeners() {
    this.correctSound.onended = () => {
      if (this.model.length) {
        this.nextWord();
      } else {
        this.emit('endgame', this.wrongAnsers);
      }
    };
  }

  checkAnswer(answer) {
    const answerRes = _.isEqual(this.active, answer);
    if (answerRes) {
      this.emit('correctanswer');
      this.active.correct += 1;
      this.correctSound.play();
    } else {
      this.emit('wronganswer');
      this.wrongAnsers += 1;
      this.active.mistake += 1;
      FlashcardsGame.playSound('assets/sounds/wrong.mp3');
    }
    this.active.updateStatistics();
  }
}

export default FlashcardsGame;
