/*
  JS Alapok - Modulzáró - 2024.06.22.

  Ez a fájl tartalmazza a modulzáró gyakorlati részének feladatait. A megoldásaidat kérlek ebben a fájlban helyezd el, de dolgozni dolgozhatsz külön fájlokban is.

  Néhány jótanács:
  - mindenképpen olvasd el figyelmesen a feladatokat, különösképpen a példában megadott teszteseteket!
  - a példákban a -> jelölés után vagy a függvény visszatérési értéke, vagy a függvény által kiírandó dolog szerepel
  - ha valamivel nagyon elakadtál, inkább menj tovább és térj vissza később
  - mielőtt feltöltenéd a megoldásaidat nézd át őket
  - győződj meg róla, hogy minden kód, amit le akartál írni le van írva, és amit nem akartál leírni az nincs :)
  - a megoldásokat alapvetően a kijelölt helyekre várjuk, de segédfüggvényeket és függvényen kívüli változókat bármikor létrehozhatsz
*/

// 1. Feladat - faktoriális

// Írj egy függvényt, ami visszaadja egy beadott, nemnegatív szám faktoriálisát!
// Faktoriális: egy szám faktoriálisa az összes olyan pozitív egész szám szorzatát jelenti, ami a számnál kisebb vagy azzal egyenlő
// Jelölése a matematikában: !
// pl.: 5 faktoriálisa: 5! = 1 * 2 * 3 * 4 * 5 = 120
// megegyezés alapján a 0! = 1
// pl.: factorial(5) -> 120
// pl.: factorial(0) -> 1
// pl.: factorial(3) -> 6
// pl.: factorial(-2) -> undefined

function factorial(num) {
  if (num < 0) {
    return undefined;
  }
  let result = 1;

  for (let i = num; i > 0; i--) {
    result *= i;
  }

  return result;
}
// console.log(factorial(6));
// 2. Feladat - FizzBuzz

// Írj egy függvényt, ami a kövektezőképpen működik:
// 1. A konzolra írja egy-től a paraméterként beadott pozitív egész számig a számokat egyesével
// 2. Ha a soron következő szám 3-mal osztható a szám helyett azt írja ki, hogy fizz
// 3. Ha a soron következő szám 5-tel osztható a szám helyett azt írja ki, hogy buzz
// 4. Ha a soron következő szám 3-mal és 5-tel is osztható a szám helyett azt írja ki, hogy fizzbuzz
// pl.: fizzbuzz(20) -> 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz, 16, 17, fizz, 19, buzz

function fizzbuzz(n) {
  if (typeof n !== "number" || n <= 0 || !Number.isInteger(n)) {
    console.log("&sak pozitív egész számot lehet megadni.");
    return;
  }
  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "fizz";
    }
    if (i % 5 === 0) {
      output += "buzz";
    }
    console.log(output || i);
  }
}
// fizzbuzz(30);
// 3. Feladat - Unicum, csak pozitívan!

// Írj egy függvényt, ami egy egész számokat tartalmazó tömbből visszadja egy tömb formájában azokat a számokat, amelyek pozitívak!
// pl.: getPositives([1, 10, -3, 4, -156, 0, 3, 4]) -> [1, 10, 4, 3, 4]
// pl.: getPositives([-1, -2, -3]) -> []
// pl.: getPositives([3, 20, 54]) -> [3, 20, 54]

function getPositives(arr) {
  let positives = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives.push(arr[i]);
    }
  }
  return positives;
}
// console.log(getPositives([1, 10, -3, 4]));
// console.log(getPositives([-1, -10, -3, -4]));

// 4. Feladat - Perdülj, fordulj!

// Írj egy függvényt, ami a paraméterként megadott tömbjét valemlyik irányba "elforgatja"!
// Balra forgatás azt jelenti, hogy a tömb első eleme a tömb utolsó helyére kerül,
// jobbra forgatás esetén a tömb utolsó eleme kerül a tömb első helyére.
// A függvény a művelet végrehajtása után adja vissza a megváltoztatott tömböt, hibás irány esetén pedig az eredetit!
// pl.: rotate("left", [1, 2, 3]) -> [2, 3, 1]
// pl.: rotate("right", [1, 2, 3]) -> [3, 1, 2]
// pl.: rotate("hibás érték", [1, 2, 3]) -> [1, 2, 3]

function rotate(direction, arr) {
  if (direction !== "left" && direction !== "right") {
    console.log('Rossz irány "left" vagy "right" irányt kell megadni.');
    return arr;
  }
  if (direction === "left") {
    if (arr.length <= 1) {
      return arr;
    }
    const firstElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
      arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = firstElement;
  }
  if (direction === "right") {
    if (arr.length <= 1) {
      return arr;
    }
    const lastElement = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = lastElement;
  }
  return arr;
}
// console.log(rotate("left", [5, 6, 7]));
// 5. Feladat - Nagy (Betűs) Szavak

// Írj egy függvényt, ami a paraméterként megadott mondatot olyan formában adja vissza, hogy annak minden szava nagybetűvel kezdődjön!
// pl.: capitalizeWords("Ha a győzelem gátja a gát, akkor fel kell robbantani.") -> "Ha A Győzelem Gátja A Gát, Akkor Fel Kell Robbantani."
// A feladathoz felhasználhatod a segítségként megadott isSeparator függvényt.

function isSeparator(c) {
  let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
  return separators.includes(c);
}
function capitalizeWords(text) {
  if (!text || typeof text !== "string") {
    return "";
  }
  let result = "";
  let capitalizeNext = true;
  for (let i = 0; i < text.length; i++) {
    let currentChar = text[i];
    if (isSeparator(currentChar)) {
      result += currentChar;
      capitalizeNext = true;
    } else {
      if (capitalizeNext && currentChar >= "a" && currentChar <= "z") {
        result += currentChar.toUpperCase();
        capitalizeNext = false;
      } else {
        result += currentChar.toLowerCase();
      }
    }
  }
  return result;
}
// console.log(capitalizeWords("ugytűnik ezt sikerült megcsinálni!"));
// 6. Feladat - Felhasználók

// 1. Készíts egy felhasználókat tartalmazó adatbázist!
// 2. Minden felhasználónak van e-mail címe, jelszava, vezeték és keresztneve
// 3. A felhasználókat helyezd el egy tömbben!
// 4. Készíts egy bejelentkezés kezelésére szolgáló függvényt, ami a következőképpen működik
//    - Ha meghívjuk a függvényt, akkor a program a felhasználótól bekér egy e-mail címet
//    - Ha a felhasználó megadott egy e-mail címet, akkor egy másik ablakban bekér egy jelszót
//    - Ha a felhasználó helyes e-mail - jelszó kombinációt adott meg, egy ablakban írja ki a program, hogy sikeres a bejelentkezés
//    - Amennyiben valamelyik megadott adat nem stimmel írja ki, hogy a bejelentkezés sikertelen
// 5. Készíts egy felhasználó e-mail címét megváltoztatni képes függvényt!
//    - A függvénynek két paramétere legyen: a régi és az új e-mail cím
//    - Amennyiben létezik az adatbázisban a megadott e-mail címmel felhasználó változtassa meg az e-mail címét az újra
//    - Ha nincs ilyen e-mail című felhasználó írjon ki egy üzenetet erről
// 6. Készíts egy függvényt, ami létre tud hozni egy új felhasználót az adatbázisban!
//    - Paraméterek: e-mail cím, jelszó, jelszó megerősítése, vezeték és keresztnév
//    - Ha a jelszó és a jelszó megerősítése nem egyeznek meg írjon ki hibaüzenetet!
//    - Ha a megadott e-mail címmel már szerepel felhasználó az adatbázisban írjon ki hibaüzenetet!
//    - Egyébként készítsen el egy új felhasználót és helyezze el a felhasználókat tartalmazó tömbben!

// 1, 2, és 3-as feladat megoldása jöhetnek a komment alá
let users = [
    {
        firstName: 'Ludas',
        lastName: 'Matyi',
        email: 'ludas.matyi@gmail.com',
        password: 'ludas123'
    },
    {
        firstName: 'Mézga',
        lastName: 'Aladár',
        email: 'mezga.aladar@freemail.com',
        password: 'aladar456'
    },
    {
        firstName: 'Hüvejk',
        lastName: 'Matyi',
        email: 'huvejk.matyi@valami.com',
        password: 'matyi123'
    },
    {
        firstName: 'Vizipók',
        lastName: 'Csodapók',
        email: 'vizipok.csodapok@yahoo.com',
        password: 'vizipok123'
    },
    {
        firstName: 'Grabowszki',
        lastName: 'Nick',
        email: 'nick.grabowszki@ezisvalami.com',
        password: 'grabowszki123'
    },
    {
        firstName: 'Dr.',
        lastName: 'Bubó.',
        email: 'dr.bubo@doki.com',
        password: 'bubo123'
    }
];
// console.log(users);

// 4-es részfeladat megoldása
function logIn() {
    let email = prompt("Add meg az e-mail címed:");
    let user = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            user = users[i];
            break;
        }
    }
    if (!user) {
        alert("Hibás e-mail cím. Bejelentkezés sikertelen.");
        return;
    }
    let password = prompt("Add meg a jelszavad:");
    if (user.password === password) {
        alert("Sikeres bejelentkezés!");
    } else {
        alert("Hibás jelszó. Bejelentkezés sikertelen.");
    }
}
// logIn();

// 5-ös részfeladat megoldása
function changeEmail(currentEmail, newEmail) {
    let userIndex = -1;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === currentEmail) {
            userIndex = i;
            break;
        }
    }
    let isNewEmailExists = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === newEmail) {
            isNewEmailExists = true;
            console.log("Változtatás sikertelen , ez az e-mail cím, már létezik!");
            return;
        }
    }
    if (userIndex === -1) {
        console.log("Felhasználó ismeretlen.");
        return;
    }
    let { firstName, lastName } = users[userIndex];
    users[userIndex].email = newEmail;

    console.log(`Változtatás sikeres! ${firstName} ${lastName} új e-mail címe: ${newEmail}`);
}
// changeEmail('ludas.matyi@gmail.com', 'matyi.ludas@gmail.com');
// changeEmail('ludas.matyi@gmail.com', 'vizipok.csodapok@yahoo.com');
// changeEmail('valami@nemletezik.com', 'ujemail@valami.com');
 
// 6-os részfeladat megoldása
function register(email, password, passwordConfirmation, firstName, lastName) {
    if (password !== passwordConfirmation) {
        console.log("A jelszavak nem egyeznek meg!");
        return;
    }
    let emailExists = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            emailExists = true;
            console.log("Ez az e-mail cím már regisztrálva van!");
            return;
        }
    }

    let newUser = {
        email,
        password,
        firstName,
        lastName
    };
    users.push(newUser);
    console.log(`Új felhasználó létrehozva: ${firstName} ${lastName} (${email})`);
}
// register('uj.felhasznalo@gmail.com', 'ujjelszo123', 'ujjelszo123', 'Új', 'Felhasználó');
// register('ludas.matyi@gmail.com', 'ludas123', 'ludas123', 'Ludas', 'Matyi');
// register('mezga.aladar@újemail.com', 'aladar456', 'aladar456', 'Mézga', 'Aladár');
// register('ludas.matyi@gmail.com', 'ludas123', 'ludas123', 'Ludas', 'Matyi');
// register('ludas.matyi@valami.com', 'ludas123', 'ludas124', 'Ludas', 'Matyi');
/*
  Mindenre válaszoltál? Átnézted? Patent?
*/
