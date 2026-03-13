function lengthWithoutSpaces(str: string): number {
  return str.replace(/\s+/g, '').length;
}
const message = "Bonjour le monde !";
console.log(lengthWithoutSpaces(message)); // 15

function greet(name: string): string {
  if (!name) return "Bonjour !"; 

  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return `Bonjour ${formattedName}`;
}
console.log(greet("jean-pierre"))

function pointExclamation(str:string):boolean {
  return  str[str.length - 1] === "!";
}
console.log(pointExclamation("Je suis très satisfait !")); // true
console.log(pointExclamation("Bonjour")); // false

function toCamelCase(str: string): string {
  const words = str.split("_");

  let result = words[0]; // premier mot reste en minuscule

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    result += word.charAt(0).toUpperCase() + word.slice(1);
  }

  return result;
}
const sqlColumnName = "user_first_name";
const javascriptProperty = toCamelCase(sqlColumnName);

console.log(javascriptProperty); // userFirstName

function countVoyel(text: string): number {
  const voyels = "aeiouyéàùèêâôîûAEIOUY";
  let count = 0;

  for (const char of text) {
    if (voyels.includes(char)) {
      count++;
    }
  }

  return count;
}
console.log(countVoyel("Bonjour le monde")); // 6
console.log(countVoyel("Poésie")); // 4

function alternateCase(text: string): string {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      result += text[i].toUpperCase();
    } else {
      result += text[i].toLowerCase();
    }
  }

  return result;
}
console.log(alternateCase("motdepasse"));
// MoTdEpAsSe

function removeDuplicates(text: string): string {
  return text.replace(/(.)\1+/g, "$1");
}

const messageUtilisateur = "Bonjouuuur !!! J'ai besoiiiin d'aide ....";
const messageNettoye = removeDuplicates(messageUtilisateur);
// problématique pour les doubles
console.log(`Message normalisé : ${messageNettoye}`);

function hidestring(text: string, visibleCount: number): string {
  const hidePart = "*".repeat(Math.max(0, text.length - visibleCount));
  const visiblePart = text.slice(-visibleCount);
  return hidePart + visiblePart;
}
const cardNumber = "1234567890123456";
console.log(hidestring(cardNumber, 4)); 

function raccourcis(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength) + "...";
}
const description = "Ceci est une très longue description d'un produit";

console.log(raccourcis(description, 20));

function Majuscules(text: string): string {
  const words = text.split(" ");
  let result: string[] = [];

  for (const word of words) {
    result.push(word.charAt(0).toUpperCase() + word.slice(1));
  }

  return result.join(" ");
}
const title = "bienvenue sur notre site web";
console.log(Majuscules(title));