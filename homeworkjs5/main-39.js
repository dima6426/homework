// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
    name: "Dmitriy",
    age: 21,
    isProgramer: true,
    student: true
}

for (const key in person) {
    console.log(`${key}:`, person[key])
}

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

const isEmpty = obj => {
    for (const key in obj) {
        return false;
    }
    return true;
}

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
    title: "Изучить основы JavaScript",
    description: "Разобраться с объектами, циклами и функциями",
    isCompleted: true,
};

function cloneAndModify(object, modifications) {
    return {
        ...object,
        ...modifications
    };
}

const newTask = cloneAndModify(task, {
    author: "Dmitriy",
    isCompleted: false
});

for (const key in newTask) {
    console.log(`${key}:`, newTask[key]);
}


// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);



function callAllMethods(obj) {
    for (const key in obj) {
        if (typeof obj[key] === "function") {
            obj[key]();
        }
    }
}

const myObject = {
  method1() {
    console.log('Метод 1 вызван');
  },
  method2() {
    console.log('Метод 2 вызван');
  },
  property: 'Это не метод'
};

// 3. Вызываем функцию
callAllMethods(myObject);
