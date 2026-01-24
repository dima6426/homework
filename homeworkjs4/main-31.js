// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

function calculateFinalPrice(price, discountPercent, taxRate) {
    const discount = price * (discountPercent / 100);
    const priceAfterDiscount = price - discount;
    const tax = priceAfterDiscount * taxRate;

    return priceAfterDiscount + tax;
}

console.log(calculateFinalPrice(200, 10, 0.3)); 



// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

const ADMIN_NAME = "admin";
const ADMIN_PASSWORD = "123456";

const checkAccess = (name, password) => {
    return (name === ADMIN_NAME && password === ADMIN_PASSWORD) 
        ?"Доступ разрешен":
        "Доступ запрещен";
    }


console.log(checkAccess("admin", "123456"))

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

function getTimeOfDay(time) {
    if (time < 0 || time > 23) {
        return "Некорректное время";
    }
    if (time <= 5) return "Ночь";
    if (time <= 11) return "Утро";
    if (time <= 17) return "День";
    return "Вечер";

}

console.log(getTimeOfDay(10))



// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

function findFirstEven(start , end){
    for (let i = start ; i <= end; i++){
        if(i % 2 === 0){
            return i;
        }
    }
    return "Четных чисел нет "
}

console.log(findFirstEven(5 , 8))
