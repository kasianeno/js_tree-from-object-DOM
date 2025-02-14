'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  let ul = document.createElement('ul');

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      let li = document.createElement('li');
      li.textContent= key;

      if (data[key] === 'object' && data[key] !== null) {
        createTree(li, data[key]);
      }

      ul.appendChild(li);
    }
  }

  element.appendChild(ul);
}

createTree(tree, food);
