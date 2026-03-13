// Cas d'usage : Récupération des scores d'un joueur

const scores = {
    level1: 100,
    level2: 85,
    level3: 95
};
function getValues(obj: Record<string, unknown>) {
    const values: unknown[] = [];
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
           values.push(obj[key]);
        }
    }
    return values;
}
console.log(getValues(scores)); 
// [100, 85, 95]
const pricesInEuros = {
    book: 20,
    pen: 5,
    notebook: 10
};
function transformValues(obj: Record<string, number>, transformFn: (value: number) => number) {
    const result: Record<string, number> = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = transformFn(obj[key]);
        }
    }
    return result;
}
const toDollars = (euros: number) => euros * 1.1;
console.log(transformValues(pricesInEuros, toDollars));
// { book: 22, pen: 5.5, notebook: 11 }

// Cas d'usage : Fusion des ventes mensuelles de deux magasins

const store1Sales = { january: 1000, february: 1200, march: 900 };
const store2Sales = { january: 800, february: 950, march: 1100 };

function mergeObjects(obj1: Record<string, number>, obj2: Record<string, number>) {
    const result: Record<string, number> = {};
    for (const key in obj1) {
        if (Object.prototype.hasOwnProperty.call(obj1, key)) {
            result[key] = obj1[key] + (obj2[key]);
        }   
    }
    for (const key in obj2) {
        if (Object.prototype.hasOwnProperty.call(obj2, key)
             && !result[key]) {
            result[key] = obj2[key];
        }
    }
    return result;
}
console.log(mergeObjects(store1Sales, store2Sales)); 
// { january: 1800, february: 2150, march: 2000 }

// Cas d'usage : Filtrage des produits en rupture de stock

const inventory = {
    laptop: 0,
    smartphone: 5,
    tablet: 0,
    headphones: 8
};
function filterObject(obj: Record<string, number>, predicate: (value: number) => boolean) {
    const result: Record<string, number> = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) 
            && predicate(obj[key])) {
            result[key] = obj[key];
        }
    }
    return result;
}
console.log(filterObject(inventory, stock => stock === 0));
// { laptop: 0, tablet: 0 }

// Cas d'usage : Configuration d'une application

const flatConfig = {
    'app.name': 'MyApp',
    'app.version': '1.0.0',
    'database.host': 'localhost',
    'database.port': 5432
};
function flatToNested1(config: Record<string, unknown>) {
    const result: Record<string, any> = {};
    for (const key in config) {
        if (Object.prototype.hasOwnProperty.call(config, key)) {
            const parts = key.split('.');
            let current = result;
            for (let i = 0; i < parts.length; i++) {
                const part = parts[i];
                if (i === parts.length - 1) {
                    current[part] = config[key];
                }else {
                    current[part] = current[part] || {};
                    current = current[part];
                }
            }
        }
    }
    return result;
}
console.log(flatToNested1(flatConfig));
// {
//     app: { name: 'MyApp', version: '1.0.0' },
//     database: { host: 'localhost', port: 5432 }
// }
// Cas d'usage : Recherche des produits en rupture de stock

const productStock = {
    laptop: 0,
    mouse: 5,
    keyboard: 0,
    monitor: 3
};
function findKeysByValue(obj: Record<string, number>, targetValue: number) {
    const keys: string[] = [];
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)
             && obj[key] === targetValue) {
            keys.push(key);
        }
    }
    return keys;    
}
console.log(findKeysByValue(productStock, 0));
// ["laptop", "keyboard"]

// Cas d'usage : Création d'un objet de scores à partir de noms de joueurs et leurs points

const playerNames = ["Alice", "Bob", "Charlie"];
const scores2 = [100, 85, 90];
function createObjectFromArrays(keys: string[], values: number[]) {
    const result: Record<string, number> = {};
    //Boucle sur le tableau des noms 
    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = values[i];
    }
    return result;
}
console.log(createObjectFromArrays(playerNames, scores2));
// { Alice: 100, Bob: 85, Charlie: 90 }
// Cas d'usage : Analyse des statuts de commandes

const orderStatuses = {
    order1: "pending",
    order2: "delivered",
    order3: "pending",
    order4: "cancelled",
    order5: "pending"
};
function countValues(obj: Record<string, string>) {
    const counts: Record<string, number> = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key]; 
            if (!counts[value]) {
                counts[value] = 0;
            }
            counts[value]++;
        }
    }
    return counts;
}
console.log(countValues(orderStatuses));
// { pending: 3, delivered: 1, cancelled: 1 }
// Cas d'usage : Extraction des informations publiques d'un profil

const userProfile = {
    name: "Jean Martin",
    email: "jean@email.com",
    password: "secret123",
    age: 35,
    address: "123 rue Principal"
};
function extractProperties<UserProfile extends object, Key extends keyof UserProfile>(
  obj: UserProfile,
  keys: readonly Key[]
): Pick<UserProfile, Key> {

  const result: Partial<UserProfile> = {};

  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }

  return result as Pick<UserProfile, Key>;
}
const publicInfo = ["name", "age"] as const;
console.log(extractProperties(userProfile, publicInfo));
// { name: "Jean Martin", age: 35 }
// Cas d'usage : Tri des scores de joueurs

const playerScores = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
    David: 95
};
function sortObjectByValue(obj: Record<string, number>) {
    const entries = Object.entries(obj);
    //trie les entrées du tableau en fonction des valeurs (scores) de manière croissante
    entries.sort((a, b) => a[1] - b[1]);
    const result: Record<string, number> = {};
    for (const [key, value] of entries) {
        result[key] = value;
    }
    return result;
}
console.log(sortObjectByValue(playerScores));
// { Charlie: 78, Alice: 85, Bob: 92, David: 95 }
// Cas d'usage : Recherche du meilleur score dans un jeu

const gameScores = {
    level1: 850,
    level2: 920,
    level3: 880,
    level4: 1020
};
function findMaxValue(obj: Record<string, number>) {
    let maxValue = 0;
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) 
            && obj[key] > maxValue) {
            maxValue = obj[key];
        }
    }
    return maxValue;
}
console.log(findMaxValue(gameScores)); // 1020
// Cas d'usage : Création d'un catalogue de produits

const productPairs: [string, number][] = [
    ["pommes", 2.5],
    ["bananes", 1.8],
    ["oranges", 2.2]
];
function createObjectFromPairs(pairs: [string, number][]) {
    const result: Record<string, number> = {};
    for (const [key, value] of pairs) {
        result[key] = value;
    }
    return result;
}
console.log(createObjectFromPairs(productPairs));
// { pommes: 2.5, bananes: 1.8, oranges: 2.2 }
// Cas d'usage : Recherche dans une structure de données de configuration

const config = {
    app: {
        name: "MonApp",
        settings: {
            theme: "dark",
            notifications: {
                email: true,
                push: false
            }
        }
    }
};
function findValueInObject(obj: Record<string, any>, targetValue: any, path: string[] = []): string[] {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            //ajout de la clé actuelle au chemin de recherche
            const currentPath = [...path, key];
            if (value === targetValue) {
                return currentPath;
            }
            if (typeof value === "object" && value !== null) {
                const foundPath = findValueInObject(value, targetValue, currentPath);
                if (foundPath.length > 0) {
                    return foundPath;
                }
            }
        }
    }
    return [];
}
console.log(findValueInObject(config, "dark")); // ["app", "settings", "theme"]
// Cas d'usage : Groupement d'étudiants par niveau

const students = [
    { name: "Alice", level: "Débutant" },
    { name: "Bob", level: "Intermédiaire" },
    { name: "Charlie", level: "Débutant" },
    { name: "David", level: "Avancé" }
];
function groupByProperty<Student, Key extends keyof Student>(
  items: Student[],
  key: Key
): Record<string, Student[]> {
    const result: Record<string, Student[]> = {};
    for (const item of items) {
        const group = String(item[key]);
        if (!result[group]) {
            result[group] = [];
        }
        result[group].push(item);
    }   
    return result;    
}
console.log(groupByProperty(students, "level"));
// {
//   "Débutant": [
//     { name: "Alice", level: "Débutant" },
//     { name: "Charlie", level: "Débutant" }
//   ],
//   "Intermédiaire": [{ name: "Bob", level: "Intermédiaire" }],
//   "Avancé": [{ name: "David", level: "Avancé" }]
// }
// Cas d'usage : Validation d'un formulaire utilisateur

const userSchema = {
    name: "string",
    age: "number",
    email: "string"
};

const userInput = {
    name: "Marie",
    age: 25,
    email: "marie@email.com"
};
function validateObject(obj: Record<string, any>, schema: Record<string, string>) {
    for (const key in schema) {
        if (Object.prototype.hasOwnProperty.call(schema, key)) {
            const expectedType = schema[key];
            if (typeof obj[key] !== expectedType) {
                return false;
            }
        }   
    }
    return true;
}
console.log(validateObject(userInput, userSchema)); // true
// Cas d'usage : Suivi des modifications d'un profil utilisateur
const oldProfile = {
    name: "Jean Dupont",
    email: "jean@email.com",
    age: 30
};

const newProfile = {
    name: "Jean Dupont",
    email: "jean.dupont@email.com",
    age: 31,
    phone: "0123456789"
};
function compareDifferences<Profile extends object>(
  oldProfile: Profile,
  newProfile: Profile   
): Record<string, { type: "added" | "removed" | "modified"; old?: any; new?: any }> {
    const differences: Record<string,{ type: "added" | "removed" | "modified"; old?: any; new?: any }> = {};
    for (const key in oldProfile) {
        if (Object.prototype.hasOwnProperty.call(oldProfile, key)) {
            if (!(key in newProfile)) {
                differences[key] = { type: "removed", old: oldProfile[key] };
            } else if (oldProfile[key] !== newProfile[key]) {
                differences[key] = { type: "modified", old: oldProfile[key], new: newProfile[key] };
            }
        }
    }
    for (const key in newProfile) {
        if (Object.prototype.hasOwnProperty.call(newProfile, key) && !(key in oldProfile)) {
            differences[key] = { type: "added", new: newProfile[key] };
        }
    }
    return differences;
}
console.log(compareDifferences(oldProfile, newProfile));
// {
//     email: { type: "modified", old: "jean@email.com", new: "jean.dupont@email.com" },
//     age: { type: "modified", old: 30, new: 31 },
//     phone: { type: "added", new: "0123456789" }
// }
// Cas d'usage : Construction d'une URL de recherche

const searchParams = {
    query: "ordinateur portable",
    maxPrice: 1000,
    brand: "Dell",
    inStock: true
};
function objectToUrlParams(params: Record<string, any>) {
    const urlParams = new URLSearchParams();
    for (const key in params) { 
        if (Object.prototype.hasOwnProperty.call(params, key)) {
            urlParams.append(key, String(params[key]));
        }
    }
    return urlParams.toString();
}
console.log(objectToUrlParams(searchParams));
// query=ordinateur%20portable&maxPrice=1000&brand=Dell&inStock=true
// Cas d'usage : Construction d'une URL de recherche
const monthlyRevenues = {
    january: 1000,
    february: 1200,
    march: 900,
    april: 1500
};
function getObjectStats(obj: Record<string, number>) {
  const values = Object.values(obj).sort((a, b) => a - b);

  const total = values.reduce((sum, val) => sum + val, 0);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const average = total / values.length;

 
  let median: number;
  const mid = Math.floor(values.length / 2);
  if (values.length % 2 === 0) {
    median = (values[mid - 1] + values[mid]) / 2;
  } else {
    median = values[mid];
  }
  const variance =
    values.reduce((sum, val) => sum + Math.pow(val - average, 2), 0) /
    values.length;

  const standardDeviation = Math.sqrt(variance);

  return {
    basic: {
      min,
      max,
      average,
      total
    },
    advanced: {
      median,
      variance,
      standardDeviation: parseFloat(standardDeviation.toFixed(2))
    }
  };
}

console.log(getObjectStats(monthlyRevenues));
/**
* {
*  basic: {
*    min: 900,
*    max: 1500,
*    average: 1150,
*    total: 4600
*  },
*  advanced: {
*    median: 1100,
*    variance: 52500,
*    standardDeviation: 229.13
*  }
*}
*/