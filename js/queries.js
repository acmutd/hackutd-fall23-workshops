import {
  doc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
  increment,
} from 'firebase/firestore';
import db from './firebase.js';

const items = {
  Apples: 1,
  Milk: 2,
  Bananas: 2,
};

async function getItems() {
  return items;
}

async function addItem(name) {
  if (!items[name]) {
    // If item doesn't exist yet, add it to the cart.
    items[name] = 1;
  } else {
    // Otherwise, increment the count.
    items[name] += 1;
  }
}

async function removeItem(name) {
  if (items[name] == 1) {
    // Only one item left, just delete the item from the cart.
    delete items[name];
  } else {
    // More than one item left, decrement the count.
    items[name] -= 1;
  }
}

export default { getItems, addItem, removeItem };

