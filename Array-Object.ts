interface User {
    id: number;
    name: string;
    age: number;
    active: boolean;
}
// Cas d'usage : Filtrage des utilisateurs actifs dans une application

const users: User[] = [
    { id: 1, name: 'Alice', age: 25, active: true },
    { id: 2, name: 'Bob', age: 30, active: false },
    { id: 3, name: 'Charlie', age: 35, active: true }
];

function filterByProperty1<User, Key extends keyof User>(
  items: User[],
  property: Key,
  value: User[Key]
): User[] {

  const result: User[] = [];
    // boucle sur les utilisateurs
  for (const item of items) {
    if (item[property] === value) {
      result.push(item);
    }
  }

  return result;
}
console.log(filterByProperty1(users, 'active', true));
console.log(filterByProperty1(users, 'age', 30));
// [{id: 1, name: 'Alice', age: 25, active: true}, {id: 3, name: 'Charlie', age: 35, active: true}]

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
}

// Cas d'usage : Regroupement de produits par catégorie dans un e-commerce

const products: Product[] = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 699 },
    { id: 3, name: 'T-shirt', category: 'Clothing', price: 29 }
];

function groupBy1<Product, Key extends keyof Product>(
  items: Product[],
  key: Key
): Record<string, Product[]> {

  const result: Record<string, Product[]> = {};
  // boucle sur les produits 
  for (const item of items) {
    const group = String(item[key]);

    if (!result[group]) {
      result[group] = [];
    }

    result[group].push(item);
  }

  return result;
}
console.log(groupBy1(products, 'category'));

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
}
// Cas d'usage : Trouver les livres disponibles dans deux bibliothèques

const library1: Book[] = [
    { id: 1, title: "1984", author: "Orwell", available: true },
    { id: 2, title: "Dune", author: "Herbert", available: false }
];
const library2: Book[] = [
    { id: 3, title: "1984", author: "Orwell", available: true },
    { id: 4, title: "Foundation", author: "Asimov", available: true }
];

function findIntersection<Book, Key extends keyof Book>(
  array1: Book[],
  array2: Book[],
  key: Key
): Book[] {
  const result: Book[] = [];
  const set2 = new Set<Book[Key]>();
    // boucle sur le deuxième tableau 
  for (let i = 0; i < array2.length; i++) {
    set2.add(array2[i][key]);
  }
  // boucle sur le premier tableau 
  for (let i = 0; i < array1.length; i++) {
    if (set2.has(array1[i][key])) {
      result.push(array1[i]);
    }
  }

  return result;
}


console.log(findIntersection(library1, library2, 'title'));
// [{ id: 1, title: "1984", author: "Orwell", available: true }]
interface Transaction {
    id: number;
    type: 'credit' | 'debit';
    amount: number;
    category: string;
}

// Cas d'usage : Calcul des totaux par catégorie de dépenses

const transactions: Transaction[] = [
    { id: 1, type: 'debit', amount: 100, category: 'Food' },
    { id: 2, type: 'debit', amount: 50, category: 'Food' },
    { id: 3, type: 'credit', amount: 75, category: 'Income' }
];

function aggregateData<Transac, Key1 extends keyof Transac, Key2 extends keyof Transac>(
  items: Transac[],
  groupKey: Key1,
  valueKey: Key2
): Record<string, number> {

  const result: Record<string, number> = {};
    //Boucle sur le tableau de transactions
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const group = String(item[groupKey]);
    const value = Number(item[valueKey]);

    if (!result[group]) {
      result[group] = 0;
    }

    result[group] += value;
  }

  return result;
}

console.log(aggregateData(transactions, 'category', 'amount'));
// { Food: 150, Income: 75 }
