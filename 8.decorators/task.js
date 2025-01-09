//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    let hash = md5(args);
    let objectInCache = cache.find((item) => item.hash === hash)?.value; 
    if (objectInCache) {
      console.log("Из кеша: " + objectInCache);
      return "Из кеша: " + objectInCache;  
    }
    let result = func(...args); 
    cache.push({ hash: hash, value: result }); 
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  };
  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
let timeoutId;
let isTrottled = false;
function wrapper(...args) {
  clearTimeout(timeoutId);
  timeoutId = setTimeout( () => {
    func(args);
    wrapper.count++;
  }, delay);
  if (!isTrottled) {
    func(...args);
    wrapper.count++;
    isTrottled = true;
  }
  wrapper.allCount++;
}
wrapper.count = 0;
wrapper.allCount = 0;
return wrapper;
}


//Задача №1 от учителя
  const md5 = require('js-md5');
  function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {//используем обертку wrapper, в которую будем пробрасы
    //аргументы (...args)
    //используем md5 для получения хэша аргументов функции
    //т.е. мы здесь будем хэшировать аргументы(args)
    const hash = md5(JSON.stringify(args)); //получаем хэш аргументов
    // тогда при каждом запуске(внутри wrapper) мне надо проврять - 
    // есть ли hash для данных аргументов в кэше.
    //после того, как он посмотрел по аргументам и сгенерировал этот ключик - hash 
    //мы будем смотреть - есть ли у нас этот объект в кэше?
    //Это можно сделать следующим методом - перебирая
    let objectInCache = cache.find(item => item.hash === hash);
    //ищем элемент в кэше по хэшу
    if(objectInCache) {
      console.log("Из кеша: " + objectInCache.value, cache);
      // возвращаем из кэша - потому что он состоит из 2х частей: cache  и value, 
      //что мы и вывели в консоль, а теперь возвращаем из кэша value
      return "Из кэша: " + objectInCache.value;
    }
    // если же не было такого объекта в кэше - тогда я в result запишу работу функц
    // с аргументами
    let result = func(...args);

    //как сохранить объект? - добавляем элемент с правильной структурой
    cache.push({hash:hash, value:result});
    if(cache.length > 5) {
      cache.shift();//если слишком много элементов в кэше - удаляем самый старый
    }
    console.log("вычисляем: " + result,cache);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

//функция, которую хотим задекорировать - пробрасываем a,b,c и вычисляем (a + b) * c
// можно вычислять все что угодно с пробрасываемыми a,b,c -числами - любые формулы можно прописать
const addAndMultiply = (a, b, c) => (a + b) * c;

// как будет выглядеть проапгрейженая наша функция? - мы ее декорируем cachingDecoratorNew
// и внутрь кладем наш addAndMultiply
const upgraded = cachingDecoratorNew(addAndMultiply);
upgraded(1,2,3); //вычисляем:9
upgraded(1,2,3); // из кэша:9
upgraded(2,2,3); //вычисляем:12
upgraded(3,2,3); //вычисляем:15
upgraded(4,2,3); //вычисляем:18
upgraded(5,2,3); //вычисляем 21
upgraded(6,2,3); //вычисляем :24, при этом кэш для 1,2,3 уничтожается
upgraded(1,2,3); //вычисляем:9(снова вычисляем - кэш то уничтожился)

//Задача №3 от учителя

function debounceDecoratorNew(func, delay) { // принимает в себя функцию, которую хотим задекорировать и 
  //и delay - задержка
  let timeoutId; //для того, чтобы смотреть - а попали ли мы вообще в этот интервал, нам 
  //потребуется timeoutId - поскольку при запуске сигнала наш timeout будет обновляться,
  //и мы никогда не знаем - когда это произойдет, поэтому здесь при проверке будем запускать timeout

  //теперь нам потребуется 2 обертки
  //лучше сделать через лет
  
  wrapper.count = 0; //количество апли
  wrapper.allCount= 0; // количество всех оберток

//теперь делаем обертку, которая будет принимать аргументы (...args)
function wrapper(...args) {
  //если есть активный таймаут - увеличиваем счетчик отправленных сигналов - 
  // первый сигнал не учитывается, таймаута еще нет
  if(timeoutId) {
    console.log('уже есть таймаут', args);
    //все очищаем
    clearTimeout(timeoutId);
  }

  //для первого сигнала - апли + счетчик вызова увеличиваем
  //для ориентира при первом запуске можно опираться на идентификатор тайм-аута.
  //При первом вызове в идентификаторе ничего не будет, но мы учитываем апли, 
  // поэтому получается отправка первого сигнала

  if(!timeoutId) {
    console.log('первый сигнал', args);
    func.call(this, ...args);
    wrapper.count++;
  }

  timeoutId = setTimeout(() => {
    //планируем новую задержку
    //если у нас есть апли, значит мы запустили сигнал сделаем ++
    console.log("задержка более 2000 млсек, сработал таймаут");

    console.log('args', args);
    func.apply(this, args);
    wrapper.count++;
  }, delay);

  wrapper.allCount++;
}
return wrapper;

}

const sendSignal = (signalOrder, delay) => console.log("Сигнал отправлен", signalOrder, delay);
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);

setTimeout(() => upgradedSendSignal(1,0)); //сигнал отправлен+ будет запланирован асинхронный запуск,
// который будет проигнорирован, так как следующий сигнал отменит предыдущий(300 - 0 < 2000)

setTimeout(() => upgradedSendSignal(2,300), 300); // проигнорировано, так как следующий сигнал отменит 
//предыдущий(900 - 300 < 2000)