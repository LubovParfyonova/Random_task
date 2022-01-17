'user strict';

function User(firstName, lastName, age, email, isMale, isSubscribe = false) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.isMale = isMale;
    this.isSubscribe = isSubscribe;

    this.getFullName = function getFullName () {
        return `${this.firstName} ${lastName}`;
    }
}

function createRandomUser(quantity) {
    const res = [];

    for (let i = 0; i < quantity; i++) {
        const user = new User(
            `Name${i}`,
            `LastName ${i}`,
            Math.round(Math.random()*100),
            `mail${i}@test.com`,
            Math.random() > 0.5,
            // 3. Зарандомить подписку у пользователей
            Math.random() > 0.5
        );
        res.push(user);
    }
    return res;
}

const userArr = createRandomUser(50);
console.table(userArr);


//Tasks:
//1. Получить массив полных имен с помощью .map()
 function getArrFullName (arr) {
    const newArr = arr.map((userItem) => {
        return userItem.getFullName();
    })
   return newArr;
}
const result = getArrFullName(userArr);
console.table(result); 


// 2. Получить массив совершеннолетних пользователей

const filteredArrOfAdult = userArr.filter(item => item.age > 18 || item.age === 18);
console.table(filteredArrOfAdult);

// 4. Получить массив подписанных совершеннолетних пользователей женского пола, но вывести только их почту

function getSubscribeFemale (item, index) {
    if (item.isSubscribe && !item.isMale){
        console.table(`${index}: ${item.email}`); 
    }
}

const arrSubscibeFemale = filteredArrOfAdult.filter(getSubscribeFemale);
console.table(arrSubscibeFemale); 

