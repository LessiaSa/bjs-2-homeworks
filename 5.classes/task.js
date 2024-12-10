class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }
    set state(state) {
        if (state <= 0) {
          this._state = 0;
        } else if (state >= 100) {
          this._state = 100;
        } else {
          this._state = state;
        }
      }
      get state() {
        return this._state;
      }
}

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
   );
   
   console.log(sherlock.releaseDate); //2019
   console.log(sherlock.state); //100
   sherlock.fix();
   console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
    constructor(name,releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name,releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.state = 100;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name,releaseDate, pagesCount) {
        super(author,name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name,releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name,releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "detective";
    }
}

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick.author); //"Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); //10
  picknick.fix();
  console.log(picknick.state); //15


class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        } 
    }

//ищем книгу по заданному ключу - type и искомому значению - value
//если нашли - return книгу
//если нет - возвращаем null
    findBookBy (type, value) {
        return this.books.find(book => book[type] === value) || null;
    }
// ищем книгу по указанному названию с помощью метода findBookByName,
// удаляем ее из хранилища books с помощью .splice и return
//если книга не найдена - возвращаем null по методу findBookBy
    giveBookByName(bookName) {
        const book = this.findBookBy("name", bookName);
        if (book) {
            this.books.splice(this.books.indexOf(book), 1);
        }
        return book;
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

const library2 = new Library("Центральная городская библиотека");
library2.addBook(
    new NovelBook(
        "Александр Сергеевич Пушкин",
        "Метель",
        1830,
        22
    )
);
library2.addBook(
    new NovelBook(
        "Иван Александрович Бунин",
        "Муза",
        1938,
        7
    )
);
const myza = new NovelBook(
    "Иван Александрович Бунин",
    "Муза",
    1938,
    7
)
library2.addBook(
    new FantasticBook(
        "Роджер Желязны",
        "Девять принцев Эмбера",
        2022,
        288
    )
);
library2.addBook(
    new Book(
        "Джеймс Оливер Кервуд",
        "Бродяги севера",
        1919,
        240
    )
);
console.log(library2.findBookBy("releaseDate", 1919).name);
console.log(library2.books.length);
library2.giveBookByName("Муза");
console.log(library2.books.length);
myza.state = 29;
console.log(myza.state);
library2.addBook("Муза");
console.log(library2.books.length);
myza.fix();
console.log(myza.state);
library2.addBook(
    new NovelBook(
    "Иван Александрович Бунин",
    "Муза",
    1938,
    7
));
console.log(library2.books.length);