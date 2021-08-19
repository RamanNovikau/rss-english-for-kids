import EventEmitter from './EventEmitter';
import Word from './WordModel';

class Category extends EventEmitter {
  constructor(category) {
    super();
    this.index = category.index;
    this.name = category.category;
    this.preview = category.preview;
    this.background = category.background;
    this.color = category.color;
    this.words = [];

    category.words.forEach((item) => {
      const word = new Word(item, this.name);
      this.words.push(word);
    });
  }
}

export default Category;
