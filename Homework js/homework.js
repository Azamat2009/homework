//  Первое дз !!!!!!!!!

//let name = ['Abbos', 'Valentina', 'Odilbek', 'Shaxzod', 'Xojik', 'Emil', 'Saidbek', 'Morgenshtern', 'Alisher', 'Daler']

//найти самое длинное имя!!!!!!!!!!

function findLongestWord(array) {
    let longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  
  let names = findLongestWord(['Abbos', 'Valentina', 'Odilbek', 'Shaxzod', 'Xojik', 'Emil', 'Saidbek', 'Morgenshtern', 'Alisher', 'Daler']);
  console.log("1 задание -> " + names);


//2 homework

// Отфильтровать задачи в переменные а и b
    // Сохранить количество в ключе count
    // Сохранить сами задачи в массиве-ключе arr
    let arr = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut au`tem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
  
            "completed": true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
        {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
        },
        {
            "userId": 1,
            "id": 7,
            "title": "illo expedita consequatur quia in",
            "completed": false
        },
        {
            "userId": 1,
            "id": 8,
            "title": "quo adipisci enim quam ut ab",
            "completed": true
        },
        {
            "userId": 1,
   
            "id": 9,
            "title": "molestiae perspiciatis ipsa",
            "completed": false
        },
        {
            "userId": 1,
            "id": 10,
            "title": "illo est ratione doloremque quia maiores aut",
            "completed": true
        },
    ]
let complete = {
    count: 0,
    arr: []
}
   
let notCompleted = {
    count: 0,
    arr: []
}

const a = arr.filter(item => item.completed)
console.log(a)


const b = arr.filter(item => !item.completed)
console.log(b)

// 3
console.log( '3 задание ->  https://www.youtube.com/' )
