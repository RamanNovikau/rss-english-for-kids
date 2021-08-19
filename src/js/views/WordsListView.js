import { elementFactory, clearElement } from '../elementFactory';
import EventEmitter from '../models/EventEmitter';

class WordListView extends EventEmitter {
  constructor() {
    super();
    this.cardContainer = WordListView.getElement('.card-container');
    this.header = WordListView.getElement('.container-head');
    this.starsContainer = WordListView.getElement('.stars-container');

    this.model = [];
    this.cards = [];
    this.gameMode = false;
    this.gameActive = false;

    const playButtonSpan = elementFactory('span', { class: 'material-icons start-icon play-color' }, 'play_arrow');
    this.playButton = elementFactory('button', { class: 'start-play hide' }, playButtonSpan);

    this.messageText = elementFactory('div', { class: 'message-text' }, 'No difficult words to repeat!');
    this.img = elementFactory('img', { class: 'score-img', src: 'assets/images/surprised.svg', alt: 'Score-img' }, '');
    this.messageContent = elementFactory('div', { class: 'message-content' }, this.img, this.messageText);

    this.setUpLocalListeners();
  }

  static getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  createWordCard(word) {
    let cardInnerClasses = 'word-card-inner';
    let cardImgFrontClasses = 'word-card__img';
    let wordTitleClasses = 'word-card__title';
    let flipButtonClasses = 'flip-button';

    if (this.gameMode) {
      cardInnerClasses += ' play-color play-background';
      cardImgFrontClasses += ' card-img-play';
      wordTitleClasses += ' hide';
      flipButtonClasses += ' hide';
    }

    const wordTitle = elementFactory('div', { class: wordTitleClasses }, word.word);
    const translate = elementFactory('div', { class: 'word-card__title' }, word.translation);

    const cardImgFront = elementFactory('img', { class: cardImgFrontClasses, src: `${word.image}`, alt: `${word.word}-img` }, '');
    const cardImgBack = elementFactory('img', { class: 'word-card__img', src: `${word.image}`, alt: `${word.word}-img` }, '');

    const buttonImg = elementFactory('img', { class: 'flip-icon', src: 'assets/images/icons/undo.svg', alt: 'Flip-img' }, '');
    const flipButton = elementFactory('button', { class: flipButtonClasses }, buttonImg);

    const cardFront = elementFactory('div', { class: 'card-front' }, cardImgFront, wordTitle, flipButton);
    const cardBack = elementFactory('div', { class: 'card-back card-flip' }, cardImgBack, translate);

    const overlayImage = elementFactory('img', { class: 'overlay-icon', src: 'assets/images/ok.svg', alt: 'Overlay-img' }, '');
    const cardOverlay = elementFactory('div', { class: 'card-overlay' }, overlayImage);

    const cardInner = elementFactory('div', { class: cardInnerClasses }, cardOverlay, cardFront, cardBack);
    const card = elementFactory('div', { class: 'word-card' }, cardInner);
    return card;
  }

  static playSound(src) {
    const audio = new Audio(src);
    audio.play();
  }

  playMode() {
    this.cards.forEach((card) => {
      card.querySelector('.word-card-inner').classList.toggle('play-color');
      card.querySelector('.word-card-inner').classList.toggle('play-background');
      card.querySelector('.word-card__img').classList.toggle('card-img-play');
      card.querySelector('.word-card__title').classList.toggle('hide');
      card.querySelector('.flip-button').classList.toggle('hide');
      card.querySelector('.card-overlay').classList.remove('card-overlay-show');
      clearElement(this.starsContainer);
    });
    this.playButton.querySelector('.material-icons').textContent = 'play_arrow';
    if (this.cards.length) {
      this.playButton.classList.toggle('hide');
    }
  }

  setUpLocalListeners() {
    this.playButton.addEventListener('click', () => {
      if (!this.gameActive) {
        this.playButton.querySelector('.material-icons').textContent = 'replay';
        this.emit('gamestart');
      } else {
        this.emit('wordrepeat');
      }
    });
  }

  displayWords() {
    clearElement(this.header);
    this.cards = [];
    const viewTitle = WordListView.getElement('.view-title') || elementFactory('div', { class: 'view-title' }, '');
    viewTitle.textContent = `${this.model.name} Learn&Play`;
    this.playButton.querySelector('.material-icons').textContent = 'play_arrow';
    this.header.appendChild(viewTitle);
    this.header.appendChild(this.playButton);
    clearElement(this.starsContainer);
    clearElement(this.cardContainer);
    if (!this.model.words.length) {
      this.cardContainer.appendChild(this.messageContent);
    }
    for (let i = 0; i < this.model.words.length; i += 1) {
      const card = this.createWordCard(this.model.words[i]);

      const cardIner = card.querySelector('.word-card-inner');
      const flipButton = card.querySelector('.flip-button');
      const overlay = card.querySelector('.card-overlay');

      flipButton.onclick = () => {
        cardIner.classList.add('card-flip');
      };

      cardIner.onmouseleave = () => {
        cardIner.classList.remove('card-flip');
      };

      cardIner.onclick = (event) => {
        const { target } = event;
        if (!this.gameMode) {
          if (target.matches('.card-back') || target.parentElement.matches('.card-back') || target.matches('.flip-icon')) return;
          WordListView.playSound(this.model.words[i].audioSrc);
          this.model.words[i].learn += 1;
          this.model.words[i].updateStatistics();
        } else if (this.gameActive) {
          if (target.matches('.card-overlay') || target.parentElement.matches('.card-overlay')) return;
          this.tempOverlay = overlay;
          this.emit('checkanswer', this.model.words[i]);
        }
      };
      this.cards.push(card);
      this.cardContainer.appendChild(card);
    }
    if (this.cards.length) {
      if (this.gameMode) this.playButton.classList.remove('hide');
    } else {
      this.playButton.classList.add('hide');
    }
  }

  addOverlay() {
    this.tempOverlay.classList.add('card-overlay-show');
    const star = elementFactory('img', { class: 'star-img', src: 'assets/images/star.svg', alt: 'star-img' }, '');
    this.starsContainer.insertBefore(star, this.starsContainer.firstChild);
  }

  addEmptyStar() {
    const star = elementFactory('img', { class: 'star-img', src: 'assets/images/white-star.svg', alt: 'star-img' }, '');
    this.starsContainer.insertBefore(star, this.starsContainer.firstChild);
  }
}

export default WordListView;
