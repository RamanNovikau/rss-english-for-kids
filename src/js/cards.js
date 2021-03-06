const imagePath = 'assets/images/';
const soundsPath = 'assets/sounds/';

const cards = [
  {
    index: 'animals-set-a',
    category: 'Animals (set A)',
    preview: [`${imagePath}bear.svg`, `${imagePath}fox.svg`, `${imagePath}dog.svg`],
    background: '#FFE980',
    color: '#7D5E38',
    words: [
      {
        word: 'Bear',
        translation: 'Медведь',
        image: `${imagePath}bear.svg`,
        audioSrc: `${soundsPath}bear.mp3`,
      },
      {
        word: 'Bird',
        translation: 'Птичка',
        image: `${imagePath}bird.svg`,
        audioSrc: `${soundsPath}bird.mp3`,
      },
      {
        word: 'Cat',
        translation: 'Кошка',
        image: `${imagePath}cat.svg`,
        audioSrc: `${soundsPath}cat.mp3`,
      },
      {
        word: 'Chicken',
        translation: 'Курочка',
        image: `${imagePath}chickenA.svg`,
        audioSrc: `${soundsPath}chicken.mp3`,
      },
      {
        word: 'Cow',
        translation: 'Корова',
        image: `${imagePath}cow.svg`,
        audioSrc: `${soundsPath}cow.mp3`,
      },
      {
        word: 'Dog',
        translation: 'Собака',
        image: `${imagePath}dog.svg`,
        audioSrc: `${soundsPath}dog.mp3`,
      },
      {
        word: 'Fox',
        translation: 'Лисичка',
        image: `${imagePath}fox.svg`,
        audioSrc: `${soundsPath}fox.mp3`,
      },
      {
        word: 'Horse',
        translation: 'Лошадь',
        image: `${imagePath}horse.svg`,
        audioSrc: `${soundsPath}horse.mp3`,
      },
    ],
  },
  {
    index: 'animals-set-b',
    category: 'Animals (set B)',
    preview: [`${imagePath}lion.svg`, `${imagePath}monkey.svg`, `${imagePath}owl.svg`],
    background: '#F7CFC6',
    color: '#7A6D60',
    words: [
      {
        word: 'Crocodile',
        translation: 'Крокодил',
        image: `${imagePath}crocodile.svg`,
        audioSrc: `${soundsPath}crocodile.mp3`,
      },
      {
        word: 'Dragon',
        translation: 'Дракон',
        image: `${imagePath}dragon.svg`,
        audioSrc: `${soundsPath}dragon.mp3`,
      },
      {
        word: 'Elephant',
        translation: 'Слон',
        image: `${imagePath}elephant.svg`,
        audioSrc: `${soundsPath}elephant.mp3`,
      },
      {
        word: 'Lion',
        translation: 'Лев',
        image: `${imagePath}lion.svg`,
        audioSrc: `${soundsPath}lion.mp3`,
      },
      {
        word: 'Monkey',
        translation: 'Обезьяна',
        image: `${imagePath}monkey.svg`,
        audioSrc: `${soundsPath}monkey.mp3`,
      },
      {
        word: 'Owl',
        translation: 'Сова',
        image: `${imagePath}owl.svg`,
        audioSrc: `${soundsPath}owl.mp3`,
      },
      {
        word: 'Shark',
        translation: 'Акула',
        image: `${imagePath}shark.svg`,
        audioSrc: `${soundsPath}shark.mp3`,
      },
      {
        word: 'Zebra',
        translation: 'Зебра',
        image: `${imagePath}zebra.svg`,
        audioSrc: `${soundsPath}zebra.mp3`,
      },
    ],
  },
  {
    index: 'body',
    category: 'Body',
    preview: [`${imagePath}arm.svg`, `${imagePath}leg.svg`, `${imagePath}ear.svg`],
    background: '#FFE980',
    color: '#C69D6D',
    words: [
      {
        word: 'Arm',
        translation: 'Рука',
        image: `${imagePath}arm.svg`,
        audioSrc: `${soundsPath}arm.mp3`,
      },
      {
        word: 'Ear',
        translation: 'Ухо',
        image: `${imagePath}ear.svg`,
        audioSrc: `${soundsPath}ear.mp3`,
      },
      {
        word: 'Eye',
        translation: 'Глаз',
        image: `${imagePath}eye.svg`,
        audioSrc: `${soundsPath}eye.mp3`,
      },
      {
        word: 'Leg',
        translation: 'Нога',
        image: `${imagePath}leg.svg`,
        audioSrc: `${soundsPath}leg.mp3`,
      },
      {
        word: 'Lips',
        translation: 'Губы',
        image: `${imagePath}lips.svg`,
        audioSrc: `${soundsPath}lips.mp3`,
      },
      {
        word: 'Nose',
        translation: 'Нос',
        image: `${imagePath}nose.svg`,
        audioSrc: `${soundsPath}nose.mp3`,
      },
      {
        word: 'Tongue',
        translation: 'Язык',
        image: `${imagePath}tongue.svg`,
        audioSrc: `${soundsPath}tongue.mp3`,
      },
      {
        word: 'Tooth',
        translation: 'Зуб',
        image: `${imagePath}tooth.svg`,
        audioSrc: `${soundsPath}tooth.mp3`,
      },
    ],
  },
  {
    index: 'clothes',
    category: 'Clothes',
    preview: [`${imagePath}dress.svg`, `${imagePath}jacket.svg`, `${imagePath}pants.svg`],
    background: '#B8E0ED',
    color: '#1788A1',
    words: [
      {
        word: 'Boot',
        translation: 'Ботинок',
        image: `${imagePath}boot.svg`,
        audioSrc: `${soundsPath}boot.mp3`,
      },
      {
        word: 'Dress',
        translation: 'Платье',
        image: `${imagePath}dress.svg`,
        audioSrc: `${soundsPath}dress.mp3`,
      },
      {
        word: 'Gloves',
        translation: 'Перчатки',
        image: `${imagePath}gloves.svg`,
        audioSrc: `${soundsPath}gloves.mp3`,
      },
      {
        word: 'Hat',
        translation: 'Шляпа',
        image: `${imagePath}hat.svg`,
        audioSrc: `${soundsPath}hat.mp3`,
      },
      {
        word: 'Jacket',
        translation: 'Куртка',
        image: `${imagePath}jacket.svg`,
        audioSrc: `${soundsPath}jacket.mp3`,
      },
      {
        word: 'Pants',
        translation: 'Штаны',
        image: `${imagePath}pants.svg`,
        audioSrc: `${soundsPath}pants.mp3`,
      },
      {
        word: 'Shorts',
        translation: 'Шорты',
        image: `${imagePath}shorts.svg`,
        audioSrc: `${soundsPath}shorts.mp3`,
      },
      {
        word: 'Socks',
        translation: 'Носки',
        image: `${imagePath}socks.svg`,
        audioSrc: `${soundsPath}socks.mp3`,
      },
    ],
  },
  {
    index: 'food-set-a',
    category: 'Food (set A)',
    preview: [`${imagePath}cake.svg`, `${imagePath}cherry.svg`, `${imagePath}apple.svg`],
    background: '#FFE980',
    color: '#F2613B',
    words: [
      {
        word: 'Apple',
        translation: 'Яблоко',
        image: `${imagePath}apple.svg`,
        audioSrc: `${soundsPath}apple.mp3`,
      },
      {
        word: 'Banana',
        translation: 'Банан',
        image: `${imagePath}banana.svg`,
        audioSrc: `${soundsPath}banana.mp3`,
      },
      {
        word: 'Bread',
        translation: 'Хлеб',
        image: `${imagePath}bread.svg`,
        audioSrc: `${soundsPath}bread.mp3`,
      },
      {
        word: 'Cake',
        translation: 'Торт',
        image: `${imagePath}cake.svg`,
        audioSrc: `${soundsPath}cake.mp3`,
      },
      {
        word: 'Cheese',
        translation: 'Сыр',
        image: `${imagePath}cheese.svg`,
        audioSrc: `${soundsPath}cheese.mp3`,
      },
      {
        word: 'Cherry',
        translation: 'Вишня',
        image: `${imagePath}cherry.svg`,
        audioSrc: `${soundsPath}cherry.mp3`,
      },
      {
        word: 'Chocolate',
        translation: 'Шоколад',
        image: `${imagePath}chocolate.svg`,
        audioSrc: `${soundsPath}chocolate.mp3`,
      },
      {
        word: 'Cookie',
        translation: 'Печенье',
        image: `${imagePath}cookie.svg`,
        audioSrc: `${soundsPath}cookie.mp3`,
      },
    ],
  },
  {
    index: 'food-set-b',
    category: 'Food (set B)',
    preview: [`${imagePath}juice.svg`, `${imagePath}lemon.svg`, `${imagePath}orange.svg`],
    background: '#DED3A9',
    color: '#E09DA2',
    words: [
      {
        word: 'Pizza',
        translation: 'Пицца',
        image: `${imagePath}pizza.svg`,
        audioSrc: `${soundsPath}pizza.mp3`,
      },
      {
        word: 'Sandwich',
        translation: 'Бутерброд',
        image: `${imagePath}sandwich.svg`,
        audioSrc: `${soundsPath}sandwich.mp3`,
      },
      {
        word: 'Juice',
        translation: 'Сок',
        image: `${imagePath}juice.svg`,
        audioSrc: `${soundsPath}juice.mp3`,
      },
      {
        word: 'Lemon',
        translation: 'Лимон',
        image: `${imagePath}lemon.svg`,
        audioSrc: `${soundsPath}lemon.mp3`,
      },
      {
        word: 'Orange',
        translation: 'Апельсин',
        image: `${imagePath}orange.svg`,
        audioSrc: `${soundsPath}orange.mp3`,
      },
      {
        word: 'Strawberry',
        translation: 'Клубника',
        image: `${imagePath}strawberry.svg`,
        audioSrc: `${soundsPath}strawberry.mp3`,
      },
      {
        word: 'Tomato',
        translation: 'Томат',
        image: `${imagePath}tomato.svg`,
        audioSrc: `${soundsPath}tomato.mp3`,
      },
      {
        word: 'Drink',
        translation: 'Напиток',
        image: `${imagePath}water.svg`,
        audioSrc: `${soundsPath}drink.mp3`,
      },
    ],
  },
  {
    index: 'home-stuff',
    category: 'Home stuff',
    preview: [`${imagePath}sofa.svg`, `${imagePath}chair.svg`, `${imagePath}bed.svg`],
    background: '#CAC0DF',
    color: '#9B8166',
    words: [
      {
        word: 'Bath',
        translation: 'Ванна',
        image: `${imagePath}bath.svg`,
        audioSrc: `${soundsPath}bath.mp3`,
      },
      {
        word: 'Bed',
        translation: 'Кровать',
        image: `${imagePath}bed.svg`,
        audioSrc: `${soundsPath}bed.mp3`,
      },
      {
        word: 'Chair',
        translation: 'Стул',
        image: `${imagePath}chair.svg`,
        audioSrc: `${soundsPath}chair.mp3`,
      },
      {
        word: 'Door',
        translation: 'Дверь',
        image: `${imagePath}door.svg`,
        audioSrc: `${soundsPath}door.mp3`,
      },
      {
        word: 'Shower',
        translation: 'Душ',
        image: `${imagePath}shower.svg`,
        audioSrc: `${soundsPath}shower.mp3`,
      },
      {
        word: 'Sofa',
        translation: 'Диван',
        image: `${imagePath}sofa.svg`,
        audioSrc: `${soundsPath}sofa.mp3`,
      },
      {
        word: 'Spoon',
        translation: 'Ложка',
        image: `${imagePath}spoon.svg`,
        audioSrc: `${soundsPath}spoon.mp3`,
      },
      {
        word: 'Toilet',
        translation: 'Туалет',
        image: `${imagePath}toilet.svg`,
        audioSrc: `${soundsPath}toilet.mp3`,
      },
    ],
  },
  {
    index: 'nature',
    category: 'Nature',
    preview: [`${imagePath}tree.svg`, `${imagePath}leaf.svg`, `${imagePath}cactus.svg`],
    background: '#B8DA96',
    color: '#5E605E',
    words: [
      {
        word: 'Tree',
        translation: 'Дерево',
        image: `${imagePath}tree.svg`,
        audioSrc: `${soundsPath}tree.mp3`,
      },
      {
        word: 'Cactus',
        translation: 'Кактус',
        image: `${imagePath}cactus.svg`,
        audioSrc: `${soundsPath}cactus.mp3`,
      },
      {
        word: 'Fire',
        translation: 'Огонь',
        image: `${imagePath}fire.svg`,
        audioSrc: `${soundsPath}fire.mp3`,
      },
      {
        word: 'Leaf',
        translation: 'Лист',
        image: `${imagePath}leaf.svg`,
        audioSrc: `${soundsPath}leaf.mp3`,
      },
      {
        word: 'Mountain',
        translation: 'Гора',
        image: `${imagePath}mountin.svg`,
        audioSrc: `${soundsPath}mountain.mp3`,
      },
      {
        word: 'Rainbow',
        translation: 'Радуга',
        image: `${imagePath}rainbow.svg`,
        audioSrc: `${soundsPath}rainbow.mp3`,
      },
      {
        word: 'Sun',
        translation: 'Солнце',
        image: `${imagePath}sun.svg`,
        audioSrc: `${soundsPath}sun.mp3`,
      },
      {
        word: 'Water',
        translation: 'Вода',
        image: `${imagePath}waterN.svg`,
        audioSrc: `${soundsPath}water.mp3`,
      },
    ],
  },
];

export default cards;
