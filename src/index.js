import './styles/styles.css';
import './styles/hiden-menu-style.css';
import './styles/toggle-button.css';
import './styles/toggle-styles.css';
import cards from './js/cards';
import Category from './js/models/CategoryModel';
import CategoriesListView from './js/views/CategoryListView';
import MainAppController from './js/controllers/MainAppController';
import WordListView from './js/views/WordsListView';
import hidenMenu from './js/hiden-menu';

const categories = [];

cards.forEach((card) => {
  const category = new Category(card);
  categories.push(category);
});
const categoriesView = new CategoriesListView();
const wordsView = new WordListView();
const app = new MainAppController(categories, categoriesView, wordsView);

app.diplayCategories();

hidenMenu();
