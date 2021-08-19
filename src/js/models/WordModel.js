import EventEmitter from './EventEmitter';

class Word extends EventEmitter {
  constructor(word, name) {
    super();
    this.categoryName = name;
    this.word = word.word;
    this.translation = word.translation;
    this.image = word.image;
    this.audioSrc = word.audioSrc;
    this.learn = 0;
    this.correct = 0;
    this.mistake = 0;
    this.percent = 'none';
    this.setStatistics();
  }

  setCorrectPercent() {
    if (this.mistake + this.correct !== 0) {
      this.percent = Math.floor(((this.correct / (this.mistake + this.correct)) * 100));
    } else {
      this.percent = 'none';
    }
  }

  resetStatistics() {
    this.learn = 0;
    this.correct = 0;
    this.mistake = 0;
    this.percent = 'none';
    const stats = JSON.parse(localStorage.getItem('stat')) || [];
    const isStored = stats.find((item) => item.word === this.word);
    if (!isStored) {
      stats.push(this);
    } else {
      isStored.learn = this.learn;
      isStored.correct = this.correct;
      isStored.mistake = this.mistake;
      isStored.percent = this.percent;
    }
    this.setCorrectPercent();
    localStorage.setItem('stat', JSON.stringify(stats));
  }

  setStatistics() {
    const stats = JSON.parse(localStorage.getItem('stat')) || [];
    const isStored = stats.find((item) => item.word === this.word);
    if (!isStored) {
      this.setCorrectPercent();
      stats.push(this);
      localStorage.setItem('stat', JSON.stringify(stats));
    } else {
      this.learn = isStored.learn;
      this.correct = isStored.correct;
      this.mistake = isStored.mistake;
      this.setCorrectPercent();
    }
  }

  updateStatistics() {
    const stats = JSON.parse(localStorage.getItem('stat'));
    const word = stats.find((item) => item.word === this.word);
    this.setCorrectPercent();
    word.learn = this.learn;
    word.correct = this.correct;
    word.mistake = this.mistake;
    word.percent = this.percent;
    localStorage.setItem('stat', JSON.stringify(stats));
  }
}

export default Word;
