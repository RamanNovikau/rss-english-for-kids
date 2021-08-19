import FlashcardsGame from '../models/FlashcardsGame';
import FlashcardGameScoreView from '../views/FlashcardGameScoreView';
import StatisticsView from '../views/StatisticsView';
import Category from '../models/CategoryModel';

const _ = require('lodash');

class MainAppController {
  constructor(model, categoriesView, wordView) {
    this.model = model;
    this.categoriesView = categoriesView;
    this.wordView = wordView;
    this.categoriesView.model = model;
    this.flashCardGame = {};
    this.statisticsView = new StatisticsView(this.model);
    categoriesView.on('getwords', (words) => this.displayWords(words));
    categoriesView.on('playmode', () => this.playMode());
    categoriesView.on('getstat', () => this.displayStat());
    wordView.on('gamestart', () => this.gameStart());
    wordView.on('wordrepeat', () => this.flashCardGame.repeatWord());
    wordView.on('checkanswer', (word) => this.flashCardGame.checkAnswer(word));
    this.statisticsView.on('resetstat', () => this.resetStat());
    this.statisticsView.on('repeatwords', () => this.repeatWords());
  }

  resetStat() {
    this.model.forEach((category) => {
      category.words.forEach((word) => {
        word.resetStatistics();
      });
    });
    this.displayStat();
  }

  repeatWords() {
    const stats = JSON.parse(localStorage.getItem('stat')) || [];
    const numberOfWords = 8;
    let difficultWords = stats.filter((item) => item.percent !== 'none' && item.percent !== 100);
    difficultWords = _.orderBy(difficultWords, ['percent'], ['asc']);
    const difficultWordsCategory = new Category({
      index: 'diff-words',
      category: 'Difficult words',
      preview: [''],
      background: '',
      color: '',
      words: difficultWords.slice(0, numberOfWords),
    });
    this.wordView.model = difficultWordsCategory;
    this.wordView.displayWords();
  }

  playMode() {
    this.wordView.gameMode = !this.wordView.gameMode;
    this.wordView.gameActive = false;
    this.flashCardGame = {};
    this.wordView.playMode();
    this.statisticsView.playMode();
  }

  gameStart() {
    this.wordView.gameActive = !this.wordView.gameActive;
    this.flashCardGame = new FlashcardsGame([...this.wordView.model.words]);
    this.flashCardGame.on('correctanswer', () => this.wordView.addOverlay());
    this.flashCardGame.on('wronganswer', () => this.wordView.addEmptyStar());
    this.flashCardGame.on('endgame', (wrongAnswers) => {
      this.flashCardGame = {};
      this.wordView.gameActive = false;
      this.scoreView = new FlashcardGameScoreView(wrongAnswers);
      this.scoreView.displayScore();
      this.scoreView.on('displaycategories', () => { this.diplayCategories(); });
    });
  }

  displayStat() {
    this.wordView.gameActive = false;
    this.flashCardGame = {};
    this.statisticsView.model = this.model;
    this.statisticsView.displayStatistics();
  }

  displayWords(category) {
    this.wordView.gameActive = false;
    this.flashCardGame = {};
    this.wordView.model = category;
    this.wordView.displayWords();
  }

  diplayCategories() {
    this.categoriesView.displayCategories();
  }
}

export default MainAppController;
