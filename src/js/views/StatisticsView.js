import { elementFactory, clearElement } from '../elementFactory';
import EventEmitter from '../models/EventEmitter';

class StatisticsView extends EventEmitter {
  constructor(model) {
    super();
    this.model = model;

    this.table = elementFactory('table', { class: 'stat-table' }, '');
    this.containerHead = StatisticsView.getElement('.container-head');
    this.title = StatisticsView.getElement('.view-title');
    this.container = StatisticsView.getElement('.card-container');
    this.starsContainer = StatisticsView.getElement('.stars-container');

    this.resetButton = elementFactory('button', { class: 'stat-button' }, 'Reset');
    this.repeatButton = elementFactory('button', { class: 'stat-button' }, 'Repeat difficult');

    this.buttonDiv = elementFactory('div', { class: 'stat-buttons' }, this.resetButton, this.repeatButton);

    this.tBody = elementFactory('tbody', {}, '');
    this.table.appendChild(this.tBody);
    this.header = this.table.createTHead();
    const newRow = this.header.insertRow();
    const categoryCell = elementFactory('th', {}, '');
    categoryCell.textContent = 'Category';
    newRow.appendChild(categoryCell);
    const nameCell = elementFactory('th', {}, '');
    nameCell.textContent = 'word';
    newRow.appendChild(nameCell);
    const translateCell = elementFactory('th', {}, '');
    translateCell.textContent = 'Translation';
    newRow.appendChild(translateCell);
    const learnCell = elementFactory('th', {}, '');
    learnCell.textContent = 'Learned';
    newRow.appendChild(learnCell);
    const correctCell = elementFactory('th', {}, '');
    correctCell.textContent = 'Correct';
    newRow.appendChild(correctCell);
    const mistakeCell = elementFactory('th', {}, '');
    mistakeCell.textContent = 'Wrong';
    newRow.appendChild(mistakeCell);
    const percentCell = elementFactory('th', {}, '');
    percentCell.textContent = 'Correct %';
    newRow.appendChild(percentCell);
    this.setUpLocalListeners();
  }

  static getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  setUpLocalListeners() {
    this.resetButton.addEventListener('click', () => {
      this.emit('resetstat');
    });
    this.repeatButton.addEventListener('click', () => {
      this.emit('repeatwords');
    });
  }

  playMode() {
    this.resetButton.classList.toggle('play-color');
    this.resetButton.classList.toggle('play-background');
    this.repeatButton.classList.toggle('play-color');
    this.repeatButton.classList.toggle('play-background');
  }

  displayStatistics() {
    clearElement(this.starsContainer);
    clearElement(this.container);
    clearElement(this.containerHead);
    clearElement(this.tBody);
    this.title.textContent = 'Statistics';
    this.containerHead.appendChild(this.title);
    this.containerHead.appendChild(this.buttonDiv);
    this.container.appendChild(this.table);
    this.model.forEach((category) => {
      category.words.forEach((element) => {
        const newRow = this.tBody.insertRow();
        const categoryCell = newRow.insertCell();
        const categoryImg = elementFactory('img', { class: 'item-icon', src: `${category.preview[0]}`, alt: 'icon' }, '');
        const text = elementFactory('span', { class: 'cell-span' }, categoryImg, category.name);
        categoryCell.appendChild(text);
        const nameCell = newRow.insertCell();
        nameCell.textContent = element.word;
        const translateCell = newRow.insertCell();
        translateCell.textContent = element.translation;
        const learnCell = newRow.insertCell();
        learnCell.textContent = element.learn;
        const correctCell = newRow.insertCell();
        correctCell.textContent = element.correct;
        const mistakeCell = newRow.insertCell();
        mistakeCell.textContent = element.mistake;
        const percentCell = newRow.insertCell();
        percentCell.textContent = element.percent === 'none' ? 0 : element.percent;
      });
    });

    const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

    const comparer = (idx, asc) => (a, b) => ((v1, v2) => (v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2))
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
    const tableTHs = document.querySelectorAll('th');
    tableTHs.forEach((th) => {
      th.classList.remove('headerSortUp');
      th.classList.remove('headerSortDown');
      th.onclick = () => {
        tableTHs.forEach((element) => {
          const el = element;
          el.className = '';
        });
        Array.from(this.tBody.querySelectorAll('tr'))
          .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
          .forEach((tr) => {
            if (this.asc) {
              th.classList.remove('headerSortUp');
              th.classList.add('headerSortDown');
            } else {
              th.classList.remove('headerSortDown');
              th.classList.add('headerSortUp');
            }
            this.tBody.appendChild(tr);
          });
      };
    });
  }
}

export default StatisticsView;
