import { elementFactory, clearElement } from '../elementFactory';

const { default: EventEmitter } = require('../models/EventEmitter');

class FlashcardGameScoreView extends EventEmitter {
  constructor(model) {
    super();
    this.model = model;

    this.cardContainer = FlashcardGameScoreView.getElement('.card-container');
    this.header = FlashcardGameScoreView.getElement('.container-head');
    this.starsContainer = FlashcardGameScoreView.getElement('.stars-container');

    this.mistakes = elementFactory('div', { class: 'message-text' }, 'Congratulations! You made no mistakes!');
    this.img = elementFactory('img', { class: 'score-img', src: 'assets/images/happy.svg', alt: 'Score-img' }, '');
    this.score = elementFactory('div', { class: 'message-content' }, this.img, this.mistakes);
  }

  static getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  static playSound(src) {
    const audio = new Audio(src);
    audio.play();
  }

  displayScore() {
    clearElement(this.cardContainer);
    clearElement(this.header);
    clearElement(this.starsContainer);
    if (this.model === 0) {
      this.cardContainer.appendChild(this.score);
      FlashcardGameScoreView.playSound('assets/sounds/win (2).mp3');
    } else {
      this.img.src = 'assets/images/sad.svg';
      this.mistakes.textContent = this.model === 1 ? 'You made 1 mistake.' : `You made ${this.model} mistakes.`;
      this.cardContainer.appendChild(this.score);
      FlashcardGameScoreView.playSound('assets/sounds/lose.mp3');
    }
    setTimeout(() => this.emit('displaycategories'), 5000);
  }
}

export default FlashcardGameScoreView;
