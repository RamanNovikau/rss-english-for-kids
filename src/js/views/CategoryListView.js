import { elementFactory, clearElement } from '../elementFactory';
import EventEmitter from '../models/EventEmitter';

class CategoriesListView extends EventEmitter {
  constructor() {
    super();
    this.model = [];

    this.hidenMenuNav = elementFactory('nav', { class: 'hiden-menu__nav' }, '');
    this.hidenMenu = elementFactory('div', { class: 'hiden-menu' }, this.hidenMenuNav);
    document.body.appendChild(this.hidenMenu);

    this.startContainer = elementFactory('div', { class: 'stars-container' }, '');
    this.viewTitle = elementFactory('div', { class: 'view-title' }, 'Categories');
    this.containerHead = elementFactory('div', { class: 'container-head' }, this.viewTitle);
    this.cardContainer = elementFactory('div', { class: 'card-container' }, '');
    this.container = elementFactory('div', { class: 'container' }, this.containerHead, this.startContainer, this.cardContainer);
    const main = elementFactory('main', { class: 'main' }, this.container);

    this.input = elementFactory('input', { type: 'checkbox', checked: true }, '');
    const slider = elementFactory('span', { class: 'slider round' }, '');
    this.toggleButton = elementFactory('label', { class: 'switch' }, this.input, slider);

    this.buttonSpans = Array(4);

    for (let i = 0; i < this.buttonSpans.length; i += 1) {
      this.buttonSpans[i] = elementFactory('span', { class: 'button-span' }, '');
    }

    const button = elementFactory('button', { class: 'hiden-menu-button open-close-btn' }, ...this.buttonSpans);

    const headTitle = elementFactory('div', { class: 'head__title' }, 'English for kids');
    const headerWrapper = elementFactory('div', { class: 'header-wrapper' }, headTitle, this.toggleButton);
    this.header = elementFactory('header', { class: 'header' }, button, headerWrapper);

    const rsSchoolImg = elementFactory('img', { class: 'footer-img', src: 'assets/images/rs_school_js.svg' }, '');
    const githubImg = elementFactory('img', { class: 'footer-img', src: 'assets/images/github.svg' }, '');
    const rsSchoolLink = elementFactory('a', { class: 'footer-link', href: 'https://github.com/RamanNovikau' }, githubImg, 'RamanNovikau');
    const githubLink = elementFactory('a', { class: 'footer-link', href: 'https://rs.school/js/' }, rsSchoolImg);
    this.footer = elementFactory('footer', { class: 'footer' }, rsSchoolLink, githubLink);

    document.body.appendChild(this.header);
    document.body.appendChild(main);
    document.body.appendChild(this.footer);
    this.setUpLocalListeners();
  }

  static getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  static createCategoryCard(prop) {
    const previewImages = [];

    for (let i = 0; i < prop.preview.length; i += 1) {
      const image = elementFactory('img', { class: 'category-card__img', src: `${prop.preview[i]}`, alt: 'Preview-img' }, '');
      previewImages.push(image);
    }
    const title = elementFactory('div', { class: 'category-card__title' }, `${prop.category}`);

    const cardPreview = elementFactory('div', { class: 'category-card-preview' }, ...previewImages);
    const card = elementFactory('div', { class: 'category-card' }, title, cardPreview);

    card.style.backgroundColor = prop.background;
    card.style.color = prop.color;
    card.style.borderColor = prop.color;
    return card;
  }

  static createCategoryMenuItem(category) {
    const img = elementFactory('img', { class: 'item-icon', src: `${category.preview[0]}`, alt: 'icon' }, '');
    const text = elementFactory('span', { class: 'item-text' }, `${category.name}`);
    const item = elementFactory('a', { href: '#', class: 'nav__item' }, img, text);

    return item;
  }

  playMode() {
    this.container.classList.toggle('play-color');
    this.hidenMenu.classList.toggle('hiden-menu-play');
    this.header.classList.toggle('play-color');
    this.footer.classList.toggle('play-color');
    this.footer.classList.toggle('play-background');
    this.buttonSpans.forEach((span) => {
      span.classList.toggle('button-span-play');
    });
  }

  static setActiveMenuItem() {
    const active = CategoriesListView.getElement('.nav__item-active');
    if (active) active.classList.remove('nav__item-active');
  }

  setUpLocalListeners() {
    this.input.addEventListener('change', () => {
      this.playMode();
      this.emit('playmode');
    });
  }

  displayCategories() {
    clearElement(this.startContainer);
    clearElement(this.containerHead);
    clearElement(this.cardContainer);
    clearElement(this.hidenMenuNav);
    this.viewTitle.textContent = 'Categories';
    this.containerHead.appendChild(this.viewTitle);
    for (let i = 0; i < this.model.length; i += 1) {
      const card = CategoriesListView.createCategoryCard({
        category: this.model[i].name,
        preview: this.model[i].preview,
        background: this.model[i].background,
        color: this.model[i].color,
      });
      const item = CategoriesListView.createCategoryMenuItem(this.model[i]);

      item.onclick = () => {
        this.emit('getwords', this.model[i]);
        CategoriesListView.setActiveMenuItem();
        item.classList.add('nav__item-active');
      };

      card.onclick = () => {
        this.emit('getwords', this.model[i]);
        CategoriesListView.setActiveMenuItem();
        item.classList.add('nav__item-active');
      };

      this.hidenMenuNav.appendChild(item);
      this.cardContainer.appendChild(card);
    }
    const statItem = CategoriesListView.createCategoryMenuItem({ preview: ['assets/images/bar-chart.svg'], name: 'Statistics' });

    statItem.onclick = () => {
      this.emit('getstat');
      CategoriesListView.setActiveMenuItem();
      statItem.classList.add('nav__item-active');
    };

    this.hidenMenuNav.appendChild(statItem);
  }
}

export default CategoriesListView;
